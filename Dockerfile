FROM node:12-alpine AS frontend

WORKDIR /app

COPY . ./

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "start"]
