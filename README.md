# MeliApp

Technical challenge for selection process

<img width="1685" alt="image" src="https://user-images.githubusercontent.com/93418612/235746411-f743254b-1748-4ac1-9447-af6602028025.png">

How to run this app?

## Run Locally

Clone the project

```bash
  git clone git@github.com:cquezada-m/meliapp.git
```

Go to the project directory

```bash
  cd meliapp
```

To run this project, you will need to add the following environment variables to your .env file

```bash
  DB_HOST=db
  POSTGRES_DB=meli_app
  POSTGRES_USER=meli_user
  POSTGRES_PASSWORD=AMeliappRedelcom2023
  API_HOST=localhost
  API_PORT=8080
  API_DOMAIN=http://${API_HOST}:${API_PORT}
  ACTION_CABLE_URL=ws://${API_HOST}/websocket
  INDICATORS_BASE_URL=https://mindicador.cl/api/
  REACT_APP_API_ENDPOINT=${API_DOMAIN}/api/v1/meli_chat
```

build dependencies

```bash
  make app-build
```

setup database

```bash
  make app-db-setup
```

add dummy data

```bash
  make app-dummy-data
```

Start app

```bash
  make app-start
```
