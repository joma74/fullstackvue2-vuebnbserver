import Vue from "vue";
import sample from'./data';
/**
 * @type {Vue}
 */
var app = new Vue({
  el: "#app",
  data: {
    headerImageStyle: {
      "background-image": "url('images/header.jpg')"
    },
    contracted: true,
    modalOpen: false,
    title: sample.title,
    address: sample.address,
    about: sample.about,
    amenities: sample.amenities,
    prices: sample.prices
  },
  beforeCreate: function() {
    console.log("vue-lcy: beforeCreate -> " + this.title);
  },
  created: function() {
    console.log("vue-lcy: created -> " + this.title);
    document.addEventListener("keyup", this.escapeKeyListener /* <- This Is Genius !:) */);
  },
  methods: {
    /**
     * @param {KeyboardEvent} evt
     */
    escapeKeyListener: function(evt) {
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
