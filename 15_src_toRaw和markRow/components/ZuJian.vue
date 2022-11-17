<template>
    <h1>{{person}}</h1>
    <h3>当前求和为: {{sum}}</h3>
    <button @click="sum++">sum++</button>
    <h4>姓名: {{name}}</h4>
    <h4>年龄: {{age}}岁</h4>
    <h4>工资：{{a.b.salary}} K</h4>
    <h4 v-if="person.car">车辆信息 {{person.car}}</h4>
    <button @click="age+=1">点我加一岁</button>
    <button @click="name+=1">点我改个名</button>
    <button @click="a.b.salary+=3">点我加工资</button><br/>
    <button @click="showRawPerson">输出原始的person</button>
    <button @click="addCar">买车</button>
    <button @click="person.car.name='自行车'">换车</button>
    <button @click="reducePrice">车辆贬值</button>


</template>

<script>
import { reactive, toRaw, ref, toRefs, markRaw} from 'vue';

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
        function showRawPerson(){
            const p = toRaw(person)
            p.age++
        }
        function addCar(){
            let car = {name:'五菱',price:100000}
            person.car = markRaw(car)
        }
        function reducePrice(){
            person.car.price = 10
        }

        
        return {
            ...toRefs(person),sum,person,
            addCar,showRawPerson,reducePrice

        }
    }
    

}
</script>

<style>

</style>