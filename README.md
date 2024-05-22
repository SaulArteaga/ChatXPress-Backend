# ChatXPress Backend

In this repository is located the backend of the application that we call ChatXPress. This project is made up of three fundamental projects, the one in which we are located, which would be the backend, and the two frontends, which would be one for mobile and the other for Web. The latter would be a user administration application.

The links to the other repositories are as follows:

- [Frontend Web](https://github.com/SaulArteaga/ChatXPress-FrontEnd-Web.git)
- [Frontend Mobile](https://github.com/AmandaRaveloCabrera/ChatXPress-frontend.git)

The following will detail how to install and initialise the server as well as the docker machine required for the project.

## Docker

In order to start the project docker you will need to have docker-compose installed. To install it refer to [this link](https://docs.docker.com/compose/install/).

Once installed, the following command will have to be performed in console mode in the folder where the docker-compose is located:

```shell
docker compose up -d
```

This command will create a detached docker on your machine, so you can move on to the next step.

## Installation of libraries

For the next step you will need to have node installed. More information at [this link](https://nodejs.org/en/download).

In order to run our application, we will first have to enter our project folder in console mode.

Inside the project folder we will execute the following command in order to install the necessary libraries:

```shell
npm i
```

It will wait for the process to finish and we will have installed the necessary packages to be able to run the application without any problem.

## Start the application in development environment

To start the application, run the following command:

```shell
npm run dev
```

This command will launch the app and automatically open a firefox window.

## Start the application in production environment

To start the application, execute the following commands:

```shell
npm run build
npm start
```

This command will launch the app and automatically open a firefox window.

---
