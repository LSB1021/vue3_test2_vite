<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
        <li v-for="news in newsList" :key="news.id">
          <router-link :to="{name:'newsDetail',query:{...news}}">{{ news.title }}</router-link>
          <!-- 使用params参数一定要注意提前在router设置的path路径定义好占位符 -->
        </li>
    </ul>
    <!-- 展示区 -->
     <div class="news-content">
      <router-view></router-view>
     </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from 'vue'

  let newsList = reactive([
    {id:'asfasf01',title:'很好的抗癌食物',content:'西兰花'},
    {id:'asfasf02',title:'如何一夜暴富',content:'中彩票'},
    {id:'asfasf03',title:'震惊！某男子深夜竟然！',content:'买菜'},
    {id:'asfasf04',title:'好消息好消息！',content:'休息'}
  ])
</script>

<style scoped>
    /* 新闻 */
    .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    }
    .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
    }
    .news li::marker{
      color: #64967E;
    }
    .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
    }
    .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
    }
</style>