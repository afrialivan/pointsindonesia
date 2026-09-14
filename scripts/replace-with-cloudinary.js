// scripts/replace-with-cloudinary.js
const fs = require('fs');
const path = require('path');

// Baca mapping hasil upload Cloudinary
const mapping = JSON.parse(fs.readFileSync('cloudinary-mapping.json', 'utf-8'));

// Folder yang isinya file .tsx yang mau di-scan & diganti
const targetDirs = ['components', 'app'];

let totalReplaced = 0;
let filesChanged = [];

function processFile(fullPath) {
  let content = fs.readFileSync(fullPath, 'utf-8');
  let changed = false;

  for (const [localPath, cloudinaryUrl] of Object.entries(mapping)) {
    // Cari string persis path lokal, misal '/portofolio/jaket-rompi/1.webp'
    const regex = new RegExp(localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(localPath)) {
      content = content.replace(regex, cloudinaryUrl);
      changed = true;
      totalReplaced++;
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    filesChanged.push(fullPath);
    console.log(`✓ Updated: ${fullPath}`);
  }
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (item === 'node_modules' || item === '.next') continue;
      processDir(fullPath);
    } else if (/\.(tsx|ts|jsx|js)$/i.test(item)) {
      processFile(fullPath);
    }
  }
}

for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    processDir(dir);
  }
}

console.log(`\n=== SELESAI ===`);
console.log(`File yang diubah: ${filesChanged.length}`);
console.log(`Total path diganti: ${totalReplaced}`);
if (filesChanged.length > 0) {
  console.log(`\nDaftar file:`);
  filesChanged.forEach(f => console.log(`  - ${f}`));
}