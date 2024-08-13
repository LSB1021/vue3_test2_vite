<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {ref,reactive,toRefs,toRef} from 'vue'

    let person = reactive({
        name:'张三',
        age:18
    })

    // let {name,age} = toRefs(person) 
    // console.log(name);
    // console.log(age);
    // console.log(toRefs(person));
    //reactive响应式对象解构赋值的属性不是响应式的了，
    //可以使用toRefs()方法把解构赋值的属性都设为响应式ref(name),ref(age)
    //toRefs()方法相当于值传递，person内的属性将其变为ref响应式，而解构赋值的name和age为引用传递
    // toRef(person,'age')
    //toRef()把对象中的某个属性拿出来变为响应式

    const changeName = ()=>{
        person.name += '~'
    }

    const changeAge = ()=>{
        person.age += 1
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