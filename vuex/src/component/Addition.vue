<template>
  <div>
    <!-- template中this是可以省略的 -->
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="handleAdd">+1</button>
    <button @click="handleAddN">+{{step}}</button>
    <button @click="handleAddAsync">ASync + 1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 3
    }
  },
  methods: {
    handleAdd () {
      // 触发mutation的第一种方式
      this.$store.commit('add')
    },
    handleAddN () {
      this.$store.commit('addN', this.step)
    },
    handleAddAsync () {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

<style>
</style>
