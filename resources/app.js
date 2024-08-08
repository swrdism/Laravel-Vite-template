import axios from "axios";
import "./scss/app.scss";
import router from "./router/router";
import * as bootstrap from "bootstrap";
import "virtual:svg-icons-register";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.bootstrap = bootstrap;

createApp().use(router).use(createPinia()).mount("#app");
