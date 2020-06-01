<template>
  <div class="provinces">
    <div class="choose">
      <span class="c-s">选择省份与城市</span>
      <div class="inp" @click="city()">
          <el-cascader v-model="label" :options="options" @change="Change(label)" ></el-cascader>
      </div>
      <el-button type="primary" round  >确定</el-button>
    </div>
    <div class="searchCity">
        <span >直接输入:</span>
        <input value="" v-model="input" placeholder="请输入城市中文或拼音" class="int" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: [],
      input:'',
      options: []
    };
  },
  methods: {
    Change(label) {
      this.label = label
    },
    city(){
        let that = this
        this.axios.get('/city.json').then((data) =>{
                that.options = data.data
            })
        
    },
  }
};
</script>

<style lang="less">
.provinces{
    border-bottom: 1px solid;
    padding: 15px 0px;
    .choose,.searchCity{
        display: inline-block;
    }
    
    .choose{
        
        .c-s,.el-cascader,.el-button{
            margin-left: 50px;
        }
        .c-s,.el-button,.inp{
            display: inline-block;
        }
        .inp{
            el-cascader{
            display: inline-block;

            }
        }
    }
    .searchCity{
        margin-left: 200px;
        .int{
            width: 200px;
            height: 30px;
            border-radius: 16px;
            outline-style: none;
        }
    }
}
</style>