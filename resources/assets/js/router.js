/// <reference path="../../../types/vuebnb.d.ts"/>
/// <reference path="../../../types/window.d.ts"/>
//@ts-check

import Vue from "vue";
import VueRouter, { Route } from "vue-router";
// @ts-ignore
import HomePage from "./components/HomePage.vue";
// @ts-ignore
import ListingPage from "./components/ListingPage.vue";
import rn from "./router-names";
import axios, { AxiosResponse } from "axios";
import store, {
  VuebnbStoreGetters,
  VuebnbStoreState,
  VuebnbStore
} from "./store";
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

/**
 * @param {number} id of listing
 * @param {VuebnbStoreGetters} storeGetters
 */
function hasListingInStore(id, storeGetters) {
  return storeGetters.getListing(id) ? true : false;
}

/**
 *
 * @param {Route} to
 * @param {string} expectedName
 */
function isOnRoute(to, expectedName) {
  return expectedName === to.name;
}

/**
 *
 * @param {VuebnbStoreState} storeState
 */
function hasSummariesInStore(storeState) {
  return (
    storeState.listing_summaries && storeState.listing_summaries.length > 0
  );
}

/**
 *
 * @param {Route} to
 * @param {vuebnb.ServerDataModel} serverData
 */
function isOnRouteSameAsServerDataPath(to, serverData) {
  return !serverData.path || to.path != serverData.path;
}

router.beforeEach((to, from, next) => {
  let serverData = /** @type {vuebnb.ServerDataModel} */ (JSON.parse(
    window.vuebnb_listing_model
  ));
  let theStore = /** @type {VuebnbStore} */ (store);

  if (
    isOnRoute(to, rn.name_listing) &&
    hasListingInStore(parseInt(to.params.id), theStore.getters)
  ) {
    next();
  } else if (
    isOnRoute(to, rn.name_home) &&
    hasSummariesInStore(theStore.state)
  ) {
    next();
  } else if (isOnRouteSameAsServerDataPath(to, serverData)) {
    axios.get(`/api${to.path}`).then(response => {
      const { data } = response;
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
    theStore.commit(
      /** @type {store.AddDataPayloadObject} */ ({
        type: sfn.m_addData,
        routeName: to.name,
        data: serverData
      })
    );
    next();
  }
});

export default router;
