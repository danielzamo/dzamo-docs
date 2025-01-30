# Instación y configuración inicial de Vim en Linux

> En esta entrada se instala el editor Vim en un CLI Linux. Se intentara separar por la distribución que se trate la instalación misma.
>
> Tambíen se mostrara un fichero mínimo/básico y/o inicial de pre configuración de `vi` para personalizarlo sobre el usuario que lo utiliza en la sesión.

![Editor vim con iniacion en .vimrc y entre otras conf., coloscheme aplicado][vim-colorscheme]

## Supuestos cumplidos iniciales

- La instalación salvo que se indique lo contrario son realizadas por un usuario del sistema que puede mediante `sudo` o `su` escalar a tareas de superusuario.

## Instalando vim sobre Debian (y/o derivados Ubuntu, Kali Linux, etc)

```bash
# Actualizo la base de datos de paquetes
sudo apt update

# Instalo vim (algunos extras/opcionales)
sudo apt install vim vim-scripts exuberant-ctags
```

## Instalación de vim sobre un RHEL y/o derivado (Fedora, AlmaLinux, RockyLinux, etc) 

```bash
sudo dnf update --refresh
sudo dnf install vim-enhanced
# y/o dependiendo de la versión de RHEL (Fedora, CentOS, etc) los comandos anteriores son
sudo yum update
sudo yum install vim-enhanced
```

## Configuración/personalización del entorno de vim para un usuario

```bash
# Inicializo fichero de entorno (muy mínimo, y aplicando un tema de los básicos para el editor)
## sobre fichero de inicialización del tipo ...rc (de vim)
cat <<EOF> ~/.vimrc
" Resaltar la línea actual
set cursorline

" Mostrar numeración relativa
set number
set relativenumber

" Aplicar un esquema de colores oscuro
set background=dark
colorscheme evening

" Otras opciones útiles
syntax on           " Habilita la sintaxis resaltada
set tabstop=4       " Define el tamaño de tabulación en 4 espacios
set shiftwidth=4    " Controla el indentado
set expandtab       " Usa espacios en lugar de tabulaciones
set autoindent      " Mantiene el indentado automático
EOF
```

Si todo esta correcto, ahora cuando se editan ficheros con el editor vim el editor debería verse a como se muestra en [edición fichero con vim][vim-colorscheme] (se puede colocar en el ~/.bashrc un alias definido como "alias vi='vim'" para que al invocar )

[vim-colorscheme](images/vim-colorscheme.png)

_Nota extra:_ En por ejemplo el fichero `~/.bashrc` el usuario puede definir un alias, algo como `alias vi='vim'` de modo tal que al ingresar `vi` en verdad estará utilizando `vim`.

## Notas extras

### .vimrc alternativo con un tema básico "no dark"

```bash
cat .vimrc    # Muestro .vimrc (este debe ir en el ~ del usuario, para hacerlo sobre el sistema revisar documentación)
" Resaltar la línea actual
set cursorline

" Mostrar numeración relativa
set number
set relativenumber

" Aplicar un esquema de colores simple
colorscheme desert

" Otras opciones útiles
syntax on          " Habilita la sintaxis resaltada
set background=dark " Configura el fondo oscuro
set tabstop=4       " Define el tamaño de tabulación en 4 espacios
set shiftwidth=4    " Controla el indentado
set expandtab       " Usa espacios en lugar de tabulaciones
set autoindent      " Mantiene el indentado automático
```

### Alternativas oscuras

Si se desea se pueden probar otros temas oscuros preinstalados en `vim`. Los siguientes pueden ser probados con `vim` abierto y en modo comando. Algunos son:

```vim
:colorscheme murphy
:colorscheme torte
:colorscheme blue
:colorscheme default
```

## Referencias útiles

- [Documentación principal/oficial de Vim](https://www.vim.org/docs.php)

