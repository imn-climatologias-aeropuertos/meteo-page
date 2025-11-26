import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faBars, faEject, faVolcano, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { faSatellite, faDatabase, faHurricane, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faWaveSquare, faCloudSunRain, faGlobeAmericas, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureLow, faChartLine, faChartArea, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture, faWater, faFireFlameCurved, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faBars, faEject, faSatellite, faDatabase, faHurricane)
library.add(faWaveSquare, faCloudSunRain, faGlobeAmericas, faTemperatureLow)
library.add(faChartLine, faChartArea, faPlaneDeparture, faWater, faFireFlameCurved)
library.add(faVolcano, faRecycle, faClipboard, faEnvelope, faMoon, faSun, faGithub as IconDefinition)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .mount('#app')
