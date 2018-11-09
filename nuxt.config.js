const bDev = process.env.NODE_ENV === "development"
const host_url = bDev ? "http://localhost:3000" : "http://numberoneloan.com"
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env:{
    // HOST_URL: "http://localhost:3000",
    HOST_URL: host_url,
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: '#3B8070' },

 

  /*
  ** Global CSS
  */
 css: [
  // 'element-ui/lib/theme-chalk/index.css',
  '@/assets/element/index.css',
  '@/assets/css/main.css'
  ],
  

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "~/plugins/aos", ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    browserBaseURL: host_url
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
}