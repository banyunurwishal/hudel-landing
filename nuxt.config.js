export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hudel",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "logo.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Inter",
      },
    ],
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["animate.css/animate.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
