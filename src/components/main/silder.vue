<template>
  <div class="block">
    <el-carousel :interval="5000" arrow="always" height="210px">
      <el-carousel-item v-for="item in imgArr" :key="item">
            <img src="../../css/img/1.jpg" alt="12" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        "../../css/img/1.jpg",
        "../../css/img/2.png",
        "../../css/img/3.jpg",
        "../../css/img/4.jpg",
        "../../css/img/5.jpg"
      ]
    };
  }
};
</script>

<style lang="less">
@import "../../css/index/silder.less";
</style>