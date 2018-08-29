import Vue from 'vue'
import App from './App'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDqTZPok7xEmRz_2Z4XWa7PF3IQdg_PPPY',
  authDomain: 'onlinestore-325fb.firebaseapp.com',
  databaseURL: 'https://onlinestore-325fb.firebaseio.com',
  projectId: 'onlinestore-325fb',
  storageBucket: 'onlinestore-325fb.appspot.com',
  messagingSenderId: '206932177056'
}
fb.initializeApp(config)
let app
fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>',
      created () {
        fb.auth().onAuthStateChanged(user => {
          if (user) {
            this.$store.dispatch('autoLoginUser', user)
          }
          this.$store.dispatch('fetchProducts')
        })
      }
    })
  }
})
