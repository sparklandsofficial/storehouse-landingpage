import { NextResponse } from "next/server";
import reviewsFallback from "@/data/reviews.json";

const PLACE_NAME = "星域智空間24小時全智能個人倉庫（延吉店）";
const BG_COLORS = [
  "bg-secondary-container",
  "bg-tertiary-fixed",
  "bg-primary-fixed",
  "bg-secondary-container",
  "bg-tertiary-fixed",
];
const TARGET_COUNT = 5;

interface PlacesReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

async function findPlaceId(apiKey: string): Promise<string | null> {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(PLACE_NAME)}&inputtype=textquery&fields=place_id&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  const data = await res.json();
  return data.candidates?.[0]?.place_id ?? null;
}

async function fetchPlaceReviews(
  placeId: string,
  apiKey: string,
  sort: "newest" | "most_relevant" = "newest"
): Promise<PlacesReview[]> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=zh-TW&reviews_sort=${sort}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  const data = await res.json();
  return data.result?.reviews ?? [];
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const placeId = await findPlaceId(apiKey);
    if (!placeId) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    // 先抓最新排序，再抓最相關排序，合併後去重，確保湊足 5 則 5 星評論
    const [newestRaw, relevantRaw] = await Promise.all([
      fetchPlaceReviews(placeId, apiKey, "newest"),
      fetchPlaceReviews(placeId, apiKey, "most_relevant"),
    ]);

    // 去重（以 author_name + text 前 20 字為 key）
    const seen = new Set<string>();
    const merged = [...newestRaw, ...relevantRaw].filter((r) => {
      const key = `${r.author_name}::${r.text.slice(0, 20)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // 只保留 5 星且有文字內容，維持 newest 優先的順序
    const fiveStar = merged.filter((r) => r.rating === 5 && r.text.trim().length > 0);

    const liveReviews = fiveStar.slice(0, TARGET_COUNT).map((r, i) => ({
      id: i + 1,
      name: r.author_name,
      role: "Google 評論",
      quote: r.text,
      avatar: r.author_name.charAt(0),
      bgColor: BG_COLORS[i],
      rating: r.rating,
      time: r.relative_time_description,
      profilePhoto: r.profile_photo_url ?? "",
    }));

    // 實時評論不足 TARGET_COUNT 時，用 fallback 補齊
    const reviews = [...liveReviews];
    if (reviews.length < TARGET_COUNT) {
      const liveNames = new Set(reviews.map((r) => r.name));
      const extras = reviewsFallback.reviews.filter((r) => !liveNames.has(r.name));
      for (const extra of extras) {
        if (reviews.length >= TARGET_COUNT) break;
        reviews.push({ ...extra, id: reviews.length + 1, bgColor: BG_COLORS[reviews.length] });
      }
    }

    return NextResponse.json({
      lastUpdated: new Date().toISOString().split("T")[0],
      reviews,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
