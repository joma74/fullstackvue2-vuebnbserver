<template>
  <div class="listing-save" @click.stop="toggleSaved">
    <button v-if="asButton">
      <i :class="classes"></i>
      {{ message }}
    </button>
    <i v-else :class="classes"></i>
  </div>
</template>

<script>
import Vue from "vue";
import sfn from "./../store-function-names";
import { Component } from "vue-property-decorator";
import Vuex from "vuex";

@Component
class ListingSave extends Vue {
  /**
   * @type {Number}
   */
  id;

  /**
   * @type {Boolean}
   */
  asButton;

  toggleSaved() {
    this.$store.commit(sfn.m_toggleSaved, this.id);
  }

  /** @returns {Boolean} */
  get isListingSaved() {
    return this.$store.state.saved.find(saved => saved === this.id);
  }
  get classes() {
    let saved = this.isListingSaved;
    return {
      fa: true,
      "fa-lg": true,
      "fa-heart": saved,
      "fa-heart-o": !saved
    };
  }
  get message() {
    return this.isListingSaved ? "Saved" : "Save";
  }
}
export default Vue.extend({
  name: "ListingSave",
  props: {
    id: Number,
    asButton: {
      type: Boolean,
      default: true
    }
  },
  extends: ListingSave
});
</script>

<style>
.listing-save {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.listing-save .fa-heart-o {
  color: #ffffff;
}

.listing-save .fa-heart {
  color: #ff5a5f;
}

.listing-save i {
  padding-right: 4px;
}
.listing-save button .fa-heart-o {
  color: #808080;
}
</style>
