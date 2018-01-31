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
import { Component } from "vue-property-decorator";

@Component({
  name: "ExpandableText"
})
export default class ExpandableText extends Vue {
  contracted = true;
}
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
