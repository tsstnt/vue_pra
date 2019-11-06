/*
入口js
*/
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './vuex/store'

//声明使用vue插件
Vue.use(VueResource)//给所有的组件对象添加了一个属性$http,包含发ajax请求的方法get()/post()

//创建事件总线对象并保存
Vue.prototype.$bus = new Vue()
new Vue({
  components: {
    App
  },
  template: '<App/>',
  store,//所有的组件对象都有一个属性:$store
}).$mount('#app')
