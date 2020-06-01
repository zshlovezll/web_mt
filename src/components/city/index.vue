<template>
  <div class="cityContainer">
      <el-row>
          <my-provinces></my-provinces>
      </el-row>
      <el-row>
          <my-city></my-city>

      </el-row>
      <el-row>
          <my-alreader></my-alreader>

      </el-row>
      <el-row>
          <my-list></my-list>

      </el-row>
  </div>
</template>

<script> 
import myProvinces from './provinces.vue';
import myCity from './city.vue'

import myAlreader from './alreader.vue'
import myList from './list.vue'

export default {
    components:{
        myProvinces,
        myCity,
        myAlreader,
        myList
    }

}
</script>

<style lang="less">
    .cityContainer{
        height: auto;
        border: 1px solid;
        margin-top: 100px;
    }
</style>