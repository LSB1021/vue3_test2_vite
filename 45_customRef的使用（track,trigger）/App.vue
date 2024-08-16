<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import useMsgRef from './useMsgRef';

	//使用Vue提供的默认red定义响应式数据，数据一变，页面就更新
	// let msg = ref('你好')

	//使用useMsgRef定义一个响应式数据且有延迟效果
	let {msg} = useMsgRef('lll',1000)

	
</script>

<style scoped>
	.app{
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
</style>