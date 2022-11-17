<template>
    <h3>当前求和为{{sum}}</h3>
    <button @click="sum++">点我n++</button>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';

export default {
    name:'ZuJian',
    setup(){
        const sum = ref(0)

// 通过组合式API的形式使用生命周期钩子
// beforeCreate\created 这两个没有提供组合式API的生命周期钩子
        onBeforeMount(()=> console.log('____ onBeforeMount ____'))
        onMounted(()=> console.log('____ onMounted ____'))
        onBeforeUpdate(()=> console.log('____ onBeforeUpdate ____'))
        onUpdated(()=> console.log('____ onUpdated ____'))
        onBeforeUnmount(()=> console.log('____ onBeforeUnmount ____'))
        onUnmounted(()=> console.log('____ onUnmounted ____'))

        return {
            sum
        }
    },
    // 通过配置项形式使用生命周期钩子
    //#region 
    /* beforeCreate(){
        console.log('___beforeCreate____');
    },
    created(){
        console.log('_____created_____');
    },
    beforeMount(){
        console.log('_____beforeMount_____');
    },
    mounted(){
        console.log('_____mounted_____');
    },
    beforeUpdate(){
        console.log('_____beforeUpdate_____');
    },
    updated(){
        console.log('_____updated_____');
    },
    beforeUnmount(){
        console.log('_____beforeUnmount_____');
    },
    unmounted(){
        console.log('_____unmounted_____');
    } */
    //#endregion
    

}
</script>

<style>

</style>