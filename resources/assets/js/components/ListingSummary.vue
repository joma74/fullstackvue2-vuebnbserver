<template>
  <div class="listing-summary">
    <router-link :to="{ name: 'listing', params: { id: listing.id } }">
      <div class="wrapper">
        <div class="thumbnail" :style="backgroundImageStyle"></div>
        <div class="info title">
          <span>{{ listing.price_per_night }}</span>
          <span>{{ listing.title }}</span>
        </div>
        <div class="info address">{{ listing.address }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";

/**
 * @typedef {Object} Listing
 * @property {number} id
 * @property {string} title
 * @property {string} price_per_night
 * @property {string} thumb
 */

/** @type {Listing} */
let p_listing = {
  type: Object,
  required: true
};

export default Vue.extend({
  name: "ListingSummary",
  props: {
    listing: p_listing
  },
  computed: {
    backgroundImageStyle() {
      return { "background-image": `url("${this.listing.thumb}")` };
    }
  }
});
</script>

<style>
.listing-summary {
  flex: none;
  transition: transform 0.5s;
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
</style>
