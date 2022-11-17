<template>
    <h3>当前求和为{{sum}}</h3>
    <button @click="sum++">点我n++</button>
    <hr/>
    <h3>当前消息为： {{msg}}</h3>
    <button @click="msg+='!'">点我n++</button>
    <hr/>
    <h3>个人信息 </h3>
    <h4>姓名: {{person.name}}</h4>
    <h4>年龄: {{person.age}}岁</h4>
    <h4>工资：{{person.a.b.salary}} K</h4>
    <button @click="person.age+=1">点我加一岁</button>
    <button @click="person.name+=1">点我改个名</button>
    <button @click="person.a.b.salary+=1">点我加工资</button>


</template>

<script>
import { ref, watch} from 'vue';

export default {
    name:'ZuJian',
    setup(){
        const sum = ref(0)
        const msg = ref('你好啊')
        const person = ref({
            name:'张三',
            age:26,
            a:{
                b:{
                    salary:20
                }
            }
        })
        // 监视的普通数据，如果写sum.value，就变成监视数字0了
        watch(sum, (newval, oldval)=>console.log(newval, oldval))

        // 此处的监视无效，因为这是ref定义的,是refimp对象包装的，默认不开启深度监视，
        // 数据存在person的value属性中，而这里的value是个对象，对象内的变化，不开深度检测不到，
        // 所以需要开启deep
        watch(person, (newval, oldval)=>console.log(newval, oldval),{deep:true})
       


        return {
            sum,
            msg,
            person
        }
    }
    

}
</script>

<style>

</style>