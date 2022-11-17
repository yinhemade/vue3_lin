<template>
    <div class="son">
        <h3>我是Son组件（孙）</h3>
        <DiglogBar/>
    </div>
  </template>
  
  <script>
import DiglogBar from './DiglogBar.vue';
  export default {
    name: "MySon",
    components: { DiglogBar }
}
  </script>
  
  <style>
    .son{
      background-color: olivedrab;
      padding: 10px;
    }
  </style>