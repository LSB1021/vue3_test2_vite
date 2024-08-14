<template>
  <div class="home">
    <img src="https://pic4.zhimg.com/v2-d2295c635ca606e5704752662a870b7d_r.jpg?source=1940ef5c" alt="">
  </div>
</template>

<script setup lang="ts">
    import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onActivated,onDeactivated,onBeforeUnmount,onUnmounted } from 'vue';

    console.log('创建');


    onBeforeMount(()=>{
        console.log("挂载前");
    })
    onMounted(()=>{
        console.log("挂载了");
    })
    onBeforeUpdate(()=>{
        console.log("更新前");
    })
    onUpdated(()=>{
        console.log("更新了");
    })
    onActivated(()=>{
        console.log("路由激活");
    })
    onDeactivated(()=>{
        console.log("路由失活");
    })
    onBeforeUnmount(()=>{
        console.log("卸载前");
    })
    onUnmounted(()=>{
        console.log("卸载了");
    })


</script>

<style scoped>
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    img{
        height: 90%;
    }
</style>