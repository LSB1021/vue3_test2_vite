<template>
	<div class="outer">
		<h2>我是App组件</h2>
		<Suspense>
			<template #default>
				<Child/>
			</template>
			<template #fallback>
				<h2>加载中............</h2>
			</template>

		</Suspense>
	</div>
</template>

<script setup lang="ts">
	import { Suspense } from 'vue';
	import Child from './Child.vue';

</script>

<style scoped>
	.outer{
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
</style>