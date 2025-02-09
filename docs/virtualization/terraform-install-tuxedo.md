---
sidebar_position: 1
tags:
  - Linux
  - Provisión VM
  - IaC
  - Terraform
  - Tuxedo
draft: true
---

# Debian - Terraform - instalación

## Objetivo

En esta entrada se instala terraform, en un Linux basado en Debian 12 (o superior/equivalente o derivado, por ejemplo Ubuntu, Linux Mint, Tuxedo, etc).

## Tecnologías principales utilizadas

Las siguientes son las tecnologías principales utilizadas y/o supuestos cumplidos de poseer para realizar la tarea aquí documentada. Estas son: 

- Sistema operativo: Debian 12
- Entorno de trabajo: CLI de Linux
- Gestor de paquetes: `nala` y/o `apt`
- Interprete Python: versión `3.12.3`
- Gestor de paquetes Python: `pip` versión `24.0`
- Versión de go: go1.23.5

## Instalación de Terraform

```bash
# Instalación de Terraform
sudo apt-get update
sudo apt-get install -y curl gnupg software-properties-common
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install -y terraform
# Verificar la instalación de Terraform
terraform version
```

