import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'
import Vue3Toastify from 'vue3-toastify';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import  VueAwesomePaginate from 'vue-awesome-paginate'
import "vue-awesome-paginate/dist/style.css";
library.add(fas, far, fab)
dom.watch();


const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.use(i18n)
app.use(store)
app.use(VueAwesomePaginate)
app.component("font-awesome-icon",FontAwesomeIcon )
app.use(Vue3Toastify, {
    autoClose: 3000,
  })
app.use(router).mount('#app')



