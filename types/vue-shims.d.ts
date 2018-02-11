/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import { ComponentOptions } from "vue";
import { Store } from "vuex/types/index";
import { VuebnbStoreState } from "../resources/assets/js/store";

declare module "vue/types/vue" {
  interface Vue {
    $store: Store<VuebnbStoreState>;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: Store<VuebnbStoreState>;
  }
}

/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import VueRouter, { Route, RawLocation, NavigationGuard } from "vue-router/types/index";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    beforeRouteEnter?: NavigationGuard;
    beforeRouteLeave?: NavigationGuard;
    beforeRouteUpdate?: NavigationGuard;
  }
}
