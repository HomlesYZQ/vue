<template>
<div class="container">
    <h3 class="title">
        {{lists.title}}
    </h3>
    <div class="cont" v-html="lists.content">
        
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lists:[]
        }
    },
    methods: {
        getdata(){
            axios.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.id)
            .then((res)=>{
                console.log(res)
                this.lists=res.data.message[0]
            })
            .catch((err)=>{

            })
        }
    },
    created() {
        this.getdata()
    },
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

</style>
