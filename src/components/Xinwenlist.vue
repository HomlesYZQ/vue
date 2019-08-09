<template>
<div class="container">
    <h3 class="title">
        {{lists.title}}
    </h3>
    <p class="subtitle">
        <span>发表时间：{{lists.add_time | dateFormat }}</span>
        <span>点击{{lists.click}}次</span>
    </p>
    <hr>
    <div class="cont" v-html="lists.content">
        
    </div>
    <ping :id='this.id'></ping>
</div>
</template>
<script>
import axios from 'axios'
import Ping from '@/components/child/Pinglun'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lists:''
        }
    },
    created() {
        this.getlist()
    },
    methods: {
        getlist(){
            axios.get('http://www.liulongbin.top:3005/api/getnew/'+this.id)
            .then((res)=>{
                // console.log(res)
                this.lists=res.data.message[0]
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    components:{
        Ping
    }
}
</script>
<style scoped>
.container{
    padding: 0 4px;
}
.title{
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;

}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
.cont img{
    width: 100%;
}
</style>
