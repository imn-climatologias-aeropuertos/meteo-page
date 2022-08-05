import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faBars, faEject, faE } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faBars, faEject)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
