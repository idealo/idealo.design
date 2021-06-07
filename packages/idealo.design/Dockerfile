FROM node:14.16.1 

WORKDIR /home/node/app

COPY . ./
RUN npm config set color false
RUN npm ci
RUN npm build

WORKDIR /home/node/app/dist

CMD ["node", "server.js"]


