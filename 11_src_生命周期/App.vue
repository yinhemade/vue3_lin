<template>
  <!-- Vue3新特性，可以没有根标签 -->
  <button @click="isShowDemo =!isShowDemo">点我关闭组件</button>
  <ZuJian v-if="isShowDemo"/>
</template>

<script>
import { ref } from 'vue';
import ZuJian from './components/ZuJian.vue';
export default {
    name: "App",
    components: { ZuJian },
    setup(){
      let isShowDemo = ref(true)
      return {isShowDemo}
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