<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
    export default {
        name:'Person',
    }
</script>


<script lang="ts" setup>
    import {ref} from 'vue'

    defineOptions({name:'Person'})
    //数据
    let name = ref('张三')
    let age = ref(18)
    let tel = '1388888888888'

    //方法
    function changeName(){
        name.value = '李四'
    }
    function changeAge(){
        age.value += 1
    }
    function showTel(){
        alert(tel)
    }
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