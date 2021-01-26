import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Home from "../components/Home.vue";
import echart from "../components/echart.vue";

export const routes= [
    { path: '/',name:'首页',component: Home, },
    { path: '/foo',name:'测试' , component: HelloWorld },
    { path: '/fo2o',name:'测试2' , component: HelloWorld },
    { path: '/echart',name:'echart' , component: echart },
  ]
// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址c
  routes
});

