import Vue from "vue";
import VueRouter from "vue-router";
import ListingPage from "./components/ListingPage.vue"

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/listing/:id",
      component: ListingPage,
      name: "listing"
    }
  ]
});
