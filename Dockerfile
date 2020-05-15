# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# Install yarn and other dependencies via apk
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

#build app with yarn
run yarn build:dev

expose 3000

# start app
CMD ["npm", "start"]