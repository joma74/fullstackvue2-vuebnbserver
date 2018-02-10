<template>
  <div class="home-container">
    <!-- () is a map of each item where country is the key and groupOfListings is the value(an array of listing objects)-->
    <listing-summary-group class="listing-summary-group" v-for="(listingsOfCountry, country) in listingsByCountry" :key="country" :listings-of-country="listingsOfCountry" :country="country" />
  </div>
</template>

<script>
import Vue from "vue";
import { groupByCountry } from "../helpers";
import ListingSummaryGroup from "./ListingSummaryGroup.vue";
import ListingCountriesWithSummaryModel from "../ListingCountriesWithSummaryModel";
import Component from "vue-class-component";
import { VuebnbStoreState } from "../store";

@Component
export class HomePageClass extends Vue {
  get listingsByCountry() {
    let theStoreState = /** @type {VuebnbStoreState} */ (this.$store.state);
    let listingsByCountry = groupByCountry(theStoreState.listing_summaries);
    return listingsByCountry;
  }
}

export default Vue.extend({
  name: "HomePage",
  components: {
    ListingSummaryGroup
  },
  extends: HomePageClass
});
</script>

<style>

</style>
