<template>
  <i :class="classes" @click="clicked"></i>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
class CarouselControl extends Vue {
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

export default Vue.extend({
	name: "CarouselControl",
  props: {
    dir: {
      type: String,
      required: true
    }
  },
  extends: CarouselControl
});
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
