<template>
  <!-- Vue3新特性，可以没有根标签 -->
  <ZuJian @hi="showHi" nihao="你好">
      <template v-slot:qwe>
        <span style="  border: 1px red solid">插进组件的</span>
      </template>    
  </ZuJian>
</template>

<script>
import ZuJian from './components/ZuJian.vue';
export default {
    name: "App",
    components: { ZuJian },
    setup(){
      function showHi(value){
        alert(`Hi ${value}`)
      }
      return {showHi}
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>