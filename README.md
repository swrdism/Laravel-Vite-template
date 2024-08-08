# laravel vite-vue template

使用laravel、vite-vue為基底、並加上常用套件的template

## 環境需求

-   [PHP](http://php.net/) 8.2+
-   [Laravel 11 requirements](https://laravel.com/docs/11.x/deployment#server-requirements)
-   [Composer](https://getcomposer.org/) 2+
-   [Node.js](https://nodejs.org/en/download/) 22.6+
-   [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) 1.22+

## 本機開發建置程序

1.  安裝 Node 和 PHP 相依套件
    ```
    yarn install
    composer install
    ```
2.  產生應用程式金鑰（僅在 local 使用）
    ```
    php artisan key:generate
    ```
3.  啟動應用
    ```
    yarn vite
    php artisan serve
    ```
4.  建置應用
    ```
    yarn build
    ```

## 前端相依套件

1. [vue-router](https://router.vuejs.org/zh/)
2. [vue-i18n](https://kazupon.github.io/vue-i18n/)
3. [pinia](https://pinia.vuejs.org/)
4. [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
5. [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
6. [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md)

## Coding Style Check

# 前端

1. [prettier](https://prettier.io/)
2. [eslint](https://eslint.org/)

# 後端

1. [laravel/pint](https://laravel.com/docs/11.x/pint)
