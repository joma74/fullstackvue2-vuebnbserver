declare module "*.vue" {
    import Vue from 'vue';
    export default Vue;
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


/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import { ComponentOptions } from "vue";
import { Store } from "vuex/types/index";

declare module "vue/types/vue" {
  interface Vue {
    $store: Store<any>;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: Store<any>;
  }
}
