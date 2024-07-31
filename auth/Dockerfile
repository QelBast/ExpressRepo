FROM node:22.5-alpine3.20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .