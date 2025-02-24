# Builder stage
FROM node:22-slim AS base
WORKDIR /usr/src/app

ENV YARN_VERSION=4.6.0
ENV NODE_ENV=production
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare yarn@${YARN_VERSION}
COPY .yarn ./.yarn
COPY .yarnrc.yml ./.yarnrc.yml
COPY package*.json yarn.lock ./
COPY apps/backend/package*.json ./apps/backend/
COPY apps/frontend/package*.json ./apps/frontend/
COPY tsconfig*.json ./

FROM base AS dependencies
ENV NODE_ENV=development
RUN yarn install --immutable

FROM dependencies AS build
COPY . .
RUN yarn build

FROM base AS prod-dependencies
RUN yarn install --immutable

FROM node:22-slim AS release
WORKDIR /usr/src/app

# Install netcat-openbsd along with curl
RUN apt-get update && apt-get install -y curl netcat-openbsd

COPY --from=prod-dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/apps/backend/dist ./dist

# Add migration script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

USER node
EXPOSE 3000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["node", "dist/main.js"]
