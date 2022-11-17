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
import { reactive, ref, watch, watchEffect} from 'vue';

export default {
    name:'ZuJian',
    setup(){
        const sum = ref(0)
        const msg = ref('你好啊')
        const person = reactive({
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


        // 回调里只要有就会启用监视
        watchEffect(()=>{
            const x1 = msg.value
            const x2 = person.name

            console.log('**2//2/*',x1,x2);
        })
       


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