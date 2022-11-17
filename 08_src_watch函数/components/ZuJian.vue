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
import { reactive, ref, watch } from 'vue';

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
        // 1.监视ref定义的一个响应式数据
        // watch(sum,(newvalue,oldvalue) => console.log('sum 变了',newvalue,oldvalue))
        // 2.监视ref定义的多个响应式数据
        /**
         * watch(
            [sum,msg],
            (newvalue,oldvalue) => console.log('有人变了',newvalue,oldvalue),
            {immediate:true}) 
            */
        //    3.    AA监视reactive定义的对象时，两个值均为新的值没有旧的
                //  BB监视reactive定义的对象时，默认深度监视 deep配置无效
        // watch(person,
        // (newval,newval2)=>{console.log('persom变了',newval, newval2);},
        // {deep:false})//此处deep配置无效


//          4.监视reactive定义对象的某个属性时，需要用函数返回，(一般直接箭头函数) deep有效
/** 
        watch(
            ()=>person.age,
            (newval,oldval)=>console.log('你有老了一岁',newval, oldval)
        )*/
        // 5.监视reactive定义对象的某 些 属性时，需要用数组包装，函数返回，(一般直接箭头函数) deep有效

        watch(
            [()=>person.age,()=>person.name],
            (newval,oldval)=>console.log('你有老了一岁',newval, oldval)
        )


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