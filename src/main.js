// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
export default function (Vue, { router, head, isClient }) {
  // adding material design icons
  // adding fontawesome 
  // adding VueSweetalert2 
  head.link.push({
    rel: 'stylesheet',
    href:'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css'
  },
  {
    rel: 'stylesheet',
    href:'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  }
  )
  Vue.use(Buefy)
  Vue.use(VueSweetalert2)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
