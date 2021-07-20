import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuelidate from '@/plugins/vuelidate'
import AppLayout from '@/layouts/AppLayout'
import Axios from "axios";



import './assets/scss/main.scss'

Vue.config.productionTip = false;
Vue.component('AppLayout', AppLayout)
Vue.prototype.$http = Axios;

new Vue({
	router,
	store,
	vuelidate,
	render: (h) => h(App),
}).$mount("#app");
