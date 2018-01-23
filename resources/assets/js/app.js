import Vue from "vue";
import { populateAmenitiesAndPrices } from "./helpers";
import sample from "./data";
import "./../css/style.css";
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

import ImageCarousel from "./components/ImageCarousel.vue"
import ModalWindow from "./components/ModalWindow.vue"
import HeaderImage from "./components/HeaderImage.vue"

/**
 * @type {Vue}
 */
var app = new Vue({
  el: "#app",
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage
  },
  data: Object.assign(model, {
    contracted: true
  }),
  methods: {
    openModal(){
      this.$refs.modalwindow.modalOpen = true;
    }
  }
});
