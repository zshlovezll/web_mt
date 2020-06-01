<template>
  <div class="container">
    <el-col class="top-el" :span="24">
      <div class="top-c">
        <div class="c-left">
          <span class="one1">猫眼电影</span>
          <span class="one2">即将上映</span>
        </div>
        <div class="c-right">
          <router-link to="/" tag="a">全部></router-link>
        </div>
      </div>
    </el-col>
    <!-- <el-col :span="24"></el-col> -->
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../css/index/container.less";
</style>