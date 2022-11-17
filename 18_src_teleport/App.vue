<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <MyChild/>
  </div>
</template>

<script>
import MyChild from './components/MyChild.vue';
export default {
    name: "App",
    components: { MyChild },
}
</script>

<style>
  .app{
    background-color: #bfa;
    padding: 10px;
  }
</style>