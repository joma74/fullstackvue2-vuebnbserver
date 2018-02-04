<template>
  <div class="header">
    <div class="header-img" :style="headerImageStyle" @click="$emit('header-clicked')">
      <listing-save :id="id"></listing-save>
      <button class="view-photos">View Photos</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListingSave from "./ListingSave.vue";
import Component from "vue-class-component";

@Component
class HeaderImage extends Vue {
  /**@type {String} */
  imageUrl;

  get headerImageStyle() {
    return { "background-image": `url(${this.imageUrl})` };
  }
}

export default Vue.extend({
  name: "HeaderImage",
  components: {
    ListingSave
  },
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    id: {
      type: Number
    }
  },
  extends: HeaderImage
});
</script>

<style>
.header {
  height: 320px;
}
.header .header-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.header .header-img .view-photos {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>
