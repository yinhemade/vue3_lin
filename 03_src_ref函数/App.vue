<template>
  <!-- Vue3新特性，可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>姓名: {{name}}</h3>
  <h3>年龄: {{age}}</h3>
  <h3>职业: {{job.type}}</h3>
  <h3>薪资: {{job.salary}}</h3>
  <button @click="sayHello">点击</button>&nbsp;
  <button @click="changeInfo">点击2</button>&nbsp;

</template>

<script>
import { ref } from '@vue/reactivity';
// import {h} from 'vue'
export default {
  name: 'App',
  setup(){
    // 基本数据类型
    let name = ref('张三');
    let age = ref(18) 
    // 引用数据类型
    let job = ref({
      type: 'Web开发工程师',
      salary:'30K'
    })
    function sayHello(){
      alert(`我的名字是${name}, 今年已经${age}岁了`)
    }
    function changeInfo(){
    // 基本数据类型

      name.value = '狸猫'
      age.value = 81
      // console.log(job.value);
    // 引用数据类型
      job.value.type = 'UI工程师'
      job.value.salary = '60K'

    }

    // 返回一：正常函数
    return{
      name,age,sayHello,changeInfo,job
    }

    // 返回二：渲染函数
    // return ()=>h('h1', '尚硅谷')
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
