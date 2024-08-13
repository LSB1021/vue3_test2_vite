<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏名字</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup>
    import {ref,reactive} from 'vue'
    defineOptions({name:'Person'})

    let car = reactive({brand:'奔驰',price:100})

    let games = reactive([
        {id:'asdasdas01',name:'荣耀'},
        {id:'asdasdas02',name:'⚪'},
        {id:'asdasdas03',name:'三国'},
    ])

    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    function changePrice(){
        car.price += 10
    }
    function changeFirstName(){
        games[0].name = '流星蝴蝶剑'
    }
    function changeObj(){
        obj.a.b.c = 999
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