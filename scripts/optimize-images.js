// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/mitra';
let totalBefore = 0;
let totalAfter = 0;
let count = 0;

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const outputPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const sizeBefore = stat.size;

      await sharp(fullPath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const sizeAfter = fs.statSync(outputPath).size;
      totalBefore += sizeBefore;
      totalAfter += sizeAfter;
      count++;

      console.log(
        `✓ ${outputPath}  (${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB)`
      );

      // Hapus file asli setelah berhasil convert
      fs.unlinkSync(fullPath);
    }
  }
}

processDir(inputDir).then(() => {
  console.log(`\n=== SELESAI ===`);
  console.log(`Total file diproses: ${count}`);
  console.log(`Ukuran sebelum: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ukuran sesudah: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Penghematan: ${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}%`);
});