<template>

    <div class="tab-content">

      <div class="info_bar">

        <top-title :title="title" :back="back" :length="length"></top-title>

      </div>

      <div class="content">
        <div class="scroll-content" margin-tabbar margin-header>
          <div class="info-content" v-for="n in 10">
            <div class="info-logo">
              <a href="https://shop.m.taobao.com/shop/shop_index.htm?user_id=2660410812">江夏金口八一渔业</a>
              <a href="https://h5.m.taobao.com/ww/index.htm?#!dialog-5rGf5aSP6YeR5Y+j5YWr5LiA5riU5Lia-540902029758--24324623458581113">
                <img src="//wap.ww.taobao.com/ww/status.do?nick=%E6%B1%9F%E5%A4%8F%E9%87%91%E5%8F%A3%E5%85%AB%E4%B8%80%E6%B8%94%E4%B8%9A&_input_charset=utf-8">
              </a>
            </div>

            <div class="info-detail">
              <div class="info-l">
                <a>
                  <img src="//gw2.alicdn.com/bao/uploaded/i4/2660410812/TB2oAmzwHBmpuFjSZFuXXaG_XXa_!!2660410812.jpg_90x90.jpg">
                </a>
              </div>
              <div class="info-r">
                <div class="info-message">
                  <h3>【12号21点】精武鸭脖鸭翅鸭架鸭掌卤藕海带花生零食礼包500g</h3>
                  <p class="info-money">实付款：<strong>¥17.50</strong></p>
                  <p> 共1件 </p>
                  <p class="info-sold"> 卖家已发货 </p>
                </div>
                <p class="info-btn">
                  <a>确认收货</a>
                  <a @click="checkInfo()">查看物流</a>
                </p>
              </div>
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

    import canCreat from "../../canCreat"
    import topTitle from "../common/topTitle.vue"

    export default{
      name:"info",
      data(){
        return {
          title:"物流信息",
          back:false,
          length:2
        }
      },
      methods:{
        checkInfo(){
          this.$router.push({name:'logistics'})
        }
      },
      beforeRouteEnter(to,from,next){
        if(canCreat()){
          next();
        }
      },
      components:{
        topTitle
      }
    }

</script>

<style scoped>

  body{ background: #ccc;}

</style>
