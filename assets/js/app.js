// import app dependencies
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

// import routes and data store
import _router from "./router/router.js";
import _store from "./store/store.js";

// import components
import Button from "./components/button.js";
import Icon from "./components/icon.js";
import Img from "./components/img.js";
import Input from "./components/input.js";
import appHeader from "./components/header.js";

// register global components
Vue.component("app-button", Button);
Vue.component("app-icon", Icon);
Vue.component("app-img", Img);
Vue.component("app-input", Input);

// tell Vue to use VueRouter and Vuex
Vue.use(VueRouter);
Vue.use(Vuex);

// init router and store
const router = new VueRouter(_router);
const store = new Vuex.Store(_store);

// init app
new Vue({
  // register local components
  components: {
    appHeader
  },

  // this injects the router and store into all components
  router,
  store,

  // app data
  data() {
    return {
      title: "Vue Brown Bag",
      copyright: "© 2019 Ben Rutland"
    };
  },

  // app template
  template: `
<div id="app">
  <app-header :title="title" />
  <router-view />
  <p><small>{{ title }} {{ copyright }}</small></p>
</div>
`
  // finally mount the app to a DOM element
}).$mount("#app");
