/*
入口js
*/
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

//声明使用vue插件
Vue.use(VueResource)//给所有的组件对象添加了一个属性$http对象,包含发送ajax的请求方法get()/post()

new Vue({
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
