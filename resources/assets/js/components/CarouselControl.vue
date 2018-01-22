<template>
  <i :class="classes" @click="clicked"></i>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
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
});
</script>
<style>
.carousel-control {
  padding: 1rem;
  color: #ffffff;
  opacity: 0.85;
}

@media (min-width: 744px) {
  .carousel-control {
    font-size: 3rem;
  }
}
</style>
