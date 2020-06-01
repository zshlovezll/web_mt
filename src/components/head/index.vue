<template>
    <div class="header">
        <el-row>
            <my-nav />
        </el-row>
        <el-row>
            <search />  
        </el-row>
    </div>
</template>
<script>
import MyNav from './nav.vue';
import search from './search.vue'
export default {
    components: {
        MyNav,
        search
    }
    
}
</script>

<style lang="less">




</style>