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
                    // path:'detail/:id/:title/:content?',
                    path:'detail',
                    component:Detail,

                    //第一种写法：将路由收到的所有（params）参数（第一种写法只能处理params参数）作为props传给路由组件
                    // props:true

                    //第二种写法：函数写法，可以自己决定将什么作为props给路由组件(函数参数为route，能获取很多信息)
                    props(route){
                        return route.query
                    }

                    //第三种写法：对象写法（用的很少，基本不用，记住上面两种写法）
                    /* props:{
                        a:100,b:100,c:100
                    } */


                }
            ]
        },
    ]
})


//暴露出去Router
export default router
