<template>
  <div class="image-carousel">
    <img :src="image" />
    <div class="controls">
      <carousel-control dir="left" @change-image="changeImage">
      </carousel-control>
      <carousel-control dir="right" @change-image="changeImage">
      </carousel-control>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import CarouselControl from "../components/CarouselControl.vue";

export default Vue.extend({
  components: {
    CarouselControl
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
</script>
<style>
.image-carousel img {
  max-width: 100%;
}

.image-carousel {
  height: 100%;
  margin-top: -12vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-carousel .controls {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
