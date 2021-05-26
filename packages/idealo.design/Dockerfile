FROM node:14.16.1 as builder

WORKDIR /home/node/app

COPY packages/idealo.design/ ./
RUN npm install
RUN npm run build


FROM node:14.16.1-alpine as runner

WORKDIR /home/node/app

COPY --from=builder /home/node/app/dist .

CMD ["node", "server.js"]