const fs = require('fs');
const path = require('path');

// Cria a pasta 'out' se ela não existir
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Cria o arquivo .nojekyll
const filePath = path.join(outDir, '.nojekyll');
fs.writeFileSync(filePath, '', 'utf8');

console.log('Created .nojekyll file');
