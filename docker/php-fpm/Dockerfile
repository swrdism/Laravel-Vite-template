ARG PHP_VERSION
FROM php:${PHP_VERSION}-fpm

ARG PHP_VERSION

# essential extensions
RUN set -eux; \
    apt-get update; \
    apt-get upgrade -y; \
    apt-get install -y --no-install-recommends \
            apt-transport-https \
            curl \
            libmemcached-dev \
            libz-dev \
            libpq-dev \
            libjpeg-dev \
            libpng-dev \
            libfreetype6-dev \
            libssl-dev \
            libwebp-dev \
            libmcrypt-dev \
            libonig-dev \
            libzip-dev
            
# pcntl for multi-process support, eg. spatie/async for coroutine
RUN docker-php-ext-configure pcntl --enable-pcntl \
    && docker-php-ext-install pcntl

# pdo
RUN docker-php-ext-install pdo_mysql; \
    docker-php-ext-install pdo_pgsql; \
    docker-php-ext-configure gd \
            --prefix=/usr \
            --with-jpeg \
            --with-webp \
            --with-freetype; \
    docker-php-ext-install gd; \
    php -r 'var_dump(gd_info());'

# zip
RUN pecl channel-update pecl.php.net && \
      docker-php-ext-configure zip && \
      docker-php-ext-install zip && \
      php -m | grep -q 'zip'

# xdebug
RUN pecl install xdebug && docker-php-ext-enable xdebug
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
    
# pcov is a code coverage driver which is much faster than xdebug and already-abandoned pdbug.
RUN pecl install pcov \
    && docker-php-ext-enable pcov

# redis
RUN pecl install -o -f redis \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable redis

RUN docker-php-ext-install bcmath

# exif
RUN docker-php-ext-install exif

# opcache
RUN docker-php-ext-install opcache
COPY ./opcache.ini /usr/local/etc/php/conf.d/opcache.ini

USER root

# jpegoptim
RUN apt-get install -y jpegoptim optipng pngquant gifsicle

# ghostscript
RUN apt-get update; \
    apt-get install -y ghostscript

# cachetool
RUN curl -sO http://gordalina.github.io/cachetool/downloads/cachetool.phar && \
    chmod +x cachetool.phar && \
    mv cachetool.phar /usr/local/bin/cachetool

# copy configs
COPY ./laravel.ini /usr/local/etc/php/conf.d
COPY ./xlaravel.pool.conf /usr/local/etc/php-fpm.d/
COPY ./policy.xml /etc/ImageMagick-6/

# clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

# Configure non-root user.
ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}

RUN groupmod -o -g ${PGID} www-data && \
    usermod -o -u ${PUID} -g www-data www-data

WORKDIR /var/www

CMD ["php-fpm"]

EXPOSE 9000
