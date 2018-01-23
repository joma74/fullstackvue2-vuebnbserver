let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/assets/js/app.js", "public/js")
  .styles("resources/assets/css/style.css", "public/css/style.css")
  .options({
    extractVueStyles: "public/css/vue-style.css"
  })
  .webpackConfig({
    watchOptions: {
      poll: 3000,
      ignored: /node_modules/
    },
    resolve: {
      alias: { vue$: "vue/dist/vue.runtime.esm.js" }
    }
  });
