<template>
    <div>
        <div id="toolbar">
            <img class="icon" src="/images/logo.png">
            <h1>vuebnb</h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
#toolbar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

#toolbar .icon {
  /* display: inline-block; */
  height: 34px;
  padding: 16px 12px 16px 24px;
}

#toolbar h1 {
  /* display: inline-block; */
  color: #4fc08d;
  font-size: 28px;
  margin: 0;
}
</style>
