const customRoutes = [
    {
        path: "/",
        name: "example",
        title: "example",
        component: () => import("../pages/MyExample.vue"),
    },
];

export default customRoutes;
