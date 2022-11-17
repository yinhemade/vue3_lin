<template>
  <!-- Vue3新特性，可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>姓名: {{person.name}}</h3>
  <h3>年龄: {{person.age}}</h3>
  <h3>职业: {{person.job.type}}</h3>
  <h3>薪资: {{person.job.salary}}</h3>
  <h3>测试的数据C是: {{person.job.a.b.c}}</h3>
  
  <button @click="sayHello">点击</button>&nbsp;
  <button @click="changeInfo">点击修改信息</button>&nbsp;
  <button @click="changeC">点击修改C的值</button>&nbsp;

</template>

<script>
import { reactive} from '@vue/reactivity';
export default {
  name: 'App',
  setup(){
    const person = reactive({
      name :'张三',
      age :18,
      job : {
        type: 'Web开发工程师',
        salary:'30K',
        a:{
          b:{
            c:600
          }
        }
      }
    })
    function sayHello(){
      alert(`我的名字是${person.name}, 今年已经${person.age}岁了`)
    }
    function changeInfo(){
      person.name = '狸猫'
      person.age = 81
      person.job.type = 'UI工程师'
      person.job.salary = '60K',
      person.job.a.b.c = '王熙凤'

    }

    // 返回一：正常函数
    return{
      person,
      sayHello,changeInfo
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
