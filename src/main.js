/* 
入口js
*/
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  components:{
    App
  },
  template:'<App/>',
  store
}).$mount('#app')