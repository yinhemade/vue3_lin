<template>
    <h3>当前求和为{{sum}}</h3>
    <button @click="sum++">点我n++</button>
    <hr/>
    <h2>当前的x坐标{{point.x}} ,y坐标{{point.y}}</h2>

</template>

<script>
import {ref} from 'vue';
import sp from '../hook/showPoint'
export default {
    name:'ZuJian',
    setup(){
        const sum = ref(0)
        
        let point = sp()

        return {
            sum,point
        }
    },

}
</script>

<style>

</style>