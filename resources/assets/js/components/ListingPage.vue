<template>
	<div>
		<header-image v-if="listing.images[0]" :id="listing.id" :image-url="listing.images[0]" @header-clicked="openModal">
		</header-image>
		<div class="listing-container">
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
import "core-js/fn/object/assign";

import ImageCarousel from "./ImageCarousel.vue";
import ModalWindow, { ModalWindowClass } from "./ModalWindow.vue";
import HeaderImage from "./HeaderImage.vue";
import FeatureList from "./FeatureList.vue";
import ExpandableText from "./ExpandableText.vue";
import ListingModel from "../ListingModel";
import Component from "vue-class-component";
import { VuebnbStore, VuebnbStoreGetters } from "../store";

@Component
export class ListingPageClass extends Vue {
  openModal() {
    /** @type {ModalWindowClass} */ (this.$refs.modalwindow).modalOpen = true;
  }

  get listing() {
    let theStoreGetters = /** @type {VuebnbStoreGetters} */ (this.$store
      .getters);
    let serverListingModel = theStoreGetters.getListing(
      parseInt(this.$route.params.id)
    );
    if (!serverListingModel)
      console.warn(
        `[${
          ListingPageClass.name
        }.listing] Listing for the given route id of >>${
          this.$route.params.id
        }<< was not found in the store.`
      );
    let listing = populateAmenitiesAndPrices(serverListingModel);
    return listing;
  }
}

export default Vue.extend({
  name: "ListingPage",
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  extends: ListingPageClass
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
