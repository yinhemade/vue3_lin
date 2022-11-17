<template>
    <div class="son">
        <h3>我是Son组件（孙）,<span>{{name}}--{{price}}</span></h3>
    </div>
  </template>
  
  <script>
import { inject ,toRefs} from 'vue';

  export default {
    name:'MySon',
    setup(){
        let car = inject('car')
        return {...toRefs(car)}
    }
  }
  </script>
  
  <style>
    .son{
      background-color: olivedrab;
      padding: 10px;
    }
  </style>