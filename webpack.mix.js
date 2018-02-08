require("dotenv").config();
let mix = require("laravel-mix");
const StatsWebpackPlugin = require("stats-webpack-plugin");

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
  .styles(
    [
      "node_modules/open-sans-all/css/open-sans.css",
      "resources/assets/css/style.css"
    ],
    "public/css/style.css"
  )
  .copy("node_modules/open-sans-all/fonts", "public/fonts")
  .copy("resources/assets/images", "public/images")
  .options({
    extractVueStyles: "public/css/vue-style.css"
  })
  .extract(
    [
      "vue",
      "vuex",
      "vue-router",
      "axios",
      "vue-class-component",
      "vue-property-decorator"
    ],
    "js/vendors"
  )
  .webpackConfig({
    watchOptions: {
      poll: 3000,
      ignored: /node_modules/
    },
    resolve: {
      alias: { vue$: "vue/dist/vue.runtime.esm.js" }
    },
    output: {
      devtoolModuleFilenameTemplate(info) {
        const isJsFile = info.resourcePath.match(/^\.\/src\/.*\.js$/)
        return `webpack:///${isJsFile ? info.resourcePath.replace('./', '') : info.resourcePath}`
      }
    }
  });
if (!mix.inProduction()) {
  mix.sourceMaps(true, "source-map");
}

if (mix.inProduction()) {
  mix.webpackConfig({
    profile: true,
    plugins: [
      new StatsWebpackPlugin(
        "../target/webpack-stats.json",
        {
          hash: true,
          version: true,
          timings: true,
          children: true,
          errorDetails: false,
          chunks: true,
          modules: true,
          reasons: true,
          source: false,
          publicPath: true
        }
      )
    ]
  });
}
