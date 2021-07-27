
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"},
      { href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", rel:"stylesheet", integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous"},
    ],
    script:[
      
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
          type: "text/javascript"
        },
        {
          src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
          type: "text/javascript"
        },
        {
          src : "/css/fontawesome-all.min.css"
        },
        { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        },
        {src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
        },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    {
      src: "./plugins/element-ui.js",
      ssr: false
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
//  router:{
//   middleware:['auth']
//  },
 
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBkabLJFqyrY-pgvWskduvrRy98ZntFi5g",
          authDomain: "nuxtjs-delivery-app.firebaseapp.com",
          projectId: "nuxtjs-delivery-app",
          storageBucket: "nuxtjs-delivery-app.appspot.com",
          messagingSenderId: "3007951217",
          appId: "1:3007951217:web:d540154627131a93c5c6d0",
          measurementId: "G-DWRYYSMHJH"
        },
        services: {
          persistence: 'local', // default
          initialize: {
           
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
          },
          ssr: false, // default
           // Just as example. Can be any other service.
        }
      }]
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
