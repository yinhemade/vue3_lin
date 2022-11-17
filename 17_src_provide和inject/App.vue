<template>
  <div class="app">
    <h3>我是APP组件(祖),<span>{{name}}--{{price}}</span></h3>
    <MyChild/>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue';
import MyChild from './components/MyChild.vue';
export default {
    name: "App",
    components: { MyChild },
    setup(){
      let car = reactive({name:'五菱宏光', price:'40W'})
      provide('car', car)
      return {...toRefs(car)}
    }
}
</script>

<style>
  .app{
    background-color: #bfa;
    padding: 10px;
  }
</style>