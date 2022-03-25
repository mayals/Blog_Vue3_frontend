import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


// npm i bootstrap@5.0.1
// https://www.npmjs.com/package/bootstrap/v/5.0.1
// https://getbootstrap.com/docs/5.0/getting-started/webpack/#importing-compiled-css
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

 


axios.defaults.baseURL = 'http://127.0.0.1:8000'
createApp(App).use(store).use(router,axios).mount('#app')