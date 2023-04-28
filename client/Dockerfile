FROM node:20-alpine

RUN apk update && \
    apk add --no-cache util-linux \
    vim \
    make \
    curl \
    git

RUN mkdir /app
WORKDIR /app

COPY package.json package.json

COPY . /app

RUN yarn

ARG CLIENT_ENV
ARG CLIENT_VERSION
ARG ACTION_CABLE_URL

RUN yarn build

EXPOSE 3000

VOLUME ["/app/dist"]

CMD yarn build
