import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 讀取 .env 檔案取得 API key
function loadEnv() {
  const envPath = path.join(__dirname, "../.env");
  const content = readFileSync(envPath, "utf-8");
  const match = content.match(/GOOGLE_PLACES_API_KEY=(.+)/);
  return match?.[1]?.trim() ?? null;
}

const API_KEY = loadEnv();
const PLACE_NAME = "星域智空間24小時全智能個人倉庫（延吉店）";

async function test() {
  console.log("=".repeat(50));
  console.log("🔑 Google Places API Key 測試");
  console.log("=".repeat(50));

  if (!API_KEY) {
    console.error("❌ .env 找不到 GOOGLE_PLACES_API_KEY");
    process.exit(1);
  }

  const maskedKey = API_KEY.slice(0, 8) + "..." + API_KEY.slice(-4);
  console.log(`\n🔐 Key: ${maskedKey}`);

  // Step 1: 搜尋地點
  console.log(`\n📍 Step 1 — 搜尋「${PLACE_NAME}」...`);
  const findUrl =
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json` +
    `?input=${encodeURIComponent(PLACE_NAME)}` +
    `&inputtype=textquery` +
    `&fields=place_id,name` +
    `&key=${API_KEY}`;

  const findRes = await fetch(findUrl);
  const findData = await findRes.json();

  if (findData.status !== "OK" || !findData.candidates?.length) {
    console.error(`❌ Step 1 失敗`);
    console.error(`   Status: ${findData.status}`);
    if (findData.error_message) console.error(`   Error:  ${findData.error_message}`);
    console.log("\n🛠  請到 Google Cloud Console 確認：");
    console.log("   1. Places API 已啟用");
    console.log("   2. API Key 無 HTTP referrer / IP 限制（或已加 localhost）");
    process.exit(1);
  }

  const placeId = findData.candidates[0].place_id;
  const placeName = findData.candidates[0].name;
  console.log(`✅ 找到地點: ${placeName}`);
  console.log(`   Place ID: ${placeId}`);

  // Step 2: 取得評論
  console.log(`\n📝 Step 2 — 取得評論...`);
  const detailUrl =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&language=zh-TW` +
    `&reviews_sort=newest` +
    `&key=${API_KEY}`;

  const detailRes = await fetch(detailUrl);
  const detailData = await detailRes.json();

  if (detailData.status !== "OK") {
    console.error(`❌ Step 2 失敗`);
    console.error(`   Status: ${detailData.status}`);
    if (detailData.error_message) console.error(`   Error:  ${detailData.error_message}`);
    process.exit(1);
  }

  const reviews = detailData.result?.reviews ?? [];
  const totalRating = detailData.result?.rating;
  const totalCount = detailData.result?.user_ratings_total;

  console.log(`✅ 整體評分: ⭐ ${totalRating} (共 ${totalCount} 則評論)`);
  console.log(`   取得評論數: ${reviews.length} 則\n`);

  const fiveStar = reviews.filter((r) => r.rating === 5);
  console.log(`⭐⭐⭐⭐⭐ 5 星評論: ${fiveStar.length} 則`);

  reviews.forEach((r, i) => {
    const stars = "⭐".repeat(r.rating);
    const preview = r.text.slice(0, 50).replace(/\n/g, " ");
    console.log(`   [${i + 1}] ${stars} ${r.author_name} — ${preview}...`);
  });

  console.log("\n" + "=".repeat(50));
  console.log("🎉 測試全部通過！/api/reviews 可以正常運作");
  console.log("=".repeat(50));
}

test().catch((err) => {
  console.error("❌ 發生錯誤:", err.message);
  process.exit(1);
});
