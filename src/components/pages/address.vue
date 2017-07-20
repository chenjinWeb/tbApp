<template>

    <div class="address-info">

      <div class="info_bar">

        <top-title :title="title" :back="back" :length="length"></top-title>

      </div>

      <mt-cell-swipe
        :right="[
          {
            content: '编辑',
            style: { background: '#fe5400', color: '#fff' },
            handler: ()=>pass(0,addressList.id)
          },
          {
            content: '删除',
            style: { background: 'red', color: '#fff' },
            handler: ()=>pass(1,addressList.id)
          }
        ]"
      v-for="(addressList,$index) in addressLists" :key="addressList.id">

        <div class="address-list" @click="selectAdd(addressList)">

          <div class="address-detail">

            <div class="address-name">

              <span>{{addressList.name}}</span>

              <em>{{addressList.mobile}}</em>

            </div>

            <div class="address-add">

              <span v-if="addressList.isFirst">[默认地址]</span>

              <i>{{addressList.areaName+addressList.privinceName+addressList.cityName+addressList.address}}</i>

            </div>

          </div>

        </div>

      </mt-cell-swipe>

      <!-- 通过路由 push进来的页面渲染view -->
      <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
        <router-view></router-view>
      </transition>

    </div>

</template>

<script>

    import Vue from "vue"

    import topTitle from "../common/topTitle.vue"

    import { CellSwipe,Toast } from 'mint-ui';

    Vue.component(CellSwipe.name, CellSwipe);

    export default{
      name:"address",
      data(){
        return {
          title:"选择收货地址",
          back:true,
          length:0,
          addressLists:[]
        }
      },
      methods:{
        pass(n,id){
          n? this.delete(id) : this.edit(id)
        },
        delete(id){
          var _this=this;
          _this.$http.get("../init.json",{id:id}).then(response =>{

          },response=>{
            _this.addressLists.forEach(function (item,index,array) {
              if(id==item.id){
                array.splice(index,1)
              }
            })
          })
        },
        edit(id){
          this.$router.push({
            name:"fixadd",
            query: { userId: id }
          })
        },
        selectAdd(item){
          this.$router.go(-1);
          window.localStorage.setItem("selectAdd",JSON.stringify(item))
        }
      },
      mounted(){
        var _this=this;
        _this.$http.get("../init.json").then(response => {
        },response=>{
          if(window.localStorage.getItem("address")){
            this.addressLists=JSON.parse(window.localStorage.getItem("address"));
          }else{
            _this.addressLists=[
              {
                isFirst:true,
                name:"陈玲",
                mobile:"13701756015",
                areaName:"上海",
                privinceName:"上海市",
                cityName:"徐汇区",
                address:"漕河泾桂平路481号桂中园19号6楼",
                id:80051
              },
              {
                isFirst:false,
                name:"孟陈进",
                mobile:"13701756015",
                areaName:"上海",
                privinceName:"上海市",
                cityName:"徐汇区",
                address:"漕河泾桂平路481号桂中园19号6楼",
                id:80052
              },
              {
                isFirst:false,
                name:"陈增喜",
                mobile:"13813422882",
                areaName:"江苏",
                privinceName:"盐城市",
                cityName:"东台市",
                address:"安丰镇大港2组15号",
                id:80053
              },
              {
                isFirst:false,
                name:"陈玲",
                mobile:"15151091366",
                areaName:"江苏",
                privinceName:"盐城市",
                cityName:"东台市",
                address:"安丰镇安东村8组(安小旁边)",
                id:80054
              },
              {
                isFirst:false,
                name:"陈玲",
                mobile:"13701756015",
                areaName:"上海",
                privinceName:"上海市",
                cityName:"闵行区",
                address:"联明路421号黎明小区23号6楼",
                id:80055
              },
              {
                isFirst:false,
                name:"陈玲",
                mobile:"15151091366",
                areaName:"上海",
                privinceName:"上海市",
                cityName:"闵行区",
                address:"联明路421号黎明小区23号6楼",
                id:80056
              },
              {
                isFirst:false,
                name:"陈玲",
                mobile:"15151091366",
                areaName:"上海",
                privinceName:"上海市",
                cityName:"闵行区",
                address:"联明路421号黎明小区23号6楼",
                id:80057
              },
              {
                isFirst:false,
                name:"陈玲",
                mobile:"15151091366",
                areaName:"江苏",
                privinceName:"南京市",
                cityName:"秦淮区",
                address:"联明路421号黎明小区23号6楼",
                id:80058
              }
            ]
          }
          window.localStorage.setItem("address",JSON.stringify(_this.addressLists))
        })
      },
      beforeRouteUpdate (to,from,next){
        if(to.name=="address"){
          this.addressLists=JSON.parse(window.localStorage.getItem("address"));
        }
        next()
      },
      components:{
        topTitle
      }
    }

</script>

<style>
  .mint-cell{ border-bottom: 1px solid #e5e5e5;}
  .mint-cell-value{ width: 100%;}
  .mint-cell-swipe-button{ line-height: 1.0rem;}
</style>
