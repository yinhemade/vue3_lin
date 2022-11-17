<template>
    <h3>个人信息 {{person}}</h3>
    <h4>姓名: {{name}}</h4>
    <h4>年龄: {{age}}岁</h4>
    <h4>工资：{{salary}} K</h4>
    <button @click="age+=1">点我加一岁</button>
    <button @click="name+=1">点我改个名</button>
    <button @click="salary+=3">点我加工资</button>


</template>

<script>
import { reactive, toRef, toRefs} from 'vue';

export default {
    name:'ZuJian',
    setup(){
        const person = reactive({
            name:'张三',
            age:26,
            a:{
                b:{
                    salary:20
                }
            }
        })
        // const name = toRef(person,'name')
        
    
        return {
            person,
            // name,
            ...toRefs(person),
            salary:toRef(person.a.b,'salary')

        }
    }
    

}
</script>

<style>

</style>