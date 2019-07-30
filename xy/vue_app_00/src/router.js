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
import Fujin from "./components/xiangyu/Fujin.vue"
import Park from "./components/xiangyu/Park.vue"
import city from "./components/xiangyu/city.vue"
import mypage from "./components/xiangyu/mypage.vue"
import login from "./components/xiangyu/login.vue"
import rent_sharing_list from "./components/xiangyu/rent_sharing_list.vue"
import Park01 from "./components/xiangyu/Park01.vue"
import park02 from "./components/xiangyu/park02.vue"
import guanzhu from "./components/xiangyu/guanzhu.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Home',component:Home},
    {path:'/Fuwu',component:Fuwu},
    {path:'/SpeArea',component:SpeArea},
    {path:'/Story',component:Story},
    {path:'/Lookup',component:Lookup},
    {path:'/Room',component:Room},
    {path:'/Homezz',component:Homezz},
    {path:'/Fujin',component:Fujin},
    {path:'/Park',component:Park},
    {path:'/city',component:city},
    {path:'/mypage',component:mypage},
    {path:'/login',component:login},
    {path:'/rent_sharing',component:rent_sharing_list},
    {path:'/park01',component:Park01},
    {path:'/park02',component:park02},
    {path:'/guanzhu',component:guanzhu},

  ]
})

