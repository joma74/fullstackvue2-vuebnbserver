<template>
    <footer>
        <div class="hr" />
        <div :class="containerClass">
            <p>
                <img class="icon" src="/images/logo_grey.png" />
                <span>
                    <strong>Vuebnb</strong>. A full-stack Vue.js and Laravel demo app
                </span>
            </p>
        </div>
    </footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    data: {},
    methods: {
    },
    computed: {
        containerClass() {
            return `${ this.$route.name }-container`
        }
    }
})
</script>

<style>
footer {
  margin-bottom: 3em;
}
.hr {
  border-bottom: 1px solid #dbdbdb;
  margin: 3em 0;
}
footer .icon {
  height: 23px;
  display: inline-block;
  margin-bottom: -6px;
}
footer p {
  font-size: 15px;
  color: #767676 !important;
  display: flex;
}
footer p img {
  padding-right: 6px;
}
</style>
