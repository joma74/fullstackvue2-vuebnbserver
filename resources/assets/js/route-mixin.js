import { Route, NavigationGuard } from "vue-router";
import axios, { AxiosResponse } from "axios";
import { ComponentOptions } from "vue";

/**
 * Resolves the windoww.vue_
 * @param {Route} to
 */
function getData(to) {
  return new Promise(resolve => {
    // @ts-ignore
    let serverData = JSON.parse(window.vuebnb_listing_model);
    if (!serverData.path || serverData.path !== to.path) {
      axios.get(`/api${to.path}`).then(
        /** @type {AxiosResponse} */ (({ data }) => { /** assignment destructuring */
          resolve(data);
        })
      );
    } else {
      resolve(serverData);
    }
  });
}

/**
 * @type {ComponentOptions}
 */
let routerMixin = {
  beforeRouteEnter: (to, from, next) => {
    getData(to).then(data => {
      // @ts-ignore
      next(component => component.assignData(data));
    });
  }
};
export default routerMixin;
