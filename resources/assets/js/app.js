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

Vue.component("image-carousel", {
  template: `
    <div class="image-carousel">
      <img v-bind:src="image"/>
      <div class="controls">
        <carousel-control 
          dir="left" 
          @change-image="changeImage">
        </carousel-control>
        <carousel-control 
          dir="right" 
          @change-image="changeImage">
        </carousel-control>
      </div>
    </div>
  `,
  components: {
    "carousel-control": {
      template: `<i :class="classes" @click="clicked"></i>`,
      props: {
        dir: {
          type: String,
          required: true
        }
      },
      methods: {
        clicked: function() {
          if ("left" === this.dir) {
            this.$emit("change-image", -1);
          } else {
            this.$emit("change-image", +1);
          }
        }
      },
      computed: {
        classes() {
          return "carousel-control fa fa-2x fa-chevron-" + this.dir;
        }
      }
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    changeImage(relativeIndex) {
      let newIndex = 0;
      if (relativeIndex < 0) {
        newIndex = this.index - 1;
      } else {
        newIndex = this.index + 1;
      }
      if (newIndex < 0) {
        newIndex = this.images.length - 1;
      }
      if (newIndex > this.images.length - 1) {
        newIndex = 0;
      }
      this.index = newIndex;
    }
  },
  computed: {
    image() {
      return this.images[this.index];
    }
  }
});

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
