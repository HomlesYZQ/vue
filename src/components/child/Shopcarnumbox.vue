<template>
<div class="num">
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="init" @change="contchanged" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</div>
</template>
<script>
import mui from '@/assets/mui/js/mui.min.js'
export default {
    mounted() {
        mui('.mui-numbox').numbox()

    },
    methods: {
        contchanged(){
            this.$store.commit("updatedgoods",{
                id:this.goodsid,
                count:this.$refs.numbox.value
            })
        }
    },
    props:["init","goodsid"]
}
</script>
<style scoped>
.num{
    display: inline-block;
}
</style>
