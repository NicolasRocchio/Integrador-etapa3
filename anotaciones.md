# Proyecto Integrador -> Etapa 3 (React)

## Creamos la aplicación React

```sh
npm create vite@latest ./ -- --template react
```

## Instalamos las dependencias

```sh
npm i # npm install
```

## Instalamos React Router

```sh
npm react-router react-router-dom
```

## Arracamos el servidor

```sh
npm run dev
```

## Instalando JSON-SERVER

```sh
npm i json-server@0.17.4 -D
```

## Crear la carpeta data/db.json

```sh
mkdir data
touch data/db.json
```

## Pegamos el json en el archivo db.json

https://gist.github.com/mlapeducacionit/85b332b33f74e30deb946062f3d3362c

```json

```

## Colocamos el script

> package.json

```json
"scripts": {
    "dev": "vite",
    "server": "json-server --watch data/db.json --port 8080"
}
```

## Variables de entorno en VITE

<https://vitejs.dev/guide/env-and-mode>

## Extensión Visual Studio

- mikestead.dotenv

## Para testear los Endpoint de nuestra APIs

- Insomnia <https://insomnia.rest/>
- Postman
- Thunder Client (extensiones)
- Rapid API Client (extensiones)

## Visualizar de forma bonitar los JSON

<https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc>

## Instalamos la dependencia SASS

```sh
npm i sass -D
```
