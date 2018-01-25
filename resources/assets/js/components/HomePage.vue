<template>
  <div class="home-container">
    <!-- () is a map of each item where country is the key and groupOfListings is the value(an array of listing objects)-->
    <div v-for="(listingsOfCountry, country) in listingsByCountry" class="listing-summary-group">
      <h1>Places in {{ country }}</h1>
      <div class="listing-summaries">
        <listing-summary v-for="listing in listingsOfCountry" :key="listing.id" :listing="listing"></listing-summary>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import { groupByCountry } from "../helpers";
import ListingSummary from "./ListingSummary.vue";

/**
 * @typedef {Object} Listing
 * @property {number} id
 * @property {string} title
 * @property {string} price_per_night
 * @property {string} thumb
 *
 * @typedef {Object} CountryWithListings
 * @property {string} country
 * @property {Listing[]} listings
 */
/**
 * @type {CountryWithListings[]}
 */
let listingsByCountry = {};

export default Vue.extend({
  components: {
    ListingSummary
  },
  data: () => {
    return { listingsByCountry: listingsByCountry };
  }, // uses es6 arrow functions
  beforeRouteEnter(to, from, next) {
    let serverData = JSON.parse(window.vuebnb_listing_model);
    if (to.path === serverData.path) {
      next(component => {
        let resetData = groupByCountry(serverData.listings);
        component.listingsByCountry = Object.assign(
          {},
          component.listingsByCountry,
          resetData
        ); // See https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      });
    } else {
      axios.get("/api/").then(({ data }) => {
        let listingsByCountry = groupByCountry(data.listings);
        next(component => (component.listingsByCountry = listingsByCountry));
      });
    }
  }
});
</script>

<style>
.home-container {
  margin: 0 auto;
  padding: 0 25px;
}
@media (min-width: 1131px) {
  .home-container {
    width: 1080px;
  }
}
.listing-summary-group {
  padding-bottom: 20px;
}
.listing-summaries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
}
.listing-summaries > .listing-summary {
  margin-right: 15px;
}
.listing-summaries > .listing-summary:last-child {
  margin-right: 0;
}
</style>
