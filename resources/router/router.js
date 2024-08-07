import { createRouter, createWebHistory } from "vue-router";
import customRoutes from "./customRoutes";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

let routes = customRoutes.concat(setupLayouts(generatedRoutes));

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
