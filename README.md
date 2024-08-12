# laravel vite-vue template

使用laravel、vite-vue為基底、並加上常用套件的template

## 環境需求

-   [PHP](http://php.net/) 8.2+
-   [Laravel 11 requirements](https://laravel.com/docs/11.x/deployment#server-requirements)
-   [Composer](https://getcomposer.org/) 2+
-   [Node.js](https://nodejs.org/en/download/) 22.6+
-   [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) 1.22+

## 本機開發建置程序

1. 在 `/etc/hosts` (Windows 在 `C:\WINDOWS\system32\drivers\etc\hosts`) 裡加入下方設定：
    ```
    127.0.0.1       www.laravel-vite-vue.test
    ```
2. 啟動 docker

    ```
    docker-compose up -d
    ```

3. 安裝 Node 和 PHP 相依套件
    ```
    make install
    ```
4. 產生應用程式金鑰（僅在 local 使用）
    ```
    make key
    ```
5. 啟動服務

    ```
    make dev //測試環境

    make serve //build
    ```

6. 觀看結果
    ```
    http://www.laravel-vite-vue.test/
    ```

## 前端相依套件

1. [vue-router](https://router.vuejs.org/zh/)
2. [vue-i18n](https://kazupon.github.io/vue-i18n/)
3. [pinia](https://pinia.vuejs.org/)
4. [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
5. [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
6. [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md)
7. [vueuse](https://vueuse.org/)
8. [bootstrap](https://getbootstrap.com/)

## 後端相依套件

1.[Laravel/Telescope](https://laravel.com/docs/11.x/telescope) 2.[laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper)

## Coding Style Check

# 前端

1. [prettier](https://prettier.io/)
2. [eslint](https://eslint.org/)

# 後端

1. [laravel/pint](https://laravel.com/docs/11.x/pint)
