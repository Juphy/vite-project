import { createApp } from "vue"
import App from "./App.vue"

import '@purge-icons/generated';
import './styles/base.css';

// WindiCSS
import 'virtual:windi.css';
import 'virtual:windi-devtools';

import { createI18n } from "vue-i18n"
import messages from "@intlify/vite-plugin-vue-i18n/messages"
const i18n = createI18n({
  locale: "en",
  messages
})

// Router
import { Router } from "@/router"

const app = createApp(App)
app.use(i18n)
app.use(Router)
app.mount("#app")
