<template>
    <div id="d1" >
        <!--搜索框-->
        <div>
            <form action="javascript:void 0">
                <input type="search" placeholder="请输入小区/商圈/地铁站等" class="small_font" @keyup="show($event)" v-model="txtInput">
            </form>
            
            <span class="mid_font float_left" >取消</span>
        </div>
        <!--热门搜索-->
        <div class="flex_between lookup">
            <span class="title_font">热门搜索</span>
            <img src="../../assets/pic/gfnnplpg571515cc.jpg">
        </div>
        <!--热门内容-->
        <div class="hot_look">
            <span class="btn" v-for="(elem,i) of lookups":key="i" v-text="elem"></span>
        </div>
        <!--
            !--历史记录--
        <div class="flex_between history">
            <span class="title_font">历史记录</span>
            <img src="../resource/05.png">
        </div>
        !--历史内容--
        <div class="his_del">
            <img src="../resource/weizhi.png" >
            <span class="lit_font">天通苑</span>
        </div>
        -->
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                txtInput:"",
                lookups:["回龙观","望京","天通苑","西三旗","太阳宫"],
                history:[],
            }
        },
        updated() {
        },
        methods:{
            show(ev){
                if(ev.keyCode==13){
                   //将搜索数据添加到历史记录中
                   if(this.txtInput!=""){
                       this.history.push(this.txtInput);
                       //console.log(this.history);
                       //判断history中刚传入一个参数，则添加“历史记录标题”
                       if(this.history.length==1){
                           var frag=document.createDocumentFragment();
                           var html=`<div class="flex_between history">
                                        <span class="title_font">历史记录</span>
                                        <img src="../../assets/pic/gfnnplpg571515cc.jpg">
                                     </div>
                                     <div class="his_del">
                                        <img src="../resource/weizhi.png" >
                                        <span class="lit_font">${this.history[0]}</span>
                                    </div>`;
                            frag.appendChild(html);
                            var hgf=document.querySelectorAll("div")[1];
                             console.log(hgf);
                            hgf.appendChild(frag); 
                       }
                   }
                }
            }
            
        }
    }
</script>
<style>
    @import '../css/common.css';
</style>
<style scoped>
form{
    margin-right:20px;
    width:100%;
}
.float_left{
   position:absolute;
    top:15px;
    right:18px;
}
input{
    background:#ddd url("../../assets/pic/gfnnplpg571515cc.jpg") no-repeat 3% center;
    background-size:20px 20px;
    padding-left:35px;
    border:0;
    border-radius:5px;
    width:80%;
    height:30px;
    outline:0;
    
    caret-color:#906bc8;
}
.lookup,.history{margin-top:30px;}
.flex_between>img{
    width:30px;
    height:30px;
}
.hot_look{
    display:flex;
    justify-content:start;
    padding:10px;
    flex-wrap:wrap;
}
span.btn{
    color:#999;
    width:20%;
    margin-top:15px;
    margin-right:15px;
}
.his_del{
    padding:15px 5px;
    border-bottom:1px solid #ddd;
    margin-top:10px;
}
.his_del>img{
    width:15px;
    height:15px;
    margin-right:20px;
}
</style>