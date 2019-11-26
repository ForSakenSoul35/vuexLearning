import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 定义nutations
  mutations: {
    add (state) {
      // 变更状态
      state.count++
    },
    addN (state, step) {
      // 变更状态
      state.count += step
    },
    sub (state) {
      // 变更状态
      state.count--
    },
    subN (state, step) {
      // 变更状态
      state.count -= step
    }
  },
  //  定义actions
  actions: {
    // 执行异步代码
    addAsync (context) {
      // context可以理解为new出来的这个store对象
      setTimeout(() => {
        //  一秒之后触发 mutations中的add
        context.commit('add')
      }, 1000)
    },
    // 执行异步代码
    subAsync (context) {
      // context可以理解为new出来的这个store对象
      setTimeout(() => {
        //  一秒之后触发 mutations中的add
        context.commit('sub')
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return '当前最新的数量是' + state.count
    }
  },
  modules: {
  }
})
