import "./scss/app.scss";
import router from "./router/router";
import "virtual:svg-icons-register";

createApp()
    .use(router)
    .use(createPinia())
    .mount("#app");
