FROM node:6.11.2-slim

EXPOSE 80

WORKDIR /usr/src/app

COPY . .
RUN npm install

HEALTHCHECK CMD curl --fail http://localhost/me || exit 1

CMD [ "npm", "start" ]