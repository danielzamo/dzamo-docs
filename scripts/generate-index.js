const fs = require("fs");
const path = require("path");
const frontMatter = require("gray-matter");

const DOCS_DIR = path.join(__dirname, "../docs"); // Directorio docs
const TEMPLATE_FILE = path.join(__dirname, "index_template.md"); // Plantilla
const OUTPUT_FILE = path.join(DOCS_DIR, "index1.md"); // Archivo final

// Función para obtener el título desde el front matter
function getTitleFromFrontMatter(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const parsed = frontMatter(content);
  return parsed.data.title || path.basename(filePath, path.extname(filePath)); // Usa filename si no hay title
}

// Función para recorrer docs y generar el índice
function generateIndex() {
  let indexContent = fs.readFileSync(TEMPLATE_FILE, "utf-8") + "\n\n";

  const categories = fs.readdirSync(DOCS_DIR).filter((dir) =>
    fs.statSync(path.join(DOCS_DIR, dir)).isDirectory()
  );

  categories.forEach((category) => {
    const categoryPath = path.join(DOCS_DIR, category);
    const markdownFiles = fs.readdirSync(categoryPath).filter((file) =>
      file.endsWith(".md") || file.endsWith(".mdx")
    );

    if (markdownFiles.length > 0) {
      indexContent += `### ${category}\n\n`; // Nombre del subdirectorio como sección
      markdownFiles.forEach((file) => {
        const filePath = path.join(categoryPath, file);
        const title = getTitleFromFrontMatter(filePath);
        indexContent += `- [${title}](${category}/${file})\n`;
      });
      indexContent += "\n";
    }
  });

  fs.writeFileSync(OUTPUT_FILE, indexContent, "utf-8");
  console.log("✅ Índice generado correctamente en:", OUTPUT_FILE);
}

generateIndex();

