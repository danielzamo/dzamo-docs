---
sidebar_position: 1
title: NFS
authors: [dzamo]
tags: [tutorial,artículos,TCP/IP,NFS,protocolos]
---

Comandos y/o notas relacionadas a NFS en sistemas basados principalmente en Linux/Unix

<!-- truncate -->

_Supuestos cumplidos:_ Salvo que no se indique explicitamente, los comandos, sesiones y/o tareas documentadas aquí son realizadas sobre sistemas basados en Linux con kernel superior a la versión 3, y basados en _**systemd**_.

## Comandos útiles para troubleshooting de NFS

### Comandos en el Servidor NFS

Los comandos de este item pueden ayudar a diagnosticar problemas en el servidor donde está configurado el _servicio NFS_.

#### Verificar el estado del servicio NFS

```bash
systemctl status nfs-server
```

Si el servicio no está activo, intenta iniciarlo:

```bash
sudo systemctl start nfs-server
```

#### Verificar las exportaciones configuradas

```bash
exportfs -v
```

Esto muestra los directorios exportados y sus opciones.

#### Forzar la reexportación de los recursos compartidos

```bash
exportfs -ra
```
Recarga las configuraciones de exportación sin necesidad de reiniciar el servicio.

#### Revisar el archivo de configuración de exportaciones

```bash
cat /etc/exports
```

Verifica que las rutas y permisos sean correctos.

#### Verificar qué clientes están conectados

```bash
showmount -a
```

Muestra qué clientes han montado un sistema de archivos NFS desde este servidor.

#### Verificar qué está exportando el servidor

```bash
showmount -e
```

Muestra las exportaciones activas del servidor.

#### Comprobar la actividad del servicio NFS en tiempo real

```bash
journalctl -fu nfs-server
```

Te permite ver logs en vivo del servidor NFS.

#### Verificar si el puerto NFS está en escucha

```bash
ss -tulpn | grep nfs
```

Si el puerto NFS no aparece en la lista, es posible que el servicio no esté corriendo correctamente.

#### Verificar el estado del servicio RPC

```bash
rpcinfo -p
```

Debe mostrar los servicios NFS y sus puertos.

### Comandos en el Cliente NFS

Estos comandos ayudan a diagnosticar problemas en el cliente que intenta montar un recurso NFS.

#### Probar si el servidor NFS está disponible

```bash
showmount -e <IP_DEL_SERVIDOR>
```

Si no muestra las exportaciones, hay un problema de conexión o configuración.

#### Montar manualmente un recurso NFS

```bash
sudo mount -t nfs <IP_DEL_SERVIDOR>:/ruta/exportada /punto/de/montaje
```

Si esto falla, revisa los logs y permisos.

#### Verificar si el recurso NFS ya está montado

```bash
mount | grep nfs
```

También puedes usar:

```bash
sudo df -hT | grep nfs
```

#### Verificar conectividad con el servidor

```bash
ping -c 4 <IP_DEL_SERVIDOR>
```

Si no responde, el problema puede estar en la red.

#### Verificar puertos abiertos en el servidor

```bash
nc -zv <IP_DEL_SERVIDOR> 2049
```

El puerto 2049 es el usado por NFS. Si no responde, el firewall o SELinux pueden estar bloqueándolo.

#### Depurar el montaje de NFS

```bash
sudo mount -vvv -t nfs <IP_DEL_SERVIDOR>:/ruta/exportada /punto/de/montaje
```

El flag -vvv da más detalles sobre lo que ocurre.

#### Verificar archivos de log del cliente

```bash
journalctl -xe | grep nfs
```

O en sistemas basados en Debian:

```bash
tail -f /var/log/syslog | grep nfs
```

#### Listar los procesos NFS en ejecución

```bash
ps aux | grep nfs
```

Si no hay procesos en ejecución, NFS podría no estar funcionando correctamente.

#### Forzar la actualización de la caché de montaje

```bash
sudo mount -o remount /punto/de/montaje
```

Esto refresca las opciones de montaje sin desmontar.

#### Forzar la desmontada de un recurso NFS bloqueado

Si un recurso no responde, usa:

```bash
sudo umount -f /punto/de/montaje
```

Si aún no puedes desmontarlo:

```bash
sudo umount -l /punto/de/montaje
```

(`-l` hace un "_lazy unmount_", desconectando el recurso sin afectar procesos abiertos).