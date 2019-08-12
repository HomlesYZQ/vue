<template>
<div class="goodsinfo-container">
    <transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <swip :lunbolist="slide1" :isfull="false"></swip>
            </div>
        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-header">{{slide2.title}}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="price">
                    市场价：<del>{{slide2.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now">{{slide2.sell_price}}</span>

                </p>
                <p>
                    购买数量：<number @getcount='getselect' :max='slide2.stock_quantity'></number>
                </p>
                <p>
                    <mt-button type='primary' size='small'>立即购买</mt-button>
                    <mt-button type='danger' size='small' @click="addToShopCar">加入购物车</mt-button>
                </p>
            </div>
        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>
                    商品货号：{{slide2.goods_no}}
                    
                </p>
                <p>
                    库存情况：{{slide2.stock_quantity}}
                </p>
                <p>
                    上架时间：{{slide2.add_time | dateFormat}}
                </p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
            <mt-button type='danger' size='large' plain @click="goComment(id)">商品评论</mt-button>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import Swip from '@/components/child/Swip'
import Number from '@/components/child/Numberbox'
export default {
    data() {
        return {
            id:this.$route.params.id,
            slide1:[],
            slide2:[],
            ballFlag:false,
            selectcont:1
        }
    },
    components:{
        Swip,
        Number
    },
    methods: {
        getshoplist(){
            axios.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id)
            .then((res)=>{
                // console.log(res)
                this.slide2=res.data.message[0]
            })
            .catch((err)=>{

            })
        },
        getlunboimg(){
            axios.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id)
            .then((res)=>{
                // console.log(res)
                res.data.message.forEach(item => {
                    item.img=item.src
                });
                this.slide1=res.data.message
            })
            .catch((err)=>{

            })
        },
        goDesc(id){
            // console.log(id)
            this.$router.push({name:'Desc',params:{ id }});
            
        },
        goComment(id){
            this.$router.push({name:'Comment',params:{ id }});
        },
        addToShopCar(){
            this.ballFlag=!this.ballFlag

            var goodsinfo={
                id:this.id,
                count:this.selectcont,
                pirce:this.slide2.sell_price,
                selected:true
            }
            this.$store.commit('addtocar',goodsinfo)
        },
        beforeEnter(el){
            el.style.transform='translate(0,0)'
            el.style.opacity = 1;
            // console.log(el)
        },
        enter(el,done){
            el.offsetWidth;

            const ballposition = this.$refs.ball.getBoundingClientRect();
            const badgeposition = document.getElementById('badge').getBoundingClientRect()
            const xDist = badgeposition.left - ballposition.left
            const yDist = badgeposition.top - ballposition.top
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all .5s cubic-bezier(.4,-0.3,1,.68)"
            // console.log(el)
            el.addEventListener('transitionend',done)
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag
        },
        getselect(count){
            this.selectcont=count
            console.log(this.selectcont)
        }
    },
    created() {
        this.getshoplist()
        this.getlunboimg()
    },
}
</script>
<style scoped>
.goodsinfo-container{
    background: #eee;
    overflow: hidden;
}
.now{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin: 15px 0;
}
.ball{
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    z-index: 99;
    background-color: red;
    top: 390px;
    left: 150px;
}
</style>
