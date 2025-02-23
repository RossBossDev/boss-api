# Builder stage
FROM --platform=linux/amd64 node:22-slim AS base
WORKDIR /usr/src/app

ENV YARN_VERSION=4.6.0
ENV NODE_ENV=production
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare yarn@${YARN_VERSION}
COPY .yarn ./.yarn
COPY .yarnrc.yml ./.yarnrc.yml
COPY package*.json yarn.lock ./
COPY tsconfig*.json ./

FROM base AS dependencies
ENV NODE_ENV=development
RUN yarn install --immutable

FROM dependencies AS build
COPY . .
RUN yarn build

FROM base AS prod-dependencies
RUN yarn install --immutable

FROM node:22-slim as release
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y curl

COPY --from=prod-dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

USER node
EXPOSE 4000

CMD ["node", "dist/main.js"]
