---
title: Funciones en Shell
sidebar_label: Funciones en Shell
---

# Funciones en Shell Scripting

Las funciones en Shell Scripting permiten reutilizar código y mejorar la organización de los scripts.  
En esta sección aprenderás:

- Qué es una función en Bash.
- Cómo definir y llamar funciones.
- Pasar parámetros a funciones.
- Uso de `return` y `echo` para devolver valores.

## 1. Definiendo una función

En Bash, una función se define de la siguiente manera:

```bash
mi_funcion() {
    echo "Hola, esta es una función en Bash"
}
```

También se puede definir del modo:

 ```bash
 function mi_funcion {
    echo "Hola, esta es otra forma de definir funciones en Bash"
}
```

## 2. Llamando a una función

Para ejecutar una función, simplemente escribe su nombre:

```bash
mi_funcion
```

## 3. Pasando parámetros a una función

Las funciones pueden recibir argumentos:

```bash
saludar() {
    echo "Hola, $1! Bienvenido a Shell Scripting."
}

saludar "Usuario"
```

## 4. Retornando valores

Una función puede devolver un estado usando `return`:

```bash
comprobar() {
    if [[ -f "$1" ]]; then
        return 0  # 0 indica éxito
    else
        return 1  # 1 indica error
    fi
}


comprobar "/etc/passwd"
echo "Código de retorno: $?"
```
