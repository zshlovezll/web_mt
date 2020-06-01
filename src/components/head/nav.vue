
<template>
  <div class="nav">
    <el-row type="flex" class="row-bg" justify="space-between">
      <!--左边nav-->
      <el-col :span="10" class="el-col-10">
        <div class="grid-content bg-purple right_nav">
          <i class="el-icon-location" />
          <p class="currentCity">北京</p>
          <router-link :to="{name:'changeCity'}">切换城市
            
          </router-link>
          [
            <a href="#">奉新</a>
            <a href="#">共青城</a>
            <a href="#">丰城</a>
          ]

          <div class="m-user">
            <!-- <router-link :to="{name:login}">立即登录</router-link>
            <router-link :to="{name:registered}">注册</router-link> -->
            <router-link :to="{name:'login'}" >立即登录</router-link>
            <router-link :to="{name:'register'}">注册</router-link>
          </div>
        </div>
      </el-col>
      <!-- 右边nav -->

      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <ul class="ul">
            <li class="list">
              <router-link to="/">我的美团</router-link>
              <p v-for="(item, index) in child1" :key="index">
                <router-link to="/">{{item}}</router-link>
              </p>
            </li>

            <li>
              <router-link to="/">美团App</router-link>
            </li>

            <li class="list">
              <router-link to="/">商家中心</router-link>

              <p v-for="(item,index) in child3" :key="index">
                <router-link to="/">{{item}}</router-link>
              </p>
            </li>

            <li class="list">
              <router-link to="/">美团规则</router-link>

              <p v-for="(item,index) in child4" :key="index">
                <router-link to="/">{{item}}</router-link>
              </p>
            </li>

            <li class="list">
              <router-link to="/">网络导航</router-link>

              <div class="wrap">
                <div class="block">
                  <dl class="one">
                    <dt>酒店旅游</dt>
                    <dd v-for="(item,i) in firstblock" :key="i">
                      <router-link to="/">{{item}}</router-link>
                    </dd>
                  </dl>

                  <dl class="two">
                    <dt>吃美食</dt>
                    <dd v-for="(child,i) in secondblock" :key="i">
                      <router-link to="/">{{child}}</router-link>
                    </dd>
                  </dl>

                  <dl class="three">
                    <dt>看电影</dt>
                    <dd v-for="(child,i) in thirdblock" :key="i">
                      <router-link to="/">{{child}}</router-link>
                    </dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      child1: "",
      child3: "",
      child4: "",
      blockTitle: "",
      firstblock: "",
      secondblock: "",
      thirdblock: ""
    };
  },
  methods: {
    copy(data) {
      this.title = data.title;
      this.child1 = data.child1;
      this.child3 = data.child3;
      this.child4 = data.child4;
      this.blockTitle = data.blockTitle;
      this.firstblock = data.firstblock;
      this.secondblock = data.secondblock;
      this.thirdblock = data.thirdblock;
    }
  },

  created() {
    let that = this;

    this.axios.get("/mock.json").then(data => {
      that.copy(data.data);
    });
  }
};
</script>

<style lang="less">
@import "../../css/header/nav.less";
</style>