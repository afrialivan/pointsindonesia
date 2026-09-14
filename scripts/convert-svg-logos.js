// scripts/convert-svg-logos.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/mitra';
let totalBefore = 0;
let totalAfter = 0;
let count = 0;
let failed = [];

async function processFile(fullPath, file) {
  const stat = fs.statSync(fullPath);
  const sizeBefore = stat.size;
  const svgContent = fs.readFileSync(fullPath, 'utf-8');

  // Cari data base64 di dalam tag <image ... xlink:href="data:image/...;base64,....">
  const match = svgContent.match(/xlink:href="data:image\/(png|jpeg|jpg);base64,([^"]+)"/i);

  if (!match) {
    console.log(`⚠ Dilewati (bukan base64-embedded): ${file}`);
    failed.push(file);
    return;
  }

  const base64Data = match[2];
  const buffer = Buffer.from(base64Data, 'base64');

  const outputPath = fullPath.replace(/\.svg$/i, '.webp');

  await sharp(buffer)
    .resize(400, null, { withoutEnlargement: true }) // logo cukup lebar max 400px
    .webp({ quality: 85 })
    .toFile(outputPath);

  const sizeAfter = fs.statSync(outputPath).size;
  totalBefore += sizeBefore;
  totalAfter += sizeAfter;
  count++;

  console.log(
    `✓ ${file} → ${path.basename(outputPath)}  (${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB)`
  );

  // Hapus file SVG asli setelah berhasil convert
  fs.unlinkSync(fullPath);
}

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.svg$/i.test(file)) {
      await processFile(fullPath, file);
    }
  }
}

processDir(inputDir).then(() => {
  console.log(`\n=== SELESAI ===`);
  console.log(`Total file diproses: ${count}`);
  if (failed.length > 0) {
    console.log(`Dilewati (bukan base64-SVG): ${failed.length} → ${failed.join(', ')}`);
  }
  console.log(`Ukuran sebelum: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ukuran sesudah: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Penghematan: ${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}%`);
});