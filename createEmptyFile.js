const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(process.cwd(), 'out', '.nojekyll'), '');
function addGitKeepToEmptyFolders(dir) {
  const files = fs.readdirSync(dir);

  if (files.length === 0) {
    fs.writeFileSync(path.join(dir, '.gitkeep'), '');
    return;
  }

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      addGitKeepToEmptyFolders(filePath);
    }
  });
}

addGitKeepToEmptyFolders(path.join(process.cwd(), 'out'));

console.log('Created .nojekyll file and added .gitkeep to empty folders');
