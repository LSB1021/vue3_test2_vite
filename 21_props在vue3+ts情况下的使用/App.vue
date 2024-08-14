<template>
  <Person  :list="personList"/>
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  import {ref,reactive} from 'vue'
  import {type Persons} from './types'
  
  let personList = reactive<Persons>([
    {id:'asfasf01',name:'张三',age:18},
    {id:'asfasf02',name:'李四',age:20},
    {id:'asfasf03',name:'王五',age:22,x:9},
  ])

</script>

