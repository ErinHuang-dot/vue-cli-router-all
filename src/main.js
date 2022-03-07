import { createApp } from 'vue'
import 'bootstrap' // 下方程式碼沒有要調用，直接載入即可
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App).use(router)
app.use(VueAxios, axios)
// eslint-disable-next-line
app.component('Form', Form)
// eslint-disable-next-line
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
// eslint-disable-next-line
app.component('Loading', Loading)

app.mount('#app')
