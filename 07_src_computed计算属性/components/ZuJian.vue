<template>
    <label for="f">姓名: </label>
        <input id="f" type="text" v-model="person.firstName"><br/>
    <label for="l">年龄: </label>
        <input id="l" type="text" v-model="person.lastName">
    <h5>全名：{{person.fullName}}</h5>
    <label for="f">全名: </label>
        <input id="f" type="text" v-model="person.fullName">
</template>

<script>
import {reactive} from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name:'ZuJian',
    setup(){
        const person= reactive({
            firstName:'张',
            lastName:'三丰'
        })
        person.fullName = computed({
            get(){
                return person.firstName +'--'+person.lastName
            },
            set(value){
                const arr = value.split('--')
                person.firstName = arr[0]
                person.lastName = arr[1]
            }
        })

        return {
            person,
        }
    }
    

}
</script>

<style>

</style>