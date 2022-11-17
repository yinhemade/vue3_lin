<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from 'vue';
export default {
    name: "App",
    setup(){
      let car = reactive({name:'小黄车', price:'1元/小时'})
      let sum = ref(0)
      let car2 = readonly(car)

      console.log(isRef(sum));
      console.log(isReactive(car));
      console.log(isReadonly(car2));
      console.log(isProxy(car));
      console.log(isProxy(sum));

    }
}
</script>

<style>
  .app{
    background-color: #bfa;
    padding: 10px;
  }
</style>