<template>
    <div>
        <div id="toolbar">
            <router-link :to="{ name : 'home' }">
                <img class="icon" src="/images/logo.png">
                <h1>vuebnb</h1>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import RouterLink from "vue-router";

export default Vue.extend({});
</script>

<style>
#toolbar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

#toolbar a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

#toolbar .icon {
  height: 34px;
  padding: 16px 12px 16px 24px;
}

#toolbar h1 {
  color: #4fc08d;
  font-size: 28px;
  margin: 0;
}
</style>
