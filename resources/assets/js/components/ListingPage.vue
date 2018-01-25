<template>
	<div>
		<header-image v-if="listing.images[0]" :image-url="listing.images[0]" @header-clicked="openModal">
		</header-image>
		<div class="container">
			<div class="heading">
				<h1>{{ listing.title }}</h1>
				<p>{{ listing.address }}</p>
			</div>
			<hr>
			<div class="about">
				<h3>About this listing</h3>
				<expandable-text>{{ listing.about }}</expandable-text>
			</div>
			<div class="lists">
				<feature-list title="Amenities" :items="listing.amenities">
					<template slot-scope="amenity">
						<i class="fa fa-lg" :class="amenity.icon"></i>
						<span>{{ amenity.title }}</span>
					</template>
				</feature-list>
				<feature-list title="Prices" :items="listing.prices">
					<template slot-scope="price">
						{{ price.title }}:
						<strong>{{ price.value }}</strong>
					</template>
				</feature-list>
			</div>
		</div>
		<modal-window ref="modalwindow">
			<image-carousel :images="listing.images"></image-carousel>
		</modal-window>
	</div>
</template>

<script>
import Vue from "vue";
import { populateAmenitiesAndPrices } from "../helpers";
import sample from "../data";
import "./../../css/style.css";
import "core-js/fn/object/assign";

/**
 * @typedef {Object} Amenity
 * @property {string} icon
 * @property {string} title
 *
 * @typedef {Object} Prices
 * @property {string} value
 * @property {string} title
 *
 * @typedef {Object} Listing
 * @property {number} id
 * @property {string} title
 * @property {string} about
 * @property {string} address
 * @property {Array<Amenity>} amenities
 * @property {Array<Prices>} prices
 * @property {Array<String>} images
 */
/**
 * @type {Listing}
 */
let listingInitialData = {
  id: null,
  about: null,
  title: null,
  address: null,
  amenities: [],
  prices: [],
  images: []
};

import ImageCarousel from "./ImageCarousel.vue";
import ModalWindow from "./ModalWindow.vue";
import HeaderImage from "./HeaderImage.vue";
import FeatureList from "./FeatureList.vue";
import ExpandableText from "./ExpandableText.vue";
import routeMixin from "../route-mixin";

export default Vue.extend({
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  data: () => {
    return { listing: listingInitialData };
  }, // uses es6 arrow functions
  mixins: [routeMixin],
  methods: {
    openModal() {
      this.$refs.modalwindow.modalOpen = true;
    },
    assignData(data) {
      let resetData = populateAmenitiesAndPrices(data.listing);
      this.listing = Object.assign({}, this.listing, resetData); // See https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
    }
  }
});
</script>

<style>
.about {
  margin: 2em 0;
}
.about h3 {
  font-size: 22px;
}
</style>
