<template>
  <h2 ref="title">你好</h2>
  <button @click="showLog">测试</button>
  <Person ref="ren"/>
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let ren = ref()
  let title = ref()

  function showLog(){
      // console.log(title.value);
      console.log(ren.value);
  }

  defineOptions({name:'app'})
</script>

