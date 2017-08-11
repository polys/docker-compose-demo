FROM node:6.11.2-alpine

EXPOSE 80

WORKDIR /usr/src/app

COPY package.json package-lock.json /
RUN npm install

COPY . .

CMD [ "npm", "start" ]