<template>
<div class="num">
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="contchanged" ref="numbox"/>
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
            this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    },
    props:['max'],
    watch: {
        'max':function(newval,oldval){
            mui('.mui-numbox').numbox().setOption('max',newval)
        }
    },
}
</script>
<style scoped>
.num{
    display: inline-block;
}
</style>
