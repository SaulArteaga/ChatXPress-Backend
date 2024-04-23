# ChatXPress Backend

En este repositorio se encuentra ubicado el backend de la aplicación que llamamos ChatXPress. Este proyecto se compone por tres proyectos fundamentales, en el que nos ubicamos, que sería el backend, y los dos frontend que serían uno para movil y otro para Web. Este último sería una aplicación de administración de usuarios.

Los links a los otros repositorios son los siguientes:

- [Frontend Web](https://github.com/SaulArteaga/ChatXPress-FrontEnd-Web.git)
- [Frontend Movil](https://github.com/AmandaRaveloCabrera/ChatXPress-frontend.git)

Se detallará a continuación como instalar e inicializar el servidor además de la máquina de docker necesaria para el proyecto.

## Docker

Para poder iniciar el docker del proyecto se tendrá que tener instalado docker-compose. Para instalarlo refierase a [este link](https://docs.docker.com/compose/install/).

Una vez instalado se tendrá que realizar el siguiente comando estando en modo consola en la carpeta donde se situa el docker-compose:

```shell
docker compose up -d
```

Con este comando se nos creará un docker en modo detached en nuestra máquina, con lo que podremos seguir al paso siguiente.

## Instalación de librerías

Para el siguiente paso se tendrá que tener instalado node. Más información en [este link](https://nodejs.org/en/download).

Para poder ejecutar nuestra aplicación tendremos que primeramente entrar en modo consola a nuestra carpeta de proyecto.

Dentro de la carpeta de proyecto ejecutaremos el siguiente comando para poder instalar las librerías necesarias:

```shell
npm i
```

Se esperará a que el proceso termine y tendremos instalados los paquetes necesarios para poder ejecutar la aplicación sin problema.

## Iniciar la aplicación

Para iniciar la aplicación ejecutaremos el siguiente comando:

```shell
npm start
```

Con este comando se ejecutará la app y se abrirá automáticamente una ventana de firefox.

---
