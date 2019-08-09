<template>
<div class="goods-list">
    <router-link :to="'/shou/shop/'+item.id" class="goods-item" v-for="(item,index) in shoplist" :key="index" tag="div">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="now">{{item.sell_price}}</span>
                <span class="old">{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
        </div>
    </router-link>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            pageindex:1,
            shoplist:[]
        }
    },
    methods: {
        getShop(){
            axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex)
            .then((res)=>{
                console.log(res)
                this.shoplist=res.data.message
            })
            .catch((err)=>{

            })
        }
    },
    created() {
        this.getShop()
    },
}
</script>
<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-around;
}
.goods-list .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.goods-list .goods-item img{
    width: 100%;
}
.goods-list .goods-item .title{
    font-size: 14px;
}
.goods-list .goods-item .info{
    background: #eee;
}

.goods-list .goods-item .info .price .now{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
.goods-list .goods-item .info .price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.goods-list .goods-item .info .sell{
    display: flex;
    justify-content: space-between;

}
p{
    margin: 0;
    padding: 5px;
}
</style>
