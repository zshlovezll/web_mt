<template>
  <div class="menu" @mouseleave="leave()">
    <dl class="nav1">
      <dd v-for="(item,index) in dataList.titles.bigTitle" :key="index" @mouseenter="hover(item,index)">
        <i class="el-icon-fork-spoon icon" />
        <div class="content">
          <router-link to="/">{{item}}</router-link>
          
        </div>
        <p class="left">></p>
      </dd>

      

      
    </dl>
    <div class="Block" v-if="isShow" @mouseenter="block()">
            <div class="title">
              <p>{{title}}</p>
            </div>

            <div class="wrap" v-for="(i,k) in dataList.contents['content'+(this.index+1)]" :key="k">
                <p>
                    <router-link to="/">{{i}}</router-link>
                </p>
            </div>
       </div>
    
  </div>


</template>

<script>
export default {
  data() {
    return {
      dataList: "",
      index:'',
      title:'',
      isShow:false
    };
  },
  methods: {
      
  },
  computed:{
     hover(){
         return function (it,index){
          this.index = index;
          this.title = it;
          this.isShow = true
         }
     },
     leave(){
         let that = this
         return function (){
             setTimeout(() =>{
                this.isShow = false

             },500)
         }
     },
  },
  created() {
    let that = this;
    this.axios("/nav.json").then(data => {
      console.log(data.data);
      that.dataList = data.data;
    });
    // console.log(this.dataList)
  }
};
</script>

<style lang="less">
@import "../../css/index/menu.less";
</style>