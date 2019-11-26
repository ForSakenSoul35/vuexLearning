<template>
  <div>
    <my-addtion></my-addtion>
    <p>-------------------------------------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addtion from './component/Addition'
import Subtraction from './component/Subtraction'
export default {
  data () {
    return {}
  },
  components: {
    'my-addtion': Addtion,
    'my-subtraction': Subtraction
  }
}
</script>

<style>
</style>
