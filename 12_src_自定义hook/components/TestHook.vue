<template>
    <hr style=" height:2px;border:none;border-top:2px dotted #185598;" />
    <hr style=" height:2px;border:none;border-top:2px dotted #185598;" />
  <h2>我是TestHook</h2>
  <h2>当前的x坐标{{point.x}} ,y坐标{{point.y}}</h2>
</template>

<script>
import showPoint from '@/hook/showPoint';

export default {
    name:'TestHook',
    setup(){
        let point = showPoint()
        return {point}
    }
}
</script>

<style>

</style>