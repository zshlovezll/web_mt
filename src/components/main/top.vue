<template>
  <div class="top-inner">
      <div class="img">
          <img src="../../css/img/avatar.jpg" alt="" srcset="">
      </div>
      <div class="user-name">
          Hi 你好
      </div>
      <div class="btn">
          <div class="login">
            <router-link :to="{name:'login'}" >登录</router-link>
          </div>
          <div class="register">
            <router-link :to="{name:'register'}">注册</router-link>
          </div>
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../../css/index/right-top.less';
</style>