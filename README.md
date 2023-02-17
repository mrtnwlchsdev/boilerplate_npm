# Desarrollo Back-end y API's

## package.json

El archivo package.json es el elemento principal de cualquier proyecto Node.js o libreria npm.
Almacena informacion en pares clave-valor mediante un objeto JSON.

    {
        "name": "boilerplate-npm",
        "version": "1.0.3",
        "description": "First npm project",
        "keywords": ["JavaScript", "npm", "api"],
        "license": "MIT"
    }

Existen 2 campos obligatorios en el package.json (name y version), aunque es una buena practica proveer informacion adicional adicional para futuros usuarios.

- name: Nombre del proyecto o paquete.
- version: Version actual.
- description: Informacion sobre la utilidad de un paquete o un resumen del proyecto.
- keywords: Descripcion detallada del proyecto o paquete haciendo uso de palabras claves organizadas mediante un arreglo.
- licence: Informa al usuario de lo que puede realizar con el proyecto o paquete.

### Dependencias

Una de las principales caracteristicas del archivo package.json es el manejo automatico de las dependencias.
npm se encarga de instalar todas las dependencias contenidas en el archivo package.json, cuando un proyecto es configurado desde un nuevo sistema.

    {
        "dependencies": {
            "package-name": "1.3.0",
            "express": "4.14.0"
        }
    }

El campo dependencias contiene un objeto, cuyas propiedades hacen referencia al nombre de la dependencia y el valor a la version de dicha dependencia.

### Versionado semantico

Librerias, frameworks y otras herramientas publicadas en npm contienen un versionado semantico que permite comunicar de forma clara que tipo de cambios pueden esperarse en un proyecto cuando este es actualizado.

    {
        "package": "MAJOR.MINOR.PATCH"
    }

- MAJOR: Valor a incrementar cuando se realicen cambios de API incompatibles con versiones anteriores.
- MINOR: Valor a incrementar cuando se añaden cambios al proyecto compatibles con versiones anteriores.
- PATCH: Valor a incrementear cuando se corrigen errores del proyecto, compatibles con versiones anteriores.

El caracter ~ es utilizado para actualizar automaticamente el valor del PATCH cuando una nueva version de este ha sido lanzada.
Este caracter se ubica al inicio de la deficion de la version de la dependencia.

    {
        "package": "~1.3.10"
    }

El caracter ^ es utilizado para actualizar automaticamente el valor ya sea del PATCH o del MINOR, cuando una nueva version de estos sea lanzada.
Este caracter se ubica al inicio de la definicion de la version de la dependencia.

    {
       "package": "^1.13.32"
    }

### Remover dependencias

Una dependencia es eliminada del proyecto cuando esta es removida del archivo package.json

    {
        "dependencies": {
             ̶"̶p̶a̶c̶k̶a̶g̶e̶_̶n̶a̶m̶e̶"̶:̶ ̶"̶1̶.̶3̶.̶1̶0̶"̶
        }
    }

## Node.js y express

Node.js es un entorno de ejecucion que permite ejecutar codigo de JavaScript fuera del navegador web.

### Servidor express

Express es un paquete de npm ampliamente utilizado para la creacion de servidores y para el manejo del enrutamiento en una aplicacion.

    const express = require('express')
    const app = express()

Las anteriores lineas permiten requerir el paquete express y asignarlo a una variable de JavaScript.