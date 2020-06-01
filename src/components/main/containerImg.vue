<template>
  <el-col class="b-el" :span="24">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in img" :key="item">
          <h3 class="medium">
              <img :src="item" alt="" srcset="">
              <img :src="item" alt="" srcset="">
              <img :src="item" alt="" srcset="">

            </h3>
        </el-carousel-item>
      </el-carousel>
  </el-col>
</template>

<script>
export default {
    data(){
        return{
            img:[
                "//p0.meituan.net/movie/07e0ee6c6f30700e6d4ab6774d95fc4f108727.jpg@321w_445h_1e_1c",
                "//p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/a19913517ec4dd7b1e8c56a199ceaa4280560.jpg@321w_445h_1e_1c",
                "//p1.meituan.net/movie/eb37c5b78ec0c14aaad707700fcc1443390529.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/afcf5837b6f1955a2c136542c0ed9d32392283.jpg@321w_445h_1e_1c"
            ]
        }
    }
};
</script>

<style lang="less">
@import "../../css/index/containerImg.less";
</style>