//引入路由组件
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//1.引入Exam01.vue组件
import Fuwu from "./components/xiangyu/Fuwu.vue"
//import tabbar from "./components/exam/tabbar.vue"
import Home from "./components/Home.vue"
import SpeArea from "./components/xiangyu/SpeArea.vue"
import Story from "./components/xiangyu/Story.vue"
import Lookup from "./components/xiangyu/Lookup.vue"
import Room from "./components/xiangyu/Room.vue"
import Homezz from "./components/xiangyu/Homezz.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Fuwu',component:Fuwu},
    {path:'/Home',component:Home},
    {path:'/SpeArea',component:SpeArea},
    {path:'/Story',component:Story},
    {path:'/Lookup',component:Lookup},
    {path:'/Room',component:Room},
    {path:'/Homezz',component:Homezz},

  ]
})
