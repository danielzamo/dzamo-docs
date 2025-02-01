---
sidebar_position: 2
title: CLI conversión formatos de imágenes
tags:
  - CLI Linux
  - Linux
  - Procesamiento de imágenes
  - Linux
  - Desktop Linux
  - comandos
  - ImageMagick/magick
  - ImageMagick/convert
  - Python
---

# Convirtiendo formatos de imágenes desde el CLI de Linux

En esta entrada se muestran algunas formas de convertir (hasta poder mejorar o modificar) formatos de imágenes principalmente desde el CLI de Linux. Utilizar estas herramientas permiten hacer script de automátismos para el procesamiento desatendido de transformación de imágenes, por ejemplo. 

## Convertir de pdf a png con magick y/o convert

El comando `convert` es parte de la suite **ImageMagick**, y ahora ha sido reemplazado por `magick` en versiones recientes de **ImageMagick**.


- Para convertir un archivo PDF a PNG usando el nuevo comando

```bash
magick input.pdf output.png
```

Con `convert` era/es (por si es versión `ImageMagick < 7` (o sin magick) )
```bash
convert -density 300 input.pdf -quality 100 output.png
```

_Donde:_

- `density 300`: Esto aumenta la resolución de la imagen, lo cual es útil para mejorar la legibilidad del texto.
- `quality 100`: Asegura que la calidad de la imagen generada sea lo más alta posible.

_Nota:_ El comando tomará el `PDF` y lo convertirá en imágenes `PNG`. Si el `PDF` tiene múltiples páginas, creará una imagen `PNG` por página, numerando automáticamente los archivos de salida como `output-0.png`, `output-1.png`, etc.

Si se necesita especificar más detalles, como la resolución o un rango de páginas, se puede usar opciones adicionales. Ejemplo:

```bash
magicksidebar_position: 2 -density 300 input.pdf output.png
```

Lo anterior ajustará la densidad (resolución) de la conversión a 300 DPI (esto es común para obtener una buena calidad de imagen).

```bash
convert input.png -sharpen 0x1 output_sharpened.png
```

El anterior comando aplica un filtro de nítidez (`-sharpen`) que puede ayudar a realzar los detalles del texto.

### Nota extra

El paquete _ImageMagick_ debe estar instalado. En un sistema basado en Debian o derivado esto se puede hacer ejecutand:

```bash
sudo apt-get install imagemagick
```

## Mejorar la calidad con pillow en Python 

Si se necesita hacer de forma programática un procesamiento de imágen/es (mejorar la calidad en este caso), se puede usar **Python** y la **librería Pillow** para mejorar la calidad de las mismas. El siguiente ejemplo aumenta el contraste:

```Python
from PIL import Image, ImageEnhance

# Abrir la imagen
img = Image.open("input.png")

# Mejorar el contraste
enhancer = ImageEnhance.Contrast(img)
img_enhanced = enhancer.enhance(2)  # 2 es el factor de mejora, ajusta según necesidad

# Guardar la imagen mejorada
img_enhanced.save("output_enhanced.png")
```

_Nota:_ Para instalar **Pillow** se puede ejecutar:

```bash
pip install Pillow
```

