<template>
    <div ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
       
        <!--合租list-->
         <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
            <div v-for="(item,i) of list":key="i" class="flex_around list">
                <img :src="`http://127.0.0.1:3000/img/`+item.img_url1" class="repeat">
                <div style="width:199.55px;">
                    <!--title-->
                    <div class="lit_font">
                        <span v-text="item.rent_share"></span> <span>|</span> <span v-text="item.village"></span><span v-text="item.bedroom"></span>
                    </div>
                    <!--where-->
                    <div>
                        <span v-text="item.address" class="little_text address"></span>
                    </div>
                    <!--小标签  写死-->
                    <div>
                        <span class="small_tag" style="margin:8px">相寓好房</span>
                        <span class="small_tag">随之看房</span>
                    </div>
                    <!--money 户型 平米 朝向（没有为空）-->
                    <div class="flex_between">
                        <div>
                            <span v-text="item.price" class=" money"></span>
                            <span class="month">元/月</span>
                        </div>
                        <div>
                            <span class="little_text">{{item.housetype}} | {{item.area}}m²</span>
                            <!--户型 平米 朝向-<span v-if="item.orient!='--'" class="little_text"> | {{item.orient}}</span>-->
                        </div>
                        
                    </div>
                </div>
            </div>
         </mt-loadmore>
        <!--推荐-->
        <div class="tuijian" id="searchBar">
            <img src="../resource/star.png">
            <span class="small_font">推荐</span>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[],
                pno:0,
                ps:5,
                has_log:0,
                allLoaded:false,//可以进行上拉
                isAutoFill:false,//是否自动触发上拉函数
                wrapperHeight:0,
                courrentPage:0
            }
        },
        created(){
            //this.loadFrist();
                var url="rentShare";
                this.pno++;
                var obj={pno:this.pno,pageSize:this.ps}
                this.axios.get(url,{params:obj}).then(result=>{
                    //console.log(result);
                    var lists=this.list.concat(result.data.data);
                    this.list=lists;
                })
        },
        mounted(){
             window.addEventListener('scroll', this.handleScroll);
             this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        },
        methods:{
            //下拉刷新
           /* loadTop(){
                this.loadFrist()
            },*/
            //上拉加载
            loadBottom(){
                this.loadMore()
            },
            //下拉刷新加载
            loadMore(){
                var url="rentShare";
                this.pno++;
                var obj={pno:this.pno,pageSize:this.ps}
                this.axios.get(url,{params:obj}).then(result=>{
                    //console.log(result);
                    var lists=this.list.concat(result.data.data);
                    if(this.pno>4){
                        this.allLoaded =true;//若数据以获取完毕
                    }
                   this.$refs.loadmore.onBottomLoaded();
                    this.list=lists;
                })
            },
            handleScroll(){//给window添加一个滚动监听事件
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop =document.querySelector("#searchBar").offsetTop;
                if(scrollTop<=1000){
                    offsetTop =50 -Number(scrollTop);
                    document.querySelector('#searchBar').style.bottom = offsetTop+'px';
                }else{
                    document.querySelector('#searchBar').style.bottom = '25px';
                }
            }
        }
    }
</script>
<style>
    @import '../css/common.css';
</style>
<style scoped>
    .little_text{
        margin:5px 0;
    }
    .list{
        border-bottom:1px solid #efefef;
        height:130px;
    }
    .flex_around .repeat{
        width:35%;
        height:74%;
        vertical-align:top;
        border-radius:3px;
    }
    .flex_around .lit_font>span{
        margin-right:10px;
        font-weight:bold
    }
    .address{
        background:url("../resource/weizhi.png") no-repeat left center;
        background-size:12px 12px;
        padding-left:18px;
    }
    .money{
        font-weight:bold;
        font-size:18px;
        color:#f00;
        margin-right:3px;
    }
    .month{
        font-size:12px;
        color:#f00;

    }
    .tuijian{
        position:absolute;
        bottom:35px;
        right:8px;
        width:60px;
        height:60px;
        border-radius:50%;
        background-image:linear-gradient(to bottom,#906bc8,#f0f);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .tuijian>img{
        width:25px;
        height:25px;
    }
    .tuijian>.small_font{
        color:#fff;
    }

</style>