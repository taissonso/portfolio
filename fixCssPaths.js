const fs = require('fs');
const path = require('path');

// Diretório de saída
const outDir = path.join(process.cwd(), 'out');

// Função para encontrar arquivos CSS recursivamente
function findCssFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            results = results.concat(findCssFiles(filePath));
        } else if (path.extname(file) === '.css') {
            results.push(filePath);
        }
    }

    return results;
}

// Processa os arquivos CSS
console.log('Buscando arquivos CSS para corrigir...');
const cssFiles = findCssFiles(outDir);
console.log(`Encontrados ${cssFiles.length} arquivos CSS`);

let fixCount = 0;
for (const file of cssFiles) {
    try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;

        // Corrige caminhos de fonte
        content = content.replace(/url\(\/fonts\//g, 'url(/portfolio/fonts/');
        content = content.replace(/url\("\/fonts\//g, 'url("/portfolio/fonts/');

        // Salva apenas se houve mudanças
        if (content !== originalContent) {
            fs.writeFileSync(file, content);
            fixCount++;
            console.log(`✓ Corrigido: ${file}`);
        }
    } catch (err) {
        console.error(`Erro ao processar ${file}:`, err);
    }
}

console.log(`Processo concluído! ${fixCount} arquivos foram atualizados.`);