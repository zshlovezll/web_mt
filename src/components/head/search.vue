<template>
  <div class="search">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <router-link to="/" >
              <img src="../../css/img/logo.png" />
              
            </router-link>

          <div class="input">
            <el-input @input="input1(input)" v-model="input" placeholder="搜索商家或地点" class="inp" @focus="focus()" @blur="blur()"></el-input>
            <button class="btn">
              <i class="el-icon-search" />
            </button>

            <dl class="hotplace" v-if="hot" >
              <dt v-if="isshow">热门搜索</dt>
              <dd v-for="(item,index) in hotList" :key="index">
                <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
              </dd>
            </dl>
          </div>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      hot:false,
      hotList:[],
      searchList:[]
    };
  },
  computed: {
    isshow(){
      return this.input ? false :true
    }
  },
  methods:{
    focus(){
      this.hot = true
    },
    blur(){
      setTimeout(() =>{
        this.hot = false
      },100)
    },
    input1(value){
      let that =this;
      console.log(value);
      this.axios.get("https://www.meituan.com/ptapi/suggest?keyword="+value).then((data) =>{
        console.log(data.data)
      })
    }
  }
};
</script>
<style lang="less">
@import "../../css/header/search.less";
</style>
