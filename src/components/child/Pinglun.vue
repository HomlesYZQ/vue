<template>
<div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容(做多吐槽120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type='primary' size='large' @click="fabu">发表评论</mt-button>
    <div class="cmt-list" v-for="(item,index) in pinglist" :key="index">
        <div class="cmt-item">
            <div class="cmt-title">
                第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}发表时间：{{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>
    </div>
    <mt-button type='danger' plain size='large' @click="getMore">加载更多</mt-button>
</div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
   data() {
       return {
           pageindex:1,
           pinglist:[],
           msg:''
       }
   }, 
   created() {
       this.getping()
   },
   methods: {
       getping(){
           axios.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageindex)
           .then((res)=>{
            //    console.log(res)
                this.pinglist = this.pinglist.concat( res.data.message)
           })
           .catch((err)=>{

           })
       },
       
       getMore(){
           this.pageindex++
            this.getping()
       },
       fabu(){
           if(this.msg.trim().length===0){
               Toast('评论内容不能为空')
           }
           axios.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{content:this.msg.trim()})
           .then((res)=>{
               if(res.data.status===0){
                   var cmt={
                       user_name:'张志伟',
                       add_time:Date.now(),
                       content:this.msg.trim()
                   }
                   this.pinglist.unshift(cmt)
                   this.msg=''
               }
           })
           .catch((err)=>{
               console.log(err)
           })
       }
   },
   
   props:['id']
}
</script>
<style scoped>
h3{
    font-size: 18px;

}
textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list{
    margin: 5px 0;
}
.cmt-list .cmt-item{
    font-size: 13px;
}
.cmt-list .cmt-item .cmt-title{
    background: #ccc;
    line-height: 35px;
}
.cmt-list .cmt-item .cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
</style>
