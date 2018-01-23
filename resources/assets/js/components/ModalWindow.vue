<template>
    <div id="modal" :class="{ show: modalOpen }">
		<button v-on:click="modalOpen = false" class="modal-close">
				&times;
		</button>
		<div class="modal-content">
      		<slot></slot>
    	</div>
	</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      modalOpen: false
    };
  },
  created: function() {
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
    console.warn("vue-lcy: beforeCreate -> Have been destroyed, yep");
    document.removeEventListener("keyup", this.escapeKeyListener);
  }
});
</script>

<style>

</style>
