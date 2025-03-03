FROM php:8.3.18RC1-fpm-alpine3.21

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R www-data:www-data /var/www/html
