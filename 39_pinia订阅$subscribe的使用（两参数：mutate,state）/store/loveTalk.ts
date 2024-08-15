import { defineStore } from "pinia";
import {reactive} from 'vue'
import axios from 'axios';
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
    actions:{
        async getTalk(){
            //发请求，下面的写法为连续解构赋值+重命名
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //把请求回来的字符串包装为一个对象
            let obj = {id:nanoid(),title}
            //放到数组中
            this.talkList.unshift(obj)
        }
    },
    //真正存储数据的地方
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})