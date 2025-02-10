#!/bin/bash

DOCS_DIR="../docs"
TEMPLATE_FILE="./index_template.md"
OUTPUT_FILE="$DOCS_DIR/index1.md"

# Inicia el contenido con la plantilla
cp "$TEMPLATE_FILE" "$OUTPUT_FILE"

# Recorre cada directorio dentro de docs/
for category in "$DOCS_DIR"/*/; do
    [ -d "$category" ] || continue  # Solo procesa directorios
    category_name=$(basename "$category")

    # Encuentra archivos .md y .mdx
    files=("$category"*.md "$category"*.mdx)
    if [ ${#files[@]} -gt 0 ]; then
        echo -e "\n### $category_name\n" >> "$OUTPUT_FILE"
        for file in "${files[@]}"; do
            [[ -f "$file" ]] || continue

            # Extrae el título del Front Matter o usa el nombre de archivo
            title=$(awk -F: '/^title:/ {print $2; exit}' "$file" | sed 's/^ *//;s/ *$//')
            [ -z "$title" ] && title=$(basename "$file" .md)

            # Agrega al índice
            echo "- [$title]($category_name/$(basename "$file"))" >> "$OUTPUT_FILE"
        done
    fi
done

echo "✅ Índice generado en $OUTPUT_FILE"

