/// <reference path="./store.d.ts"/>

import Vue from "vue";
import Vuex, { Store } from "vuex";
import sfn from "./store-function-names";
import rn from "./router-names";
import {
  VuebnbStoreState,
  ToggleSavePayload,
  AddDataPayloadObject,
  VuebnbStoreMethods,
  ToggleSavePayloadObject
} from "./store";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

let theStore = new Vuex.Store({
  /**
   * @type {VuebnbStoreState}
   */
  state: {
    saved: [],
    listing_summaries: [],
    listings: [],
    auth: false
  },
  getters: {
    savedSummaries(state) {
      return state.listing_summaries.filter(
        item => state.saved.indexOf(item.id) > -1
      );
    },
    getListing(state) {
      return /** @param {number} id */ id =>
        state.listings.find(listing => id == listing.id);
    }
  },
  actions: {
    [sfn.a_toggleSaved]: function(context, payload) {
      let theState = context.state;
      if (theState.auth) {
        let thePayload = /** @type {ToggleSavePayload} */ (payload);
        let saveId = thePayload.id;
        let theStoreMethods = /** @type {VuebnbStoreMethods} */ (context);
        axios.post("api/user/toggle_saved", saveId).then(() =>
          theStoreMethods.commit(
            /** @type {ToggleSavePayloadObject} */ ({
              type: sfn.m_toggleSaved,
              id: saveId
            })
          )
        );
      } else {
        router.push("/login");
      }
    }
  },
  mutations: {
    /**
     * @param {ToggleSavePayload} payload
     */
    [sfn.m_toggleSaved]: function(state, payload) {
      if (state.auth) {
        let index = state.saved.findIndex(saved => saved === payload.id);
        if (index === -1) {
          state.saved.push(payload.id);
        } else {
          state.saved.splice(index, 1);
        }
      } else {
        router.push("/login");
      }
    },
    /**
     * @param {AddDataPayloadObject} payload
     */
    [sfn.m_addData]: function(state, payload) {
      const { data, routeName } = payload;
      if (data.auth) {
        state.auth = data.auth;
      }
      if (routeName === rn.name_home || routeName === rn.name_saved) {
        state.listing_summaries = data.listings;
      } else if (routeName === rn.name_listing) {
        state.listings.push(data.listing);
      } else {
        console.warn(
          `[store.mutation.${
            sfn.m_addData
          }] Given route by name of >>${routeName}<< was not processed.`
        );
      }
    }
  }
});

export default theStore;
