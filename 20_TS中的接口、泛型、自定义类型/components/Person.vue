<template>
    <div class="person">

    </div>
</template>

<script lang="ts" setup>
    import {type PersonInter,type Persons} from '@/types/index'

    // let person:PersonInter = {id:'asdasd01',name:'张三',age:60}

    let personList:Persons = [
        {id:'asdasd01',name:'张三',age:60},
        {id:'asdasd02',name:'李四',age:18},
        {id:'asdasd03',name:'王五',age:5},
    ]


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