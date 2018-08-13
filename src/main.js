import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var config = {
      apiKey: 'AIzaSyDqTZPok7xEmRz_2Z4XWa7PF3IQdg_PPPY',
      authDomain: 'onlinestore-325fb.firebaseapp.com',
      databaseURL: 'https://onlinestore-325fb.firebaseio.com',
      projectId: 'onlinestore-325fb',
      storageBucket: 'onlinestore-325fb.appspot.com',
      messagingSenderId: '206932177056'
    }
    fb.initializeApp(config)
  }
})
