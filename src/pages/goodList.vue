<template>
  <el-container>
    <el-header>

      <my-header />

    </el-header>
    <el-main>
        <my-search></my-search>

    </el-main>
    <el-footer>

      <my-footer />

    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "@/components/head/index.vue";
import myFooter from "@/components/footer/index.vue";
import mySearch from "@/components/products/crumbs.vue";

export default {
 components: {
    myHeader,
    myFooter,
    mySearch
  }
}
</script>

<style lang="less">

</style>