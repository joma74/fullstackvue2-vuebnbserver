/// <reference path="../../../types/vuebnb.d.ts"/>
/// <reference path="../../../types/window.d.ts"/>
import Vue from "vue";
import VueRouter, { Route } from "vue-router";
// @ts-ignore
import HomePage from "./components/HomePage.vue";
// @ts-ignore
import ListingPage from "./components/ListingPage.vue";
import SavedPage from "./components/SavedPage.vue";
import LoginPage from "./components/LoginPage.vue";
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
    },
    {
      path: "/saved",
      component: SavedPage,
      name: rn.name_saved
    },
    {
      path: "/login",
      component: LoginPage,
      name: rn.name_login
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

/**
 * @param {number} id of listing
 * @param {VuebnbStore} theStore
 */
function hasListingInStore(id, theStore) {
  let theStoreGetters = theStore.getters;
  return theStoreGetters.getListing(id) ? true : false;
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
 * @param {VuebnbStore} theStore
 */
function hasSummariesInStore(theStore) {
  let theStoreState = theStore.state;
  return (
    theStoreState.listing_summaries &&
    theStoreState.listing_summaries.length > 0
  );
}

/**
 *
 * @param {Route} to
 * @param {vuebnb.ServerDataModel} serverData
 */
function isOnRouteSameAsServerDataPath(to, serverData) {
  return !serverData.path || to.path == serverData.path;
}

router.beforeEach((to, from, next) => {
  let serverData = /** @type {vuebnb.ServerDataModel} */ (JSON.parse(
    window.vuebnb_listing_model
  ));
  let theStore = /** @type {VuebnbStore} */ (store);

  if (
    isOnRoute(to, rn.name_listing) &&
    hasListingInStore(parseInt(to.params.id), theStore) ||
    isOnRoute(to, rn.name_login)
  ) {
    next();
  } else if (isOnRoute(to, rn.name_home) && hasSummariesInStore(theStore)) {
    next();
  } else if (isOnRoute(to, rn.name_saved) && hasSummariesInStore(theStore)) {
    next();
  } else if (!isOnRouteSameAsServerDataPath(to, serverData)) {
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
    serverData.saved.forEach(id => theStore.commit(/** @type {store.ToggleSavePayloadObject} */ ({
      type: sfn.m_toggleSaved,
      id: id
    })));
    next();
  }
});

export default router;
