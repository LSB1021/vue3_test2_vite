// 创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter,createWebHashHistory } from "vue-router";
//引入路由组件
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";

//第二步：创建路由器
const router = createRouter({
    history:createWebHashHistory(), //路由器的工作模式
    routes:[ //一个一个的路由规则
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/news',
            component:News
        },
    ]
})


//暴露出去Router
export default router
