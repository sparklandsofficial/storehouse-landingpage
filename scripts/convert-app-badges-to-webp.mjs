import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ImagePool } from "@squoosh/lib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");

const INPUTS = [
  {
    in: path.join(repoRoot, "public/images/ios-download.png"),
    out: path.join(repoRoot, "public/@ios-download.webp"),
  },
  {
    in: path.join(repoRoot, "public/images/android-download.png"),
    out: path.join(repoRoot, "public/@android-download.webp"),
  },
];

async function convert() {
  const pool = new ImagePool();

  for (const item of INPUTS) {
    await fs.access(item.in);

    const buf = await fs.readFile(item.in);
    const img = pool.ingestImage(buf);

    await img.encode({
      webp: {
        quality: 85,
      },
    });

    const encoded = await img.encodedWith.webp;
    await fs.writeFile(item.out, encoded.binary);
    console.log(`✅ wrote ${path.relative(repoRoot, item.out)}`);
  }

  await pool.close();
}

convert().catch((err) => {
  console.error("❌ convert failed:", err?.message ?? err);
  process.exit(1);
});

