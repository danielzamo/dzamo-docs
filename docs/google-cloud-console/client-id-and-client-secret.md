---
sidebar_position: 1
---

# Client ID y Client Secret

Google cambió sus políticas de autenticación, por lo que para sus servicios de Google Cloud (Console) se necesita crear las propias credenciales _OAuth_.

## Introducción

> En esta página se crean las credenciales (Client ID y Client Secret) para configurar el acceso de `google-drive-ocamlfuse` la cual requiere de _Google Cloud Console - API & Services_.

## 1️⃣ Crear credenciales en Google Cloud

_**[1]**_ Ir a la consola de Google Cloud

👉 [Google Cloud Console](https://console.cloud.google.com) - API & Services

_**[2]**_ Si no se tiene uno, crear nuevo proyecto.

_**[3]**_ Habilitar la API de Google Drive ()

- Entrar en _"Biblioteca"_ dentro de _"API y servicios"_.
- Buscar "Google Drive API" y actívarla.

_**[4]**_ Crear credenciales _OAuth 2.0_

- Ir a _"Credenciales"_ 👉 _"Crear credenciales"_ 👉 _"ID de cliente de OAuth"_.
- Selecciona _**"Aplicación de escritorio"**_.
- Copiar _client ID_ y _Client Secret_; o descargar el _JSON_ con las _credenciales_.

## 2️⃣ Configurar google-drive-ocamlfuse con las credenciales

Una vez se tenga el archivo _JSON_ con el _Client ID_ y _Client Secret_, se configura `google-drive-ocamlfuse` ejecutando:

```bash
google-drive-ocamlfuse -id <CLIENT_ID> -secret <CLIENT_SECRET>
```

💡 _Nota:_ Si el _JSON_ tiene un campo _"installed"_, los valores estarán dentro de esa sección.

## 3️⃣ Montar Google Drive

Crear el directorio de montaje, montar y usar. Esto se realiza ejecutando:

```bash
mkdir ~/GoogleDrive
google-drive-ocamlfuse ~/GoogleDrive
```