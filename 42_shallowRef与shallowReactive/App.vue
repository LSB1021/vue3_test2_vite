<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<h2>名字为：{{ person.name }}</h2>
		<h2>年龄为：{{ person.age }}</h2>
		<h2>汽车为：{{ car }}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changeName">修改名字</button>
		<button @click="changePerson">修改整个人</button>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
	</div>
</template>

<script setup lang="ts">
	import {ref,shallowRef,shallowReactive, reactive} from 'vue'

	let sum = shallowRef(0)
	let person = shallowRef({
		name:'张三',
		age:18
	})
	let car = shallowReactive({
		brand:'奔驰',
		options:{
			color:'红色',
			engine:'V8'
		}
	})
	function changeSum(){
		sum.value+=1
	}
	function changeAge(){
		person.value.age += 10
	}
	function changeName(){
		person.value.name = '李四'
	}
	function changePerson(){
		person.value = {name:'tony',age:100}
	}

	function changeBrand(){
		car.brand = '宝马'
	}
	function changeColor(){
		car.options.color = '紫色'
	}
	function changeEngine(){
		car.options.engine = 'V12'
	}

</script>

<style scoped>
	.app{
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
</style>