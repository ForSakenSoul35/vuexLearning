import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: [],
    inputValue: 'aaa',
    nextId: 5,
    viewKey: 'all'
  },
  mutations: {
    //  修改state中的数据
    initList (state, list) {
      state.list = list
    },
    // 处理inputValue
    setInputValue (state, value) {
      state.inputValue = value
    },
    addItem (state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    deleteItemById (state, id) {
      // 1. 根据id查找索引
      const i = state.list.findIndex(x => x.id === id)
      // 2. 调用splice
      if (i !== -1) {
        state.list.splice(i, 1)
      }
    },
    handleStatusChange (state, param) {
      // 修改列表项的选中状态
      const i = state.list.findIndex(x => x.id === param.id)
      if (i !== -1) {
        console.log('change')
        state.list[i].done = param.status
      }
    },
    cleanDoneItem (state) {
      console.log('clean')
      state.list = state.list.filter(x => x.done === false)
    },
    changeViewkey (state, key) {
      state.viewKey = key
    }

  },
  actions: {
    // 定义异步操作
    getList (context) {
      axios.get('/list.json').then(({ data }) => {
        context.commit('initList', data)
      })
    }
  },
  getters: {
    unDoneLength (state) {
      // 统计未完成的数据
      console.log(state.list.filter(x => x.done === false).length)
      return state.list.filter(x => x.done === false).length
    },
    infoList (state) {
      if (state.viewKey === 'all') {
        return state.list
      }
      if (state.viewKey === 'undone') {
        return state.list.filter(x => !x.done)
      }
      if (state.viewKey === 'done') {
        return state.list.filter(x => x.done)
      }
      return state.list
    }
  },
  modules: {
  }
})
