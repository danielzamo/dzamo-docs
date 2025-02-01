---
sidebar_position: 1
title: GDrive en directorio local 
---

# Google Drive en directorio local

## Objetivo 

> En este artículo se conecta un directorio local de mi sistema Debian (o Ubuntu) con la unidad personal/propia de Google Drive. La solución propuesta es gratuita, eficiente y de forma bidireccional, sin consumir demasiados recursos (y se ha evitado utilizar VMs o contenedores).

## Opciones disponibles

Opciones que pueden considerar, y que son de uso gratuitos y/o libres son:

- `google-drive-ocamlfuse` (Sincronización Permanente)
- `rclone` con Montaje en `FUSE` (Bidireccional)
- `kio-gdrive`  (Integración nativa en KDE)
- `gvfs-google` (Gnome)
- `gnome-online-accounts` (Usuarios en línea en GNOME)

A continuación se colocan algunas notas respecto a las tecnologías y/o soluciones comentadas en este artículo. Todas estas referencias han sido generadas por IA, principalmente con el plan gratuito de [ChatGPT][chatgpt-url].

[chatgpt-url]:https://chatgpt.com

## Supuestos cumplidos/especificaciones iniciales

> Los comandos o sesiones de trabajo indicadas a continuación son solo especificadas para ser realizadas en un sistema Linux basado en distribución Debian 12 o superior; y/o derivado equivalente (Ejemplo: Ubuntu 24.04 LTS, etc).

## google-drive-ocamlfuse (Sincronización Permanente)
 
Esta opción permite sincronizar en disco de forma persistente y bidireccional. En este apartado se indica como se instala en un sistema basado en Linux _Debian 12_ (o derivado equivalente, ejemplo: _Ubuntu 24.04 LTS_).

- _Repositorio URL del desarrollador:_ [google-drive-ocamlfuse - Alessandro Strada](https://launchpad.net/~alessandro-strada/+archive/ubuntu/ppa)


### Instalación (desde repositorio)

```bash
sudo add-apt-repository ppa:alessandro-strada/ppa
sudo apt update
sudo apt install google-drive-ocamlfuse
```

### Autorizar cuenta de Google

```bash
google-drive-ocamlfuse -id <CLIENT_ID> -secret <CLIENT_SECRET>
```

### Montar Google Drive en una carpeta local

```bash
mkdir -p ~/GoogleDrive
google-drive-ocamlfuse ~/GoogleDrive
```

### Montar automáticamente al inicio

En `~/.profile` o en `~/.bashrc` se puede agregar:

```bash
google-drive-ocamlfuse ~/GoogleDrive
```

de este modo el montaje se realizará al iniciar sesión el propio usuario.

### Ventajas vs Desventajas

_Ventajas_

- Sincronización en disco bidireccional y persistente 
- No requiere scripts adicionales
- Más simple que rclone para quienes solo necesitan sincronización básica

_Desventajas_

- Puede ser más lento que rclone en ciertos casos
- Depende de un repositorio PPA externo (riesgo de compatibilidad futura)

## rclone con montaje en FUSE (Bidireccional)

Si se necesita sincronización en disco, se puede usar `rclone`, pero montándolo con `rclone mount`, lo que permite acceso casi nativo y bidireccional.

### Delineamientos para configuración de rclone

#### Instalación de rclone

```bash
sudo apt install rclone
```

#### Configurar la conexión con _Google Drive_:

```bash
rclone config
```

Seguir las instrucciones y crear un _remote_ (por ejemplo, llamado `gdrive`).

#### Crear punto de montaje

```bash
mkdir -p ~/GoogleDrive
```

#### Montar _Google Drive_ en _KDE Plasma_ (modo bidireccional)

```bash
rclone mount gdrive: ~/GoogleDrive --vfs-cache-mode full --daemon
```

Con lo anterior se montará _Google Drive_ como un directorio _local_ en `~/GoogleDrive`.

### Ventajas vs Desventajas

_Ventajas_ 🚀

- Bidireccional (sincronización automática en la nube)
- No ocupa espacio en disco hasta que accedes al archivo
- Más ligero que una VM o contenedor

_Desventajas_

- No es sincronización real (es un montaje)
- Si cierras sesión, debes volver a montarlo manualmente

## gvfs-google

## gnome-online-accounts

## kio-drive

Si solo se necesita acceso y edición de archivos sin sincronización directa en disco, `kio-gdrive`es una buena opción.

_Instalación del módulo_

```bash
sudo apt install kio-gdrive
```

Abrir `Dolphin` (explorado de archivos por defecto para _Desktop KDE Plasma_) y en la barra de direcciones escribir:

```bash
gdrive:/
```

Agregar la cuenta de _Google Drive_ y se accede a los archivos como si fuera una carpeta de red.

**Ventajas**

> Integración directa con Dolphin (explorador de archivos de KDE).
>
> Sincronización en la nube en tiempo real (sin ocupar espacio local).
>
> Funciona sin necesidad de software adicional.
>

**Desventajas**

> No es sincronización en disco real, sino acceso en la nube.
>
> Puede ser más lento para archivos grandes.


## Tabla comparativa/resumen

| Método| ¿Montaje real en el sistema de archivos?| Soporte CLI|
| :--| :--| :--|
| `google-drive-ocamlfuse`| Sí| Sí (CLI, scripts)|
| `rclone` + `FUSE`| Sí (monta Google Drive como un sistema de archivos)| Sí (CLI, scripts)|
| `KIO-GDrive`| No (acceso solo desde KDE)| No funciona bien en CLI|
| `GVFS-Google`| No  (acceso solo desde GNOME)| No funciona en CLI|
| `gnome-online-accounts`| No (acceso solo desde GNOME)| No funciona en CLI|
