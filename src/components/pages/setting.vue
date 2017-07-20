<template>

  <div class="product">

    <div class="info_bar">

      <top-title :title="title" :back="back" :length="length"></top-title>

    </div>

    <div class="content">

        <div class="core_entry" @click="addressInfo()">

          <div class="label_act">

            <div class="label_title">

              <h1>收货地址</h1>

            </div>

            <div class="label_go">

              <i class="icon">&#xe664;</i>

            </div>

          </div>

        </div>


      </div>

    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>

  import topTitle from "../common/topTitle.vue"

    export default{
      name:"setting",
      data(){
        return {
          title:"设置",
          back:true,
          length:0
        }
      },
      methods:{
        addressInfo(){
          this.$router.push({
            name:"address"
          })
        }
      },
      components:{
        topTitle
      }
    }

</script>

<style scoped>
.content{ padding-top: 0.4rem;}
.core_entry{ background: #ffffff; margin-top: 0.15rem;}
.label_act{ height: 0.4rem; padding-left: 0.15rem; display: flex;}
.ico{ margin-right: 0.1rem;}
.ico-cont{ background: #5090cd; height: 0.26rem; color: #fff; line-height: 0.3rem; text-align: center; margin-top: 0.07rem; border-radius: 0.04rem;}
.ico-cont i{ font-size: 0.17rem;}
div.label_title{ flex: 1;}
div.label_title h1{ width: 100%; font-weight: 400; height: 0.26rem; line-height: 0.26rem; margin-top: 0.07rem; text-align: left; font-size: 0.15rem; color: #aaa; letter-spacing: 1px;}
.label_sub,.label_go{ line-height: 0.4rem; color: #aaa; margin-right: 0.05rem;}
.label_sub,.label_go i{ vertical-align: middle;}

</style>
