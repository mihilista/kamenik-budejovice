const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const files = process.argv.slice(2);

if (!files.length) {
  console.log("No files to process");
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const ext = path.extname(file);
    const outFile = file; // overwrite in place, or use `file.replace(ext, '-opt' + ext)` for testing
    // const outFile = file.replace(ext, "-opt" + ext);
    try {
      const image = sharp(file).rotate();

      if ([".jpg", ".jpeg"].includes(ext)) {
        await image.jpeg({ quality: 80 }).toFile(outFile);
      } else if (ext === ".png") {
        await image.png({ compressionLevel: 9 }).toFile(outFile);
      } else if (ext === ".webp") {
        await image.webp({ quality: 80 }).toFile(outFile);
      }
      console.log(`Optimized: ${file}`);
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err);
    }
  }
})();
