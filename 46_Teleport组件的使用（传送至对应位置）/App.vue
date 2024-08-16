<template>
	<div class="outer">
		<h2>我是App组件</h2>
		<img src="https://pic4.zhimg.com/v2-d2295c635ca606e5704752662a870b7d_r.jpg?source=1940ef5c" alt="">
		<br>
		<Modal/>
	</div>
</template>

<script setup lang="ts">
	import Modal from './Modal.vue';

</script>

<style scoped>
	.outer{
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 5px;
		width: 400px;
		height: 400px;
		filter: saturate(200%);
	}
	img{
		width: 270px;
	}
</style>