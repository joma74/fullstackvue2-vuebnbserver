import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import ListingPage from "./components/ListingPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "home"
    },
    {
      path: "/listing/:id",
      component: ListingPage,
      name: "listing"
    }
  ]
});
