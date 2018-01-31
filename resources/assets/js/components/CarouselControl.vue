<template>
  <i :class="classes" @click="clicked"></i>
</template>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "CarouselControl",
  props: {
    dir: {
      type: String,
      required: true
    }
  }
})
export default class CarouselControl extends Vue {
  /** 
   * @type {String} 
   */
  dir;

  clicked() {
      if ("left" === this.dir) {
        this.$emit("change-image", -1);
      } else {
        this.$emit("change-image", +1);
      }
    }

  get classes() {
    return "carousel-control fa fa-2x fa-chevron-" + this.dir;
  }
}
</script>
<style>
.carousel-control {
  padding: 1rem;
  color: #ffffff;
  opacity: 0.85;
  cursor: pointer;
}

@media (min-width: 744px) {
  .carousel-control {
    font-size: 3rem;
  }
}
</style>
