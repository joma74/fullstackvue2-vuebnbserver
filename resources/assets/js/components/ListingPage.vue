<template>
    <div>
        <header-image :image-url="images[0]" @header-clicked="openModal">
		</header-image>
		<div class="container">
			<div class="heading">
				<h1>{{ title }}</h1>
				<p>{{ address }}</p>
			</div>
			<hr>
			<div class="about">
				<h3>About this listing</h3>
				<expandable-text>{{ about }}</expandable-text>
			</div>
			<div class="lists">
				<feature-list title="Amenities" :items="amenities">
					<template slot-scope="amenity">
						<i class="fa fa-lg" :class="amenity.icon"></i>
						<span>{{ amenity.title }}</span>
					</template>
				</feature-list>
				<feature-list title="Prices" :items="prices">
					<template slot-scope="price">
						{{ price.title }}:
						<strong>{{ price.value }}</strong>
					</template>
				</feature-list>
			</div>
		</div>
		<modal-window ref="modalwindow">
      		<image-carousel :images="images"></image-carousel>
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
 * @typedef {Object} Model
 * @property {number} id
 * @property {string} title
 * @property {address} string
 * @property {Array<Amenity>} amenities
 * @property {Array<Prices>} prices
 * @property {Array<String>} images
 * @property {number} id
 */
/**
 * @type {Model}
 */
let model = populateAmenitiesAndPrices(JSON.parse(window.vuebnb_listing_model));

import ImageCarousel from "./ImageCarousel.vue";
import ModalWindow from "./ModalWindow.vue";
import HeaderImage from "./HeaderImage.vue";
import FeatureList from "./FeatureList.vue";
import ExpandableText from "./ExpandableText.vue";

export default Vue.extend({
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  data: () => Object.assign(model, {}), // uses es6 arrow functions
  methods: {
    openModal() {
      this.$refs.modalwindow.modalOpen = true;
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
