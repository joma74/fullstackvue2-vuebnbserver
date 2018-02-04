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
import { Component, Watch } from "vue-property-decorator";

@Component
class ModalWindow extends Vue {
  
  modalOpen = false;

  /**
   * @param {KeyboardEvent} evt
   */
  escapeKeyListener(evt) {
    if (evt.keyCode === 27 && this.modalOpen /* <- This Is Genius !:) */) {
      this.modalOpen = false;
    }
  }

  created() {
    document.addEventListener(
      "keyup",
      this.escapeKeyListener /* <- This Is Genius !:) */
    );
  }

  destroyed() {
    console.warn("vue-lcy: destroyed -> Has occured, yep");
    document.removeEventListener("keyup", this.escapeKeyListener);
  }

  @Watch("modalOpen")
  onModalOpenChange() {
    var className = "modal-open";
    if (this.modalOpen) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }
}

export default Vue.extend({
  name: "ModalWindow",
  extends: ModalWindow
});
</script>

<style>
#modal {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
}
#modal.show {
  display: block;
}

body.modal-open {
  overflow: hidden;
}

.modal-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0px 28px 8px;
  font-size: 4em;
  width: auto;
  height: auto;
  background: transparent;
  border: 0;
  outline: none;
  color: #ffffff;
  z-index: 1000;
  font-weight: 100;
  line-height: 1;
}

.modal-content {
  height: 100%;
  max-width: 100vh;
  padding-top: 12vh;
  margin: 0 auto;
  position: relative;
}
</style>
