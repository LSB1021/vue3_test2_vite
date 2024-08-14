// 创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
//引入路由组件
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Detail from '@/pages/Detail.vue';

//第二步：创建路由器
const router = createRouter({
    history:createWebHistory(), //路由器的工作模式
    routes:[ //一个一个的路由规则
        {
            name:'myHome',
            path:'/home',
            component:Home
        },
        {
            name:'myAbout',
            path:'/about',
            component:About
        },
        {
            name:'myNews',
            path:'/news',
            component:News,
            children:[
                {
                    name:'newsDetail',
                    path:'detail',
                    component:Detail
                }
            ]
        },
    ]
})


//暴露出去Router
export default router
