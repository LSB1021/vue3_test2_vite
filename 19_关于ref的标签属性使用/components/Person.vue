<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title">江苏</h2>
        <h3>昆山</h3>
        <button @click="showLog">点我输出h2的元素</button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {ref}  from 'vue'

    let title = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showLog(){
        console.log(title.value);
    }
    
    //vue中内置方法，可以定义暴露出去的值，可被父组件通过ref接收
    defineExpose({a,b,c})
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