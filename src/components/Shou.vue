<template>
  <div>
    <swip :lunbolist="datas" isfull="ture"></swip>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/shou/xinwen">
            <img src="@/assets/img/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/shou/imglist">
            <img src="@/assets/img/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/shou/shop">
            <img src="@/assets/img/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="@/assets/img/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="@/assets/img/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="@/assets/img/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swip from "@/components/child/Swip";
import axios from 'axios'

export default {
  name: "Shou",
  components:{
    Swip
  },
  data() {
    return {
      datas: []
      
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      axios
        .get(
          "http://www.liulongbin.top:3005/api/getlunbo?tdsourcetag=s_pcqq_aiomsg"
        )
        .then(res => {
          this.datas = res.data.message;
          // console.log(res.data.message);
        })
        .catch(err => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-grid-view.mui-grid-9{
  background: #fff;
  border: none
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
  width: 60px;
}
</style>
