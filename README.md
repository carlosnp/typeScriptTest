# Typescript

## Para compilar archivos
```
tsc <>name file<>.ts
```
## Para inicializar
```
tsc --init
```
Se creara un archivo de configuracion de typescript

1. Ruta en donde se publicaran los archivos compilados de typescript
```
"outDir": "./public"
```
2. Ruta en donde se encuentran todos los archivos de typeScript
```
"rootDir": "./src"
```
3. Si solo se desea que se compilen los archivos de la carpeta **src**

Incluir al final de json
```
"include":["src"]
```
4. Para compilar
```
tsc
```