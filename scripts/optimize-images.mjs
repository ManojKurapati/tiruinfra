import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC = "/Users/klm/Downloads/construction";
const OUT = path.resolve("public/images");

const variants = [
  { suffix: "", width: 1920, quality: 78 },
  { suffix: "-md", width: 1280, quality: 75 },
  { suffix: "-sm", width: 640, quality: 72 },
  { suffix: "-blur", width: 24, quality: 40, blur: 6 },
];

async function run() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    const stem = path.parse(file).name;
    for (const v of variants) {
      const out = path.join(OUT, `${stem}${v.suffix}.webp`);
      let pipeline = sharp(path.join(SRC, file)).rotate().resize({
        width: v.width,
        withoutEnlargement: true,
      });
      if (v.blur) pipeline = pipeline.blur(v.blur);
      await pipeline.webp({ quality: v.quality, effort: 5 }).toFile(out);
      console.log("wrote", out);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
