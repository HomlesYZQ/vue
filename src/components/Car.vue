<template>
<div class="shopcar">
    <div class="goods-list">
        <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getgoodsselect[item.id]" @change="selectedchange(item.id,$store.getters.getgoodsselect[item.id])"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h1>{{item.title}}</h1>
                        <p>
                            <span class="price">{{item.sell_price}}</span>
                            <numbox :init="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></numbox>
                            <a href="javascript:;" @click.prevent="deleted(item.id,index)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <div class="left">
                    <p>总计（不含运费）</p>
                    <p>已勾选商品<span class="red">{{$store.getters.getgoodscontandamount.count}}</span>件，总价<span class="red">￥{{$store.getters.getgoodscontandamount.amount}}</span></p>
                </div>
                <mt-button type="danger">去结算</mt-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Numbox from '@/components/child/Shopcarnumbox'
import axios from 'axios'
export default {
    components:{
        Numbox
    },
    data() {
        return {
            goodslist:[]
        }
    },
    mounted() {
        
    },
    created() {
        var idarr=[]
        this.$store.state.car.forEach(item => {
            idarr.push(item.id)
        });
        if(idarr.length<=0){
            return;
        }
        axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idarr.join(','))
        .then((res)=>{
            console.log(res)
            this.goodslist=res.data.message
        })
    },
    methods: {
        deleted(id,index){
            this.goodslist.splice(index,1)
            this.$store.commit('romovefromcar',id)
        },
        selectedchange(id,val){
            this.$store.commit('updategoodsselect',{id,selected:val})
        }
    },
}
</script>
<style scoped>
.shopcar{
    background: #fff;
    overflow: hidden;
}
.mui-card-content-inner{
    display: flex;
    align-items: center;
}
.goods-list img{
    width: 60px;
    height: 60px;

}
h1{
    font-size: 13px;
}
.price{
    color: red;
    font-weight: bold;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.mui-card-content-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.red{
    color: red;
    font-weight: bold;
}
</style>
