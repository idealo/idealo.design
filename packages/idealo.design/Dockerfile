# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

ADD packages/idealo-design/ .
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# COPY package.json ./
# ADD . ./
RUN npm install
RUN npm run build

# EXPOSE	8080

# start app
CMD ["npm", "/usr/src/app", "run", "start:prod"]



#FROM node:13.7 as builder
#
#WORKDIR	/home/node/app
#ADD . /home/node/app
#
# install app dependencies
#COPY package.json ./
#COPY package-lock.json ./
#
#RUN npm install --registry https://repo.eu.idealo.com/artifactory/api/npm/npm-repo/
#
#FROM node:13.7-alpine as runner
#WORKDIR /home/node/app
#COPY --from=builder /home/node/app .

#RUN addgroup -g 8877 -S corona
#RUN adduser -S -G corona -u 8877 -s /bin/bash -h /home/node/app corona
#
#USER 8877

#EXPOSE 8080
#EXPOSE 8081

#CMD ["node", "."]