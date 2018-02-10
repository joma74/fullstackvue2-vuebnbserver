<template>
  <div id="saved" class="home-container">
    <h2>Saved listings</h2>
    <div v-if="listings.length" class="listing-summaries">
      <listing-summary v-for="listing in listings" :key="listing.id" :listing-summary="listing">
      </listing-summary>
    </div>
    <div v-else>No saved listings</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ListingSummary from "./ListingSummary.vue";
import { VuebnbStoreGetters } from "../store";

@Component
export class SavedPageClass extends Vue {
  get listings() {
    let theStoreGetters = /** @type {VuebnbStoreGetters} */ (this.$store
      .getters);
    return theStoreGetters.savedSummaries;
  }
}

export default Vue.extend({
  name: "SavedPage",
  components: {
    ListingSummary
  },
  extends: SavedPageClass
});
</script>

<style>
#saved .listing-summaries {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  overflow: hidden;
}

#saved .listing-summaries .listing-summary {
  padding-bottom: 30px;
}

#saved  .listing-summaries > .listing-summary:last-child {
  margin-right: 0;
}
</style>
