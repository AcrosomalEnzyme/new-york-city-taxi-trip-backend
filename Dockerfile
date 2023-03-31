FROM node:18

RUN npm install -g pnpm

RUN mkdir -p /app
WORKDIR /app

COPY  package.json  .

RUN pnpm install

COPY  . .
RUN pnpm build
EXPOSE 3001

CMD [ "pnpm", "start" ]