import './global'
import router from './router'
import {start} from 'app'

import 'mystique/release/v1.0.0/css/mystique.css'
import 'mystique/release/v1.0.0/css/mystique-theme.css'
import './style.styl'

start(router, document.getElementById('root'))