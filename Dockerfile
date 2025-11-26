# pull official base image
FROM node:14.17.0-alpine

# This also creates the directory if it doesn't exist.
# (This frequently is "/app".)
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
COPY heroku.yml ./

RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]