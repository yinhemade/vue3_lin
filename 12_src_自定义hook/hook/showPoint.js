import {onBeforeUnmount,onMounted,reactive} from 'vue';
{/* <h2>当前的x坐标{{point.x}} ,y坐标{{point.y}}</h2> */}

export default function(){

    // 存储坐标数据
    const point = reactive({
        x:0,
        y:0
    })
//  获得坐标方法
    function fn(event){
        point.x = event.pageX
        point.y = event.pageY
        console.log("看看获取坐标功能是否缺失",point.x, point.y);
    }
// 实现展示坐标的生命周期的钩子
    onMounted(()=>{
        window.addEventListener('click', fn)
    })
    onBeforeUnmount(()=> window.removeEventListener('click', fn))

    return point;
}