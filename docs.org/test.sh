#!/bin/bash

ARG_1_DESDE_CLI=$1

function log(){
    echo ${ARG_1_DESDE_CLI}
}

log "Se llamo este script con al menos este argumento que es: ${ARG_1_DESDE_CLI}"



