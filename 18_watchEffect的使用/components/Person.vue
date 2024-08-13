<template>
    <div class="person">
        <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
        <h2>当前水温为：{{temp}}℃</h2>
        <h2>当前水位为：{{height}}cm</h2>
        <button @click="changeTem">点我水温+10</button>
        <button @click="changeHeight">点我水位+10</button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {watch,ref,watchEffect} from 'vue'

    //数据
    let temp = ref(10)
    let height = ref(0)

    //方法
    function changeTem(){
        temp.value += 10
    }
    function changeHeight(){
        height.value += 10
    }

    //监视 ---watch实现
    /* watch([temp,height],(newValue)=>{
        // console.log(newValue);
        //从value中获取最新的水温(newTemp)，最新的水位(newHeight)
        let [newTemp,newHeight]  = newValue
        if(newTemp >= 60 || newHeight >= 80){
            console.log('给服务器发请求');
        }
    }) */

    //监视 ---watchEffect实现
    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('给服务器发请求');
        }
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