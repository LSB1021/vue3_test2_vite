<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup>
    import {ref,reactive} from 'vue'
    defineOptions({name:'Person'})

    let car = ref({brand:'奔驰',price:100})

    let sum = ref(0)

    function changePrice(){
        car.value.price += 10
    }
    function changeSum(){
        sum.value +=1
    }

    // reactive的局限性：重新分配一个对象的时候，会失去响应式（改响应式对象内部的属性没有问题，依旧是响应式）
    function changCar(){
        // let car1 = {brand:'宝马',price:200}
        // Object.assign(car,car1)  
        //如果想要使用reactive也能重新分配对象，可以使用Object.assign()方法

        //因为是reactive的局限，当使用ref的时候就不会有这个问题
        car.value = {brand:'宝马',price:200}
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