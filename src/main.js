import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstap ========== BOOTSTRAP ==========

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/* import the fontawesome core ========== FONT AWESOME ==========*/
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* solid icons */
import {
  faLocationDot,
  faPhone,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
  faAngleUp,
  faEnvelope,
  faPrint
} from '@fortawesome/free-solid-svg-icons'

/* brand icons */
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faGalacticRepublic
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faLocationDot,
  faPhone,
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
  faAngleUp,
  faEnvelope,
  faGalacticRepublic,
  faPrint
)

// ==================== *** ====================
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
