<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in arrslist" :key="index">
        <router-link :to="'/shou/xinwen/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            {{item.title}}
            <p>
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span>点击{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            arrslist:undefined
        }
    },
    created() {
        this.getNewslist()
    },
    methods: {
        getNewslist(){
            axios.get('http://www.liulongbin.top:3005/api/getnewslist')
            .then((res)=>{
                // console.log(res.data.message)
                this.arrslist=res.data.message
            })
            .catch((err)=>{

            })
        }

    },
};
</script>
<style scoped>
.mui-table-view li a .mui-media-body p{
    display: flex;
    justify-content: space-between;
}
</style>
