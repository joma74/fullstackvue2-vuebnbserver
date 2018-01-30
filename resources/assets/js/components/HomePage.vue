<template>
  <div class="home-container">
    <!-- () is a map of each item where country is the key and groupOfListings is the value(an array of listing objects)-->
    <listing-summary-group class="listing-summary-group" v-for="(listingsOfCountry, country) in listingsByCountry" :key="country" :listingsOfCountry="listingsOfCountry" :country="country">
    </listing-summary-group>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { groupByCountry } from "../helpers";
import routeMixin from "../route-mixin";
import ListingSummaryGroup from "./ListingSummaryGroup.vue";
import ListingCountriesWithSummaryModel from "../ListingCountriesWithSummaryModel";

export default Vue.extend({
  name: "HomePage",
  components: {
    ListingSummaryGroup
  },
  data() {
    return { listingsByCountry: ListingCountriesWithSummaryModel() };
  }, // uses es6 arrow functions
  mixins: [routeMixin],
  methods: {
    assignData(data) {
      let resetData = groupByCountry(data.listings);
      this.listingsByCountry = Object.assign(
        {},
        this.listingsByCountry,
        resetData
      ); // See https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
    }
  },
  computed: {
    fakeMethodForCodeCompletion() {}
  }
});
</script>

<style>

</style>
