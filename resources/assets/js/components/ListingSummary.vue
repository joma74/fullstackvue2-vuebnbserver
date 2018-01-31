<template>
  <div class="listing-summary">
    <router-link :to="{ name: 'listing', params: { id: listingSummary.id } }">
      <div class="wrapper">
        <div class="thumbnail" :style="backgroundImageStyle"></div>
        <div class="info title">
          <span>{{ listingSummary.price_per_night }}</span>
          <span>{{ listingSummary.title }}</span>
        </div>
        <div class="info address">{{ listingSummary.address }}</div>
      </div>
    </router-link>
    <listing-save :id="listingSummary.id" :as-button="false"></listing-save>
    <!-- Even though the as-button value is not dynamic, we use a v-bind to ensure the value is interpreted as a JavaScript value, not a string -->
  </div>
</template>

<script>
import Vue from "vue";
import ListingSave from "./ListingSave.vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "ListingSummary",
  components: {
    ListingSave
  },
  props: {
    listingSummary: {
      type: Object,
      required: true
    }
  }
})
export default class ListingSummary extends Vue {
  /**
   * @type {vuebnb.ListingSummaryModel}
   */
  listingSummary;

  get backgroundImageStyle() {
    return { "background-image": `url("${this.listingSummary.thumb}")` };
  }
}
</script>

<style>
.listing-summary {
  flex: none;
  transition: transform 0.5s;
  position: relative;
}

.listing-summary a {
  text-decoration: none;
}

.wrapper {
  max-width: 350px;
  display: block;
}

.thumbnail {
  width: 350px;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.listing-summary .info {
  color: #484848;
  word-wrap: break-word;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.listing-summary .info.title {
  padding-top: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.listing-summary .info.address {
  font-size: 14px;
  line-height: 18px;
}

@media (max-width: 421px) {
  .listing-summary .listing-save {
    left: 15px;
    right: auto;
  }
}
</style>
</style>
