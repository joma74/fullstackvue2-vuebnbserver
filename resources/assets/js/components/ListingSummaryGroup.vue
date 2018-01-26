<template>
    <div class="listing-summary-group">
        <h1>Places in {{ country }}</h1>
        <div class="listing-summaries">
            <listing-summary v-for="listing in listingsOfCountry" :key="listing.id" :listing="listing"></listing-summary>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import ListingSummary from "./ListingSummary.vue"

export default Vue.extend({
  name: "ListingSummaryGroup",
  props: {
      country: {
          type: String,
          required: true
      },
      listingsOfCountry: {
          type: Array,
          required: true
      }
  },
  components: {
    ListingSummary
  }
});
</script>

<style>
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
