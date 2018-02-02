import Vue from "vue";
import Vuex from "vuex";
import sfn from "./store-function-names";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /**
     * @type {Array<Number>}
     */
    saved: []
  },
  mutations: {
    /**
     * @param {number} id
     */
    [sfn.m_toggleSaved] : function(state, id) {
      let index = state.saved.findIndex(saved => saved === id);
      if (index === -1) {
        state.saved.push(id);
      } else {
        state.saved.splice(index, 1);
      }
    }
  }
});
