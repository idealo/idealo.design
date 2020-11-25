FROM node:13.7 as builder

WORKDIR	/home/node/app
ADD . /home/node/app
RUN npm install --registry https://repo.eu.idealo.com/artifactory/api/npm/npm-repo/

FROM node:13.7-alpine as runner
WORKDIR /home/node/app
COPY --from=builder /home/node/app .

RUN addgroup -g 8877 -S corona
RUN adduser -S -G corona -u 8877 -s /bin/bash -h /home/node/app corona

USER 8877

EXPOSE	8080
EXPOSE 8081

CMD ["node", "."]

