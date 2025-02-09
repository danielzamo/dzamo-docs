---
sidebar_position: 1
tags:
  - Ansible
  - Linux
  - Provisión VM
  - IaC
draft: true
---

# Debian - Ansible - instalación

## Objetivo

En esta entrada se instala el orquestador ansible en un Linux basado en Debian 12 (o superior/equivalente o derivado, por ejemplo Ubuntu, Linux Mint, etc).

## Tecnologías principales utilizadas

Las siguientes son las tecnologías principales utilizadas y/o supuestos cumplidos de poseer para realizar la tarea aquí documentada. Estas son: 

- Sistema operativo: Debian 12
- Entorno de trabajo: CLI de Linux
- Gestor de paquetes: `nala` y/o `apt`
- Interprete Python: versión `3.12.3`
- Gestor de paquetes Python: `pip` versión `24.0`

## Instalación

```bash
# Actualización del sistema (utilizando nala, apt también puede ser usado igual)
sudo nala update
sudo nala upgrade -y

# Instalando Ansible
sudo apt install -y software-properties-common
## Agregar repositorio de Ansible
sudo add-apt-repository --yes --update ppa:ansible/ansible
## Instalar Ansible
sudo apt install -y ansible
```
