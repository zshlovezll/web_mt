<template>
  <div class="list">
    <div class="pinyin">
        <span class="listTitle">按拼音首字母选择：</span>
        <ul class="listUl">
        <li v-for="(i,k) in listArr" :key="k">
            <a :href="'#city-'+i">{{i.toUpperCase()}}</a>
        </li>
        </ul>
    </div>
    <!-- :id="'city-'+i" -->
    <div class="listCity" v-for="(i,k) in listArr" :key="k">
        <div class="listContent" :id="'city-'+i">{{i.toUpperCase()}}</div>
        <div class="citys" >
            <ul class="ul" >
                <li v-for="(ii,kk) in arr[i]" :key="kk">{{ii}}</li>
            </ul>
        </div>
    </div>

    <div>{{$store.state.msg}}</div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      listArr: ["a","b","c","d","e","f","g","h","j","k","l","m","n","p","q","r","s","w","x","y","z"],
      cityarr:[],
      arr:{
          a:[],
          b:[],
          c:[],
          d:[],
          e:[],
          f:[],
          g:[],
          h:[],
          j:[],
          k:[],
          l:[],
          m:[],
          n:[],
          p:[],
          q:[],
          r:[],
          s:[],
          w:[],
          x:[],
          y:[],
          z:[],
      }

    };
  },
  async created () {
    let that = this
    await this.axios.get('/city.json').then((data) =>{
            that.cityarr = data.data
        })

    this.cityarr.forEach((i,index)=>{

        if(i.value[0] == "a"){
            that.arr.a.push(i.label)
        }else if(i.value[0] == "b"){
            that.arr.b.push(i.label)
        }else if(i.value[0] == "c"){
            that.arr.c.push(i.label)
        }else if(i.value[0] == "d"){
            that.arr.d.push(i.label)
        }else if(i.value[0] == "e"){
            that.arr.e.push(i.label)
        }else if(i.value[0] == "f"){
            that.arr.f.push(i.label)
        }else if(i.value[0] == "g"){
            that.arr.g.push(i.label)
        }else if(i.value[0] == "h"){
            that.arr.h.push(i.label)
        }else if(i.value[0] == "i"){
            that.arr.i.push(i.label)
        }else if(i.value[0] == "j"){
            that.arr.j.push(i.label)
        }else if(i.value[0] == "k"){
            that.arr.k.push(i.label)
        }else if(i.value[0] == "l"){
            that.arr.l.push(i.label)
        }else if(i.value[0] == "m"){
            that.arr.m.push(i.label)
        }else if(i.value[0] == "n"){
            that.arr.n.push(i.label)
        }else if(i.value[0] == "o"){
            that.arr.o.push(i.label)
        }else if(i.value[0] == "p"){
            that.arr.p.push(i.label)
        }else if(i.value[0] == "q"){
            that.arr.q.push(i.label)
        }else if(i.value[0] == "r"){
            that.arr.r.push(i.label)
        }else if(i.value[0] == "s"){
            that.arr.s.push(i.label)
        }else if(i.value[0] == "z"){
            that.arr.z.push(i.label)
        }else if(i.value[0] == "y"){
            that.arr.y.push(i.label)
        }else if(i.value[0] == "v"){
            that.arr.v.push(i.label)
        }else if(i.value[0] == "w"){
            that.arr.w.push(i.label)
        }else if(i.value[0] == "x"){
            that.arr.x.push(i.label)
        }else if(i.value[0] == "y"){
            that.arr.y.push(i.label)
        }else if(i.value[0] == "z"){
            that.arr.z.push(i.label)
        }
       
    })

    this.cityarr.forEach((aa,bb) =>{
        aa.children.forEach((cc,dd) =>{
        if(cc.value[0]  == "a"){
            that.arr.a.push(cc.label)
        }else if(cc.value[0]  == "b"){
            that.arr.b.push(cc.label)
        }else if(cc.value[0]  == "c"){
            that.arr.c.push(cc.label)
        }else if(cc.value[0]  == "d"){
            that.arr.d.push(cc.label)
        }else if(cc.value[0]  == "e"){
            that.arr.e.push(cc.label)
        }else if(cc.value[0]  == "f"){
            that.arr.f.push(cc.label)
        }else if(cc.value[0]  == "g"){
            that.arr.g.push(cc.label)
        }else if(cc.value[0]  == "h"){
            that.arr.h.push(cc.label)
        }else if(cc.value[0]  == "i"){
            that.arr.i.push(cc.label)
        }else if(cc.value[0]  == "j"){
            that.arr.j.push(cc.label)
        }else if(cc.value[0]  == "k"){
            that.arr.k.push(cc.label)
        }else if(cc.value[0]  == "l"){
            that.arr.l.push(cc.label)
        }else if(cc.value[0]  == "m"){
            that.arr.m.push(cc.label)
        }else if(cc.value[0]  == "n"){
            that.arr.n.push(cc.label)
        }else if(cc.value[0]  == "o"){
            that.arr.o.push(cc.label)
        }else if(cc.value[0]  == "p"){
            that.arr.p.push(cc.label)
        }else if(cc.value[0]  == "q"){
            that.arr.q.push(cc.label)
        }else if(cc.value[0]  == "r"){
            that.arr.r.push(cc.label)
        }else if(cc.value[0]  == "s"){
            that.arr.s.push(cc.label)
        }else if(cc.value[0]  == "z"){
            that.arr.z.push(cc.label)
        }else if(cc.value[0]  == "y"){
            that.arr.y.push(cc.label)
        }else if(cc.value[0]  == "v"){
            that.arr.v.push(cc.label)
        }else if(cc.value[0]  == "w"){
            that.arr.w.push(cc.label)
        }else if(cc.value[0]  == "x"){
            that.arr.x.push(cc.label)
        }else if(cc.value[0]  == "y"){
            that.arr.y.push(cc.label)
        }else if(cc.value[0]  == "z"){
            that.arr.z.push(cc.label)
        }
        })
    })
    
        
  }
};
</script>

<style lang="less">
.list {
  .pinyin {
    padding: 40px 0;
    .listTitle {
      float: left;
      font-weight: bolder;
      font-size: 18px;
      margin-left: 50px;
    }
    .listUl {
      display: flex;
      font-size: 18px;
      margin-left: 141px;
      li {
        margin-left: 30px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
      }
    }
  }
  .listCity{
      border:1px solid;
      height: auto;
      display: flex;
      .listContent{
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color:rgb(255, 208, 0);
          text-align: center;
          line-height: 45px;
          margin: 25px 0px 0px 25px;
      }
      .citys{
          height: auto;
          width: 1198px;
          float: right;
          margin: 0px 0px 0px 30px;

          ul{
              height: 100px;
              li{
                 float: left;
                  margin: 10px 10px;
                  white-space: nowrap;
                  cursor: pointer;
              }
          }
      }
  }
  
}
</style>