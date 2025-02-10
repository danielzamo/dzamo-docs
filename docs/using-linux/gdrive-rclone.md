---
title: "Google Drive + Rclone"
---

# Google Drive + rclone (montaje FUSE/Bidireccional)

## Objetivo

En este artículo se monta una unidad de Google Drive en el filesystem del sistema Linux, mediante el uso de rclone.

## Instalación de rclone y configuración de la conexión

```bash
sudo apt update
sudo apt install rclone
rclone config
```

En las siguientes imágenes se muestran (comentadas) algunas de las pantallas capturadas de la configuración para el acceso a Google Drive.

![Rclone config GDrive - 1 ](./images/rclone-config-google-drive.png)

![Rclone config GDrive - 2 ](./images/rclone-config-google-drive.2.png)

![Rclone config GDrive - 3 ](./images/rclone-config-google-drive.3.png)

## Montando Google Drive en local

```bash
mkdir -pv GDrive
clone mount GDrive: ~/GDrive --vfs-cache-mode full --daemon
```
