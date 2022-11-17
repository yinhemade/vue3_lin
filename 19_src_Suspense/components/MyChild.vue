<template>
    <div class="child">
        <h3>我是Child组件(子)</h3>
        {{n}}
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
  export default {
    name: "MyChild",
    /* setup(){
      let n = ref(0)
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({n})
        },2000)
      })
    } */
    async setup(){
      let n = ref(0)
      let p = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({n})
        },2000)
      })
      return await p
    }
}
  </script>
  
  <style>
    .child{
      background-color: skyblue;
      padding: 10px;
    }
  </style>