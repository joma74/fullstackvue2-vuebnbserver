import Vue from "vue";
import{ populateAmenitiesAndPrices }from'./helpers';
import sample from "./data";
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
 * @property {number} id
 */
/** 
 * @type {Model} 
 */
let model = populateAmenitiesAndPrices(JSON.parse(window.vuebnb_listing_model));
console.log(mdoel);
/**
 * @type {Vue}
 */
var app = new Vue({
  el: "#app",
  data: Object.assign(model, {
    headerImageStyle: {
      "background-image": `url('${model.images[0]}')`
    },
    contracted: true,
    modalOpen: false
  }),
  beforeCreate: function() {
    console.log("vue-lcy: beforeCreate -> " + this.title);
  },
  created: function() {
    console.log("vue-lcy: created -> " + this.title);
    document.addEventListener(
      "keyup",
      this.escapeKeyListener /* <- This Is Genius !:) */
    );
  },
  methods: {
    /**
     * @param {KeyboardEvent} evt
     */
    escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.modalOpen /* <- This Is Genius !:) */) {
        this.modalOpen = false;
      }
    }
  },
  watch: {
    modalOpen: function() {
      var className = "modal-open";
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  destroyed: function() {
    console.log("vue-lcy: destroyed -> " + this.title);
    document.removeEventListener("keyup", this.escapeKeyListener);
  }
});
