<template>
  <div class="list">
    <div class="title">
      <strong>{{ title }}</strong>
    </div>
    <div class="content">
      <div class="list-item" v-for="item in items">
        <slot v-bind="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "FeatureList",
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
})
export default class FeatureList extends Vue {}
</script>

<style>
.list {
  display: flex;
  flex-wrap: nowrap;
  margin: 2em 0;
}
.list .title {
  flex: 1 1 25%;
}
.list .content {
  display: flex;
  flex: 1 1 75%;
  flex-wrap: wrap;
}
.list .list-item {
  flex: 0 0 50%;
  margin-bottom: 16px;
}
.list .list-item > i {
  width: 35px;
}
@media (max-width: 743px) {
  .list .title {
    flex: 1 1 33%;
  }
  .list .content {
    flex: 1 1 67%;
  }
  .list .list-item {
    flex: 0 0 100%;
  }
}
</style>
