<template>
  <div class="hotCity">
      <span class="hotTitle">热门城市：</span>
      <ul class="cityUl">
          <li v-for="(i,k) in cityArr" :key="k">{{i}}</li>
          
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cityArr:["北京","上海","广州","深圳","天津","西安","重庆","杭州","南京","武汉","成都"]
        }
    }

}
</script>

<style lang="less">
.hotCity{
    border-bottom:1px solid;
    padding: 10px 0;
    .hotTitle{
        float: left;
        font-weight: bolder;
        font-size: 18px;
        margin-left:50px

    }
    .cityUl{
        display:flex;
        font-size: 18px;
        margin-left: 100px;
        li{
            margin-left: 30px;
            font-size: 14px;
            text-align: center;
            line-height: 30px;
        }
    }

}

</style>