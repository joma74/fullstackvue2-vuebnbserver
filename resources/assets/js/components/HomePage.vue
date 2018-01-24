<template>
    <div>Vuebnb home page</div>
</template>

<script>
import Vue from "vue";
import { groupByCountry } from "../helpers";

/**
 * @typedef {Object} Model
 * @property {number} id
 * @property {string} title
 * @property {string} price_per_night
 * @property {string} thump
 */
let serverData = JSON.parse(window.vuebnb_listing_model);
/**
 * @type {Model[]}
 */
let listing_groups = groupByCountry(serverData.listings);

export default Vue.extend({
  data: () => Object.assign(listing_groups, {}), // uses es6 arrow functions
});
</script>

<style>

</style>
