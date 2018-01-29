<template>
  <div class="listing-save" @click.stop="toggleSaved">
    <i :class="classes"></i>
  </div>
</template>

<script>
import Vue from "vue";
import sfn from "./../store-function-names";

export default Vue.extend({
  name: "ListingSave",
  props: {
    id: Number
  },
  methods: {
    toggleSaved() {
      this.$store.commit(sfn.m_toggleSaved, this.id);
    }
  },
  computed: {
    isListingSaved() {
      return this.$store.state.saved.find(saved => saved === this.id);
    },
    classes() {
      let saved = this.isListingSaved;
      return {
        fa: true,
        "fa-lg": true,
        "fa-heart": saved,
        "fa-heart-o": !saved
      };
    }
  }
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
</style>
