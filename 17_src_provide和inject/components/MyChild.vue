<template>
    <div class="child">
        <h3>我是Child组件(子),<span>{{name}}--{{price}}</span></h3>
        <MySon/>
    </div>
  </template>
  
  <script>
import { inject ,toRefs} from 'vue';

import MySon from './MySon.vue';
  export default {
    name: "MyChild",
    components: { MySon },
    setup(){
        let car = inject('car')
        return {...toRefs(car)}
    }
}
  </script>
  
  <style>
    .child{
      background-color: skyblue;
      padding: 10px;
    }
  </style>