<template>
  <!-- Vue3新特性，可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>姓名: {{name}}</h3>
  <h3>年龄: {{age}}</h3>
  <h3>性别: {{gender}}</h3>
  <button @click="sayHello">点击</button>&nbsp;
  <button @click="sayWelcome">点击2</button><br/>
  <button @click="test1">点击3</button>&nbsp;
  <button @click="test2">点击4</button><br/>

</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return{
      gender:'男'
    }
  },
  methods:{
    sayWelcome(){
      alert(`你是${this.gender}的`)
    },
    test1(){
      console.log(this.gender);
      console.log(this.sayWelcome);
      console.log(this.sayHello);
      console.log(this.name);
      console.log(this.age);
    }
  },
  setup(){
    let name = '张三';
    let age = 18 
    function sayHello(){
      alert(`我的名字是${name}, 今年已经${age}岁了`)
    }
    function test2(){
      console.log(age);
      console.log(name);
      console.log(sayHello);
      console.log(this.gender);
      console.log(this.sayWelcome);
    }

    // 返回一：正常函数
    return{
      name,age,sayHello,test2
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
