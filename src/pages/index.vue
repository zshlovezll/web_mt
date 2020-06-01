<template>
  <div class="main1">
    <div class="all">全部分类</div>
    <div class="header-link">
      <ul>
        <li>美团外卖</li>
        <li>猫眼电影</li>
        <li>美团酒店</li>
        <li>民宿／公寓</li>
        <li>商家入驻</li>
        <li>美团公益</li>
      </ul>
    </div>
    <el-row>
      <el-col :span="6">
        <div class="right">
          <my-menu />
        </div>
      </el-col>

      <el-col :span="18">
        <div class="center">
          <el-row>
            <div class="top">
              <el-col :span="13">
                <my-silder />
              </el-col>
              <el-col :span="5">
                <img
                  class="img1"
                  src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"

                />
              </el-col>
              <el-col :span="6">
                <my-top />
              </el-col>
            </div>
          </el-row>
          <div class="bottom">
            <el-col :span="4">
              <img
                src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
                alt="3"
                srcset
                class="img2"
              />
            </el-col>
            <el-col :span="4">
              <img
                src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
                alt="4"
                srcset
                class="img3"
              />
            </el-col>
            <el-col :span="4">
              <img
                src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
                alt="5"
                srcset
                class="img4"
              />
            </el-col>
            <el-col :span="4">
              <my-bottom />
            </el-col>
          </div>
          <!-- <el-col :span="4">
                <my-bottom />
          </el-col>-->
        </div>
      </el-col>
    </el-row>
    <el-row>
        <my-container />
    </el-row>
    <el-row>
        <my-containerimg />
    </el-row>
  </div>
</template>

<script>
import myMenu from "@/components/main/menu.vue";
import mySilder from "@/components/main/silder.vue";
import myTop from "@/components/main/top.vue";
import myBottom from "@/components/main/bottom.vue";
import myContainer from "@/components/main/container.vue";
import myContainerimg from "@/components/main/containerImg.vue";


export default {
  components: {
    myMenu,
    mySilder,
    myTop,
    myBottom,
    myContainer,
    myContainerimg
  }
};
</script>

<style lang="less">
@import "../css/index/index.less";
</style>