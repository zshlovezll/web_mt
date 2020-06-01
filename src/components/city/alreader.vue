<template>
  <div class="alreader">
      <div class="alTile">
          最近访问
      </div>
      <ul class="readerUl">
          <li v-for="(i,k) in readerArr" :key="k">{{i}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            readerArr:["赣州","临沂","上高","高安","奉新","南昌"]
        }
    }
}
</script>

<style lang="less">
.alreader{
    border-bottom:1px solid;
    padding: 10px 0;
    .alTile{
        float: left;
        font-weight: bolder;
        font-size: 18px;
        margin-left:50px

    }
    .readerUl{
        display:flex;
        font-size: 18px;
        margin-left: 141px;
        li{
            margin-left: 30px;
            font-size: 14px;
            text-align: center;
            line-height: 30px;
        }
    }

}
</style>