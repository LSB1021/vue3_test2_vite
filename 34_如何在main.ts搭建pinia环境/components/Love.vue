<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
        <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
    import {reactive} from 'vue'
    import axios from 'axios';
    import {nanoid} from 'nanoid'

    let talkList = reactive([
        {id:'sfaasd01',title:'你今天有点怪，哪里怪？怪好看的！'},
        {id:'sfaasd02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id:'sfaasd03',title:'心里给你留了一块地，我的死心塌地'},
    ])

    async function getLoveTalk(){
        //发请求，下面的写法为连续解构赋值+重命名
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串包装为一个对象
        let obj = {id:nanoid(),title}
        //放到数组中
        talkList.unshift(obj)
    }
</script>

<style>
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>