FROM node:14.16.1 as builder

WORKDIR /home/node/app

COPY . ./
RUN npm config set color false
RUN npm ci
RUN npm build


FROM node:14.16.1-alpine as runner

WORKDIR /home/node/app

COPY --from=builder /home/node/app/dist .

CMD ["node", "server.js"]
