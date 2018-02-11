<template>
  <div id="login" class="login-container">
    <form role="form" action="/login" method="post">
      <input type="hidden" name="_token" :value="csrf_token">
      <div class="form-control">
        <input id="email" type="email" name="email" placeholder="Email Address" required autofocus>
      </div>
      <div class="form-control">
        <input id="password" type="password" name="password" placeholder="Password" required>
      </div>
      <div class="form-control">
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
/// <reference path="../../../types/window.d.ts"/>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export class LoginPageClass extends Vue {
  csrf_token = window.csrf_token;
}

export default Vue.extend({
  name: "LoginPage",
  extends: LoginPageClass
});
</script>

<style>
#login form {
  padding-top: 40px;
}

#login .form-control {
  margin-bottom: 1em;
}

#login input[type="email"],
#login input[type="password"],
#login button,
#login label {
  width: 100%;
  font-size: 19px !important;
  line-height: 24px;
  color: #484848;
  font-weight: 300;
}

#login input {
  background-color: transparent;
  padding: 11px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  box-sizing: border-box;
}

#login button {
  background-color: #4fc08d;
  color: #ffffff;
  cursor: pointer;
  border: #4fc08d;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
