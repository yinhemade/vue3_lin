<template>
    <h3>当前求和为: {{sum}}</h3>
    <button @click="sum++">sum++</button>
    <h4>姓名: {{name}}</h4>
    <h4>年龄: {{age}}岁</h4>
    <h4>工资：{{a.b.salary}} K</h4>
    <button @click="age+=1">点我加一岁</button>
    <button @click="name+=1">点我改个名</button>
    <button @click="a.b.salary+=3">点我加工资</button>


</template>

<script>
import { reactive, readonly, ref, shallowReadonly, toRefs} from 'vue';

export default {
    name:'ZuJian',
    setup(){
        let sum = ref(1)
        let person = reactive({
            name:'张三',
            age:26,
            a:{
                b:{
                    salary:20
                }
            }
        })
        // sum = readonly(sum)
        // sum = shallowReadonly(sum)
        // person = readonly(person)
        // person = shallowReadonly(person)//浅层数据不能改（name，age），深层数据（salary）可以改
        
        return {
            ...toRefs(person),sum

        }
    }
    

}
</script>

<style>

</style>