<template>
  <input 
    type="text" 
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['ming','mima'])
  const emit = defineEmits(['update:ming','update:mima'])
</script>
<!-- 
  (<HTMLInputElement>$event.target).value

  括号内的<HTMLInputElement>$event.target为断言，断言里面的值为HTML里输入的元素，
  大概也可以写成   $event.target as HTMLInputElement
-->
<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>