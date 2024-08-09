FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/
COPY nginx/conf.d/*.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir /etc/nginx/global
COPY nginx/global/*.conf /etc/nginx/global/

# handle self-signed SSL certificate
# COPY certs/rootCA.pem /usr/local/share/ca-certificates/rootCA.crt
# ARG ENABLE_SSL=false
# ENV ENABLE_SSL ${ENABLE_SSL}

# RUN if [ ${ENABLE_SSL} = true ]; then \
#     update-ca-certificates; \
#     cp /etc/nginx/global/ssl-*.conf /etc/nginx/global/ssl.conf \
# ;fi

RUN apk update \
    && apk upgrade \
    && apk add --no-cache openssl \
    && apk add --no-cache bash

RUN apk add --no-cache curl

RUN set -x ; \
    addgroup -g 82 -S www-data ; \
    adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

ADD nginx/startup.sh /opt/startup.sh
RUN sed -i 's/\r//g' /opt/startup.sh
CMD ["/bin/bash", "/opt/startup.sh"]

EXPOSE 80 443
