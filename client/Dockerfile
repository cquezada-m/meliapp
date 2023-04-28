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

RUN yarn build

EXPOSE 3000

VOLUME ["/app/dist"]

CMD yarn build
