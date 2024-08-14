<template>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  import {ref,onMounted,onBeforeMount} from 'vue'

  let isShow = ref(true)
  
  onBeforeMount(()=>{
        console.log('父---挂载前');
    })

    // 子组件挂载完毕父组件才挂载完毕
  onMounted(()=>{
        console.log('父---挂载完毕');
    })

</script>

