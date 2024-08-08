import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
    ElementPlusResolver,
    AntDesignVueResolver,
    VantResolver,
    HeadlessUiResolver,
    ElementUiResolver,
} from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/app.js"],
            refresh: true,
        }),
        vue(),
        AutoImport({
            imports: ["vue", "vue-router", "vue-i18n", "pinia"],
            eslintrc: {
                enabled: true,
            },
            dts: true,
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                AntDesignVueResolver(),
                VantResolver(),
                HeadlessUiResolver(),
                ElementUiResolver(),
            ],
            dirs: ["resources/"],
            extensions: ["vue"],
            dts: true,
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "resources/assets/svg")],
            symbolId: "icon-[dir]-[name]",
        }),
        Pages({
            dirs: [{ dir: "resources/pages", baseRoute: "" }],
        }),
        Layouts(),
    ],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources"),
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
});
