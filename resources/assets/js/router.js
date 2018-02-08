/// <reference path="../../../types/vuebnb.d.ts"/>

import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import ListingPage from "./components/ListingPage.vue";
import rn from "./router-names";
import axios, { AxiosResponse } from "axios";
import store from "./store";
import sfn from "./store-function-names";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      name: rn.name_home
    },
    {
      path: "/listing/:id",
      component: ListingPage,
      name: rn.name_listing
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  let serverData = /** @type {vuebnb.ServerDataModel} */ (JSON.parse(
    window.vuebnb_listing_model
  ));

  if (!serverData.path || to.path != serverData.path) {
    axios.get(`/api${to.path}`).then(response => {
      const { data } = response;
      let theStore = /** @type {store.VuebnbStore} */ (store);
      theStore.commit(
        /** @type {store.AddDataPayloadObject} */ ({
          type: sfn.m_addData,
          routeName: to.name,
          data: data
        })
      );
      next();
    });
  } else {
    let theStore = /** @type {store.VuebnbStore} */ (store);
    theStore.commit(
      /** @type {store.AddDataPayloadObject} */ ({
        type: sfn.m_addData,
        routeName: to.name,
        data: data
      })
    );
    next();
  }
});

export default router;
