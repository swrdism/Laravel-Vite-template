import jsdoc from "eslint-plugin-jsdoc";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    // ...pluginVue.configs["flat/recommended"],
    // eslintConfigPrettier,
    {
        files: ["./resources/**/*.js", "./resources/**/*.vue"],
        rules: {
            "jsdoc/require-description": "error",
            "jsdoc/check-values": "error",
        },
    },
];
