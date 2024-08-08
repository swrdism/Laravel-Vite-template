import "./scss/app.scss";
import router from "./router/router";
import "virtual:svg-icons-register";
import * as bootstrap from "bootstrap";

window.bootstrap = bootstrap;

createApp().use(router).use(createPinia()).mount("#app");
