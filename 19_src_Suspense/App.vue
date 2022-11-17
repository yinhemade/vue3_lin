<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <Suspense>
      <template v-slot:default>
        <MyChild/>
      </template>
      <template v-slot:fallback>
        <h2>稍等，加载中</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import MyChild from './components/MyChild.vue';
import { defineAsyncComponent } from 'vue';
const MyChild = defineAsyncComponent(()=>import('./components/MyChild'))//异步引入
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