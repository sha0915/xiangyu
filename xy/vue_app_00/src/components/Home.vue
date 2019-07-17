<template>
<div class="xy_container">
   <div class="page_wrap">
      <!--面板 1父面板 5子面板-->
      <mt-tab-container v-model="active">
         <!--首页面板-->
         <mt-tab-container-item id="index">
            1
         </mt-tab-container-item>
         <!--地图找房面板-->
         <mt-tab-container-item id="maps">
            2
         </mt-tab-container-item>
         <!--业主委托面板-->
         <mt-tab-container-item id="entru">
            <yezhu></yezhu>
         </mt-tab-container-item>
         <!--消息面板-->
         <mt-tab-container-item id="message">
            4
         </mt-tab-container-item>
         <!--我的面板-->
         <mt-tab-container-item id="mine">
            5
         </mt-tab-container-item>
      </mt-tab-container>
      <!--底部导航栏-->
      <mt-tabbar v-model="active" fixed>
         <mt-tab-item id="index">
            <tabbaricon :selectedImage="require('../assets/little/index.png')" :normalImage="require('../assets/little/index2.png')"  :focused="active=='index'"></tabbaricon>
            <span>首页</span>
         </mt-tab-item>
         <mt-tab-item id="maps">
            <tabbaricon :selectedImage="require('../assets/little/maps.png')" :normalImage="require('../assets/little/maps2.png')" :focused="active=='maps'"></tabbaricon>
            <span>地图找房</span>
         </mt-tab-item>
         <mt-tab-item id="entru">
            <tabbaricon :selectedImage="require('../assets/little/entru.png')" :normalImage="require('../assets/little/entru2.png')" :focused="active=='entru'"></tabbaricon>
            <span>业务委托</span>
         </mt-tab-item>
         <mt-tab-item id="message">
            <tabbaricon :selectedImage="require('../assets/little/message.png')" :normalImage="require('../assets/little/message2.png')" :focused="active=='message'"></tabbaricon>
            <span>消息</span>
         </mt-tab-item>
         <mt-tab-item id="mine">
            <tabbaricon :selectedImage="require('../assets/little/mine.png')" :normalImage="require('../assets/little/mine2.png')" :focused="active=='mine'"></tabbaricon>
            <span>我的</span>
         </mt-tab-item>
      </mt-tabbar>
   </div>
</div>
</template>
<script>
   import TabBarIcon from "./xiangyu/TabBarIcon.vue";
   import Yezhu from "./xiangyu/Yezhu.vue";
   export default {
      data(){
         return {
            active:"index",
            
         }
      },
      methods:{
         
      },
      components:{
         "tabbaricon":TabBarIcon,
         "yezhu":Yezhu,
      }
   }
</script>
<style>@import './css/common.css';</style>
<style>
   *{
      margin:0;
      padding:0;
   }
   .xy_container{
      overflow:hidden !important;
   }
   .page-wrap{
      overflow:auto;/*溢出显示滚动条*/
      padding-bottom:45px !important;
   }
   /*修改tabbar默认的颜色*/
   .mint-tab-item-label span{
      font-family:"隶书" !important;
   }
   .mint-tabbar>.mint-tab-item{
      color:#999 !important;
   }
   .mint-tabbar>.mint-tab-item.is-selected{
      color:#906bc8 !important;
      background-color:transparent !important;
   }
</style>