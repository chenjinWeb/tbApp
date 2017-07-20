<template>

  <div class="tabbar">

    <router-link to="/index" class="tab-button" :class="{active:getPath == '/index' || getPath == '/'}" replace>
            <span class="tab-button-icon home-icon">

            </span>
      <span class="tab-button-text">首页</span>
    </router-link>

    <router-link to="/info" class="tab-button" :class="{active:getPath == '/info'}" replace>
            <span class="tab-button-icon notice-icon">

            </span>
      <span class="tab-button-text">物流信息</span>
    </router-link>

    <router-link to="/cart" class="tab-button" :class="{active:getPath == '/cart'}" replace>
            <span class="tab-button-icon gouwu-icon">

            </span>
      <span class="tab-button-text">购物车</span>
    </router-link>

    <router-link to="/user" class="tab-button" :class="{active:getPath == '/user'}" replace>
            <span class="tab-button-icon mine-icon">

            </span>
      <span class="tab-button-text">我的</span>
    </router-link>

  </div>

</template>

<script>

  import mHeader from "../common/header.vue"

  export default{
    name:"mHeader",
    computed:{
      getPath(){
        return this.$route.path;
      }
    }
  }
</script>

