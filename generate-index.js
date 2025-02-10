const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const outputFile = path.join(docsDir, 'index1.md');

function generateIndex(dir, basePath = '') {
    let output = '';
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            // Si hay un _category_.json, usa el nombre de la categoría
            const categoryFile = path.join(fullPath, '_category_.json');
            let categoryName = item;

            if (fs.existsSync(categoryFile)) {
                const categoryData = JSON.parse(fs.readFileSync(categoryFile, 'utf-8'));
                categoryName = categoryData.label || item;
            }

            output += `\n## ${categoryName}\n`;
            output += generateIndex(fullPath, relativePath); // Recursión para subdirectorios
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
            const title = item.replace(/\.mdx?$/, '');
            output += `- [${title}](${relativePath})\n`;
        }
    });

    return output;
}

// Generar índice
const indexContent = `# Índice de Documentación\n\n${generateIndex(docsDir)}`;

fs.writeFileSync(outputFile, indexContent, 'utf-8');
console.log(`Índice generado en ${outputFile}`);

