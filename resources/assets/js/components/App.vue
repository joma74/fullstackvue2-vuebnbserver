<template>
  <div>
    <div id="toolbar">
      <router-link :to="{ name : 'home' }">
        <img class="icon" src="/images/logo.png">
        <h1>vuebnb</h1>
      </router-link>
      <ul class="links">
        <li v-if="$store.state.auth">
          <router-link :to="{ name: 'saved' }">Saved</router-link>
        </li>
        <li v-if="$store.state.auth">
          <a @click="logout">Log Out</a>
          <form style="display: hidden" action="/logout" method="POST" id="logout">
            <input type="hidden" name="_token" :value="csrf_token" />
          </form>
        </li>
        <li v-else>
          <router-link :to="{ name: 'login' }">Log In</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Vue from "vue";
import RouterLink from "vue-router";
import CustomFooter from "./CustomFooter.vue";
import Component, {mixins} from "vue-class-component";
import MyMixin from "./MyMixin";
import VueClass from "vue-class-component"

const LOGOUT_ELEMENTID = "logout";

@Component
export class AppClass extends mixins(MyMixin) {
  csrf_token = window.csrf_token;

  created(){
    console.log(this.mixinValue);
    console.log(this.castMeEvil());
  }

  logout() {
    let logoutForm = /** @type {HTMLFormElement} */ (document.getElementById(
      LOGOUT_ELEMENTID
    ));
    if (!logoutForm) {
      console.warn(
        `[${
          AppClass.name
        }.logout] HTMLElement for the given id of >>${LOGOUT_ELEMENTID}<< was not found in the store.`
      );
    } else {
      logoutForm.submit();
    }
  }
}

export default Vue.extend({
  name: "App",
  components: {
    CustomFooter
  },
  extends: AppClass
  
});
</script>

<style>
#toolbar {
  display: flex;
  justify-content: space-between;
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

#toolbar ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 24px 0 0;
  margin: 0;
}

@media (max-width: 373px) {
  #toolbar ul {
    padding-right: 12px;
  }
}

#toolbar ul li {
  padding: 10px 10px 0 10px;
}

#toolbar ul li a {
  text-decoration: none;
  line-height: 1;
  color: inherit;
  font-size: 13px;
  padding-bottom: 8px;
  letter-spacing: 0.5px;
  cursor: pointer;
}

#toolbar ul li a:hover {
  border-bottom: 2px solid #484848;
  padding-bottom: 6px;
}
</style>
