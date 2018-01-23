import Vue from "vue";
import ListingPage from "./components/ListingPage.vue";

/**
 * @type {Vue}
 */
var app = new Vue({
  el: "#app",
  render: h => h(ListingPage)
});
