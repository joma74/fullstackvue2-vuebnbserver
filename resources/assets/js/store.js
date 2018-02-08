/// <reference path="./store.d.ts"/>

import Vue from "vue";
import Vuex, { Store } from "vuex";
import sfn from "./store-function-names";
import rn from "./router-names";
import {
  VuebnbStoreState,
  ToggleSavePayload,
  AddDataPayloadObject
} from "./store";

Vue.use(Vuex);

let theStore = new Vuex.Store({
  /**
   * @type {VuebnbStoreState}
   */
  state: {
    saved: [],
    listing_summaries: [],
    listings: []
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
    },
    /**
     * @param {AddDataPayloadObject} payload
     */
    [sfn.m_addData]: function(state, payload) {
      const { data, routeName } = payload;
      if (routeName === rn.name_home) {
          state.listings.push(data.listing);
      } else if (routeName === rn.name_listing) {
        state.listing_summaries = data.listings;
      } else {
        console.warn(`[store.mutation.${sfn.m_addData}] Given route by name of >>${ routeName }<< was not processed.`);
      }
    }
  }
});

export default theStore;
