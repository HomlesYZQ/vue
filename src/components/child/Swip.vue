<template>
<div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbolist" :key="index">
        <img :src="item.img" :class="{full:isfull}" />
      </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
import axios from "axios";
export default {
    props:['lunbolist', 'isfull']
}
</script>
<style scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
}
.mint-swipe img {
  /* width: 100%; */
  height: 100%;
}
.full{
    width: 100%;
}
</style>
