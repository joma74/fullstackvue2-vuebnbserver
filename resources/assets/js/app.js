import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import store from "./store";
import "./../css/style.css";

var app = new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});

