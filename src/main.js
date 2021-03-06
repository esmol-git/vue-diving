import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify'
import vuelidate from '@/plugins/vuelidate'
import AppLayout from '@/layouts/AppLayout'
import Axios from "axios";

import "./assets/scss/main.scss";
import "./assets/scss/fonts.scss";

Vue.config.productionTip = false;
Vue.component('AppLayout', AppLayout)
Vue.prototype.$http = Axios;


new Vue({
  router,
  store,
	vuetify,
	vuelidate,
  render: (h) => h(App),
}).$mount("#app");
