/* 
vuex最核心的管理对象:store
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 
相当于vue中的data对象
*/

const state = {
  count: 0//指定初始化数据
}
/* 
一个包含n个用于直接更新状态数据方法的对象
方法只能用于更新数据的同步代码
*/
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
/* 
一个包含n个用于间接更新状态数据方法的对象
*/
const actions = {
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  //同步action
  incrementIfOdd({commit,state}){//在action中执行逻辑
    if (state.count$===1) {
      //提交给mutation
    commit('INCREMENT')
      
    }
  },
  //异步action
  incrementAsync({commit}){
    setTimeout(() => {
      //有了结果后提交给mutation
      commit('INCREMENT')
    }, 1000);
  },
}
/* 
一个包含n个基于state数据的getter计算属性的方法的对象
*/
const getters = {
  evenOrOdd(state){
    return state.count %2 ===1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})