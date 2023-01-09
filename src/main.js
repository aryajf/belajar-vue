import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

// PROGRESS BAR
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
    color: "#f00",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

createApp(App).use(VueProgressBar, options).use(router).mount('#app')
