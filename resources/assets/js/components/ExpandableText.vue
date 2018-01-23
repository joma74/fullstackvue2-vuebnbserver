<template>
  <div>
    <p :class="{ contracted: contracted }">
      <slot></slot>
    </p>
    <button v-if="contracted" class="more" @click="contracted = false">+ More</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      contracted: true
    };
  }
});
</script>

<style>
.about button.more {
  background: transparent;
  border: 0;
  color: #008489;
  padding: 0;
  font-size: 17px;
}
.about button.more:hover,
.about button.more:focus,
.about button.more:active {
  text-decoration: underline;
  outline: none;
}

.about p.contracted {
  height: 100px;
  overflow: hidden;
}
</style>
