FROM alpine:3.6

RUN apk add --update --no-cache \
	lighttpd \
	&& rm -rf /var/cache/apk/*

RUN mkdir /tmp/lighttpd-compress-cache

COPY conf/* /etc/lighttpd/

VOLUME /var/www/localhost

EXPOSE 80

ENTRYPOINT ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]