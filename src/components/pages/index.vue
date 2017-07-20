<template>

    <div class="tab-content">

      <m-header :title="title" v-on:search="getSearch"></m-header>

      <div class="content">

        <div class="scroll-content" margin-tabbar margin-header ref="menuItem">

          <div class="banner">
            <mt-swipe :show-indicators="true" :auto="3000">
              <mt-swipe-item v-for="(bannerList,index) in bannerLists" :key="bannerList.src">
                <a :href="bannerList.url">
                  <img :src="bannerList.src" />
                </a>
              </mt-swipe-item>
            </mt-swipe>
          </div>

          <!--类目-->
          <m-menu></m-menu>

          <!--公告-->
          <m-notice></m-notice>

          <!--淘抢购-->
          <m-buy></m-buy>

          <!--超实惠-->
          <m-cheper></m-cheper>

          <!--猜你喜欢-->
          <m-love v-on:refreshbizlines="goToDetail"></m-love>

        </div>

      </div>

      <div class="backTop" @click="goTop()" v-if="backShow">
        <img src="../../assets/images/back.png">
      </div>

    </div>

</template>

<script>

    import Vue from 'vue';
    import mHeader from "../common/header.vue"
    import mMenu from "./menu.vue"
    import mNotice from "./notice.vue"
    import mBuy from "./taobuy.vue"
    import mCheper from "./cheper.vue"
    import mLove from "./love.vue"
    import { Swipe, SwipeItem,Toast } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default{
      name:"index",
      data(){
        return {
          title:"寻找宝贝店铺",
          bannerLists:[
            {
              url:"http://www.baidu.com",
              src:"//gw.alicdn.com/imgextra/i3/135/TB2EcFgvHBmpuFjSZFAXXaQ0pXa_!!135-0-luban.jpg_q50.jpg"
            },
            {
              url:"http://www.taobao.com",
              src:"//aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
            },
            {
              url:"http://www.jd.com",
              src:"//gw.alicdn.com/imgextra/i4/136/TB2fyT9vAqvpuFjSZFhXXaOgXXa_!!136-0-luban.jpg_q50.jpg"
            },
            {
              url:"http://www.sina.com",
              src:"//gw.alicdn.com/imgextra/i3/32/TB29nIMvrBmpuFjSZFAXXaQ0pXa_!!32-0-luban.jpg_q50.jpg"
            },
            {
              url:"http://www.ycmedia.com",
              src:"//gw.alicdn.com/imgextra/i4/125/TB2vUcIrHBkpuFjy1zkXXbSpFXa_!!125-0-luban.jpg_q50.jpg"
            },
            {
              url:"http://www.zcdsp.com",
              src:"//gw.alicdn.com/imgextra/i3/179/TB2sDKgr9XlpuFjy0FeXXcJbFXa_!!179-0-luban.jpg_q50.jpg"
            }
          ],
          backShow:false
        }
      },
      methods:{
        getSearch(){
          this.$router.push({name:"search"})
        },
        goTop(){
          this.$refs.menuItem.scrollTop=0;
        },
        goToDetail (itemId) {
          Toast({
            message:'敬请期待'
          })
        }
      },
      mounted () {
        const menuItem=this.$refs.menuItem;
        const _this=this;
        menuItem.addEventListener("scroll",function (){
          if(menuItem.scrollTop>150){
            _this.backShow=true;
          }else{
            _this.backShow=false;
          }
        })
      },
      components:{
        mHeader,
        mMenu,
        mNotice,
        mBuy,
        mCheper,
        mLove
      }
    }

</script>
