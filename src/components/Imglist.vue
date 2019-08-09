<template>
  <div>
    <!-- 顶部tab栏 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="(item,index) in titles" :key='index' @click="tab(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="(item,index) in imglist" :key="index" :to="'/shou/imglist/'+item.id">
        <img v-lazy="item.img_url">
        <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>
<script>
import mui from '@/assets/mui/js/mui.min.js'
import axios from 'axios'
export default {
    data() {
        return {
            titles:[],
            imglist:[]
        }
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
      
    },
    created() {
      this.gettitle()
      this.getimgs(0)
    },
    methods: {
      gettitle(){
          axios.get('http://www.liulongbin.top:3005/api/getimgcategory')
          .then((res)=>{
              // console.log(res)
              this.titles=res.data.message
              this.titles.unshift({id:0,title:'全部'})
          })
          .catch((err)=>{

          })
      },
      getimgs(cateid){
        axios.get('http://www.liulongbin.top:3005/api/getimages/'+cateid)
        .then((res)=>{
          
            this.imglist=res.data.message
            
            // console.log(res)
        })
        .catch((err)=>{

        })
      },
      tab(id){
        this.getimgs(id)
      }
    },
};
</script>
<style scoped>
*{
  touch-action: pan-y;
}

.photo-list{
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list a{
  display: block;
  background: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 6px #999;
  position: relative;
}
.photo-list a img{
  width: 100%;
  vertical-align: middle;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
    color: #fff;
    text-align: left;
    position: absolute;
    bottom: 0;
    max-height: 84px;
    background-color: rgba(0,0,0,0.4);
    
    
}
.info-title{
    font-size: 14px;
}
.info-body{
    font-size: 13px;
}
</style>
