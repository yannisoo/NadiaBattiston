// Generates the optimized images served by the site (WebP + social preview)
// from the full-size files in originals/, which are not deployed.
// Existing outputs are skipped, so this is cheap to run before every build.
// Usage: npm run optimize-images            (only missing files)
//        npm run optimize-images -- --force (regenerate everything)
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const pub = (path) => join(root, "public", path);
const original = (file) => join(root, "originals", file);
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const force = process.argv.includes("--force");

const photos = readJson("src/assets/photos.json");
const extracts = readJson("src/assets/extracts.json");
const studio = ["studio-micro.jpeg", "studio.jpeg", "studio-mylo.jpeg"];

const jobs = [
  { src: "mic-background-image.png", out: "images/hero.webp", width: 1280 },
  { src: "mic-background-image.png", out: "og-image.jpg", og: true },
  ...photos.flatMap(({ file }) =>
    [640, 1280].map((width) => ({
      src: `${file}.jpg`,
      out: `images/photos/${file}-${width}.webp`,
      width,
    }))
  ),
  { src: "cabine_one_plus.jpg", out: "images/studio/cabine-800.webp", width: 800 },
  ...studio.flatMap((file) =>
    [800, 1600].map((width) => ({
      src: file,
      out: `images/studio/${parse(file).name}-${width}.webp`,
      width,
    }))
  ),
  ...[...new Set(extracts.map((e) => e.image))].map((image) => ({
    src: image,
    out: `images/extraits/${parse(image).name}.webp`,
    width: 320,
    height: 320,
  })),
];

const ogOverlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="600" y="565" text-anchor="middle" fill="#f4f1ea"
        font-family="Georgia, 'Times New Roman', serif" font-size="56">Nadia Battiston</text>
  <text x="600" y="608" text-anchor="middle" fill="#e2b26b" letter-spacing="6"
        font-family="Helvetica, Arial, sans-serif" font-size="22">COMÉDIENNE VOIX OFF</text>
</svg>`);

const pending = jobs.filter((job) => force || !existsSync(pub(job.out)));
if (pending.length === 0) {
  console.log("optimize-images: all images up to date");
  process.exit(0);
}

const { default: sharp } = await import("sharp");

for (const job of pending) {
  mkdirSync(dirname(pub(job.out)), { recursive: true });
  // rotate() applies the EXIF orientation of phone photos before resizing
  let image = sharp(original(job.src)).rotate();
  if (job.og) {
    image = image
      .resize(1200, 500, { fit: "contain", background: "#000" })
      .extend({ top: 0, bottom: 130, background: "#000" })
      .composite([{ input: ogOverlay }])
      .jpeg({ quality: 82, mozjpeg: true });
  } else {
    image = image
      .resize(job.width, job.height, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 });
  }
  const { size } = await image.toFile(pub(job.out));
  console.log(`optimize-images: ${job.out} (${Math.round(size / 1024)} kB)`);
}
