<template>
  <el-container>
    <el-header>
        <my-header/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer><my-footer/></el-footer>
  </el-container>
</template>
<script>
import MyHeader from '../components/head/index.vue';
import MyFooter from '@/components/footer/index.vue'
export default {
    components: {
        MyHeader,
        MyFooter
    }
  
};
</script>

<style lang="less">
.el-main{
    min-width: 1193px;
    overflow-x: hidden;
    
}

</style>
