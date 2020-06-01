<template>
  <el-container>
    <el-header>

      <my-header />

    </el-header>
    <el-main>

      <my-city />

    </el-main>
    <el-footer>

      <my-footer />

    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "@/components/head/index.vue";
import myFooter from "@/components/footer/index.vue";
import myCity from "@/components/city/index.vue";

export default {
  components: {
    myHeader,
    myFooter,
    myCity
  }
};
</script>

<style lang="less">
.el-main {
  min-width: 1193px;
  overflow-x: hidden;
}
</style>