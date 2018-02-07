/// <reference path="./store.d.ts"/>

import Vue from "vue";
import Vuex, { Store } from "vuex";
import sfn from "./store-function-names";
import { VuebnbStoreState, ToggleSavePayload } from "./store";

Vue.use(Vuex);

let theStore = new Vuex.Store({
  /**
   * @type {VuebnbStoreState}
   */
  state: {
    saved: []
  },
  mutations: {
    /**
     * @param {ToggleSavePayload} payload
     */
    [sfn.m_toggleSaved]: function(state, payload) {
      let index = state.saved.findIndex(saved => saved === payload.id);
      if (index === -1) {
        state.saved.push(payload.id);
      } else {
        state.saved.splice(index, 1);
      }
    }
  }
});

export default theStore;
