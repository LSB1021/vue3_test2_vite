<template>
    <div class="person">
        <h1>情况三：监视reactive定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {ref,reactive,watch} from 'vue'
    //数据
    let person = reactive({
        name:'张三',
        age:18
    })

    //方法
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person,{name:'李四',age:99999})
    }

    /* 监视：情况三：监视【reactive】定义的【对象类型】数据，且默认开启深度监视 */
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue);
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