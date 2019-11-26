<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="sub">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="subAsync">-1 async</button>
    <p>{{showNum}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // 展开运算符
    ...mapState(['count']),
    // 在计算属性中
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapActions(['subAsync']),
    ...mapMutations(['sub', 'subN'])
  }
}
</script>

<style>
</style>
