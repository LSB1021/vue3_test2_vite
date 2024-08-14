<template>
  <div class="home">
    <img src="https://pic4.zhimg.com/v2-d2295c635ca606e5704752662a870b7d_r.jpg?source=1940ef5c" alt="">
  </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    /* onMounted(()=>{
        setTimeout(() => {
            //在此处编写一段代码，让路由实现跳转
            router.push({path:'/news'})
        }, 5000);
    }) */


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