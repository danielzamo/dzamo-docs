---
title: Nodejs oficial en Debian
---

# Instalación desde el binario oficial

## Instroducción

>

_Referencia oficial del desarrollador:_ https://nodejs.org/en/download

```bash
# Descargar e instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# El instalador actualiza el ~/.bashrc
source ~/.bashrc

# Verificar nvm
nvm -v

# Descargar e instalar la versión deseada de Node.js (la 22 LTS por ejemplo)
nvm install 22

# Verificar versión de Node.js (node y/o nvm)
node -v # Should print "v22.13.1".
nvm current # Should print "v22.13.1".

# Verificar la versión de nvm
npm -v # Should print "10.9.2".
```

