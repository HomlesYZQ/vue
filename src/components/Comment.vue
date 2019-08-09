<template>
<div>
    <ping :id='this.id'></ping>
</div>
</template>
<script>
import Ping from '@/components/child/Pinglun'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        Ping
    }

}
</script>
<style scoped>
</style>
