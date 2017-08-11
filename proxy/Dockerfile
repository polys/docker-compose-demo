FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

COPY dhparam.pem /etc/ssl/certs/dhparam.pem
COPY nginx-selfsigned.key /etc/ssl/private/nginx-selfsigned.key
COPY nginx-selfsigned.crt /etc/ssl/certs/nginx-selfsigned.crt

RUN mkdir /tmp/nginx-cache

EXPOSE 80
EXPOSE 443
