<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{person.car.c2}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {reactive,watch} from 'vue'

    //数据
    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    })

    //方法
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changeC1(){
        person.car.c1 = '奥迪'
    }
    function changeC2(){
        person.car.c2 = '大众'
    }
    function changeCar(){
        person.car = {c1:'雅迪',c2:'艾玛'}
    }

    /* 监视：情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式 */
    //为了能够监视某个对象内的非对象属性值，可以使用箭头函数返回该属性
    /* watch(()=> person.name,(newValue,oldValue)=>{
        console.log('person.name变化了',newValue,oldValue);
    }) */

    //这里person.car 可以直接写，也能写函数返回型的，更推荐写函数，写完函数可以通过deep配置使内属性和外整体都能被监视到
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue);
    })

</script>


<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin:0 5px;
    }
</style>