<template>
    <slot name="qwe">若没有东西，显示我</slot>

    <h3>姓名: {{person.name}}</h3>
    <h3>年龄: {{person.age}}</h3>
    <!-- <h3 v-if="nihao">{{nihao}}</h3>   -->
    <button @click="sayHello">点击展示信息</button>&nbsp;
    <button @click="test1">app的自定义事件</button>&nbsp;
</template>

<script>
import {reactive} from '@vue/reactivity';
export default {
    name:'ZuJian',
    props:['nihao'],
    emits:['hi'],
    setup(props, context) {
        console.log('props', props);
        console.log('context', context);
        console.log('@@@context', context.slots);
        const person = reactive({
            name: "张三",
            age: 18,
        });
        function sayHello() {
            alert(`${props.nihao}! 我的名字是${person.name}, 今年已经${person.age}岁了`);
            // alert(`${context.attrs.nihao}! 我的名字是${person.name}, 今年已经${person.age}岁了`);
        }
        function test1(){
            context.emit('hi', person.name)
        }

        return {
            person,
            sayHello,
            test1,

        };
    },

}
</script>

<style>

</style>