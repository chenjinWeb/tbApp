<template>

    <div class="view_user">

      <div class="user_bg">

        <div class="set_btn" @click="settingFn()">设置</div>

        <div class="user_photo">

          <img src="//gw.alicdn.com/sns_logo/i2/1824581311/TB20AgUtVXXXXXNXXXXXXXXXXXX_!!0-mytaobao.jpg" width="100%" height="100%">

        </div>

        <div class="user_nick">

          <p>{{nickName}}</p>

          <p class="user_level"></p>

        </div>

      </div>

      <div class="user_list">

        <div>

          <router-link to="/foo">

            <p>133</p>
            <p>收藏的宝贝</p>

          </router-link>

        </div>
        <div>

          <router-link to="/foo">

            <p>26</p>
            <p>收藏的店铺</p>

          </router-link>

        </div>
        <div>

          <router-link to="/foo">

            <p>277</p>
            <p>我的足迹</p>

          </router-link>

        </div>

      </div>

      <div class="user_order">

        <div class="order_act">

          <div>

            <i class="icon">&#xe6b4;</i>

            <p>待付款</p>

            <span>0</span>

          </div>
          <div>

            <i class="icon">&#xe6b5;</i>

            <p>待发货</p>

            <span>0</span>

          </div>
          <div>

            <i class="icon">&#xe6b6;</i>

            <p>待收货</p>

            <span>0</span>

          </div>
          <div>

            <i class="icon">&#xe799;</i>

            <p>待评价</p>

            <span>0</span>

          </div>
          <div>

            <i class="icon">&#xe6b2;</i>

            <p>退款/售后</p>

            <span>0</span>

          </div>

        </div>

        <div class="label_act" @click="checkOrder()">

          <div class="ico">

            <p class="ico-cont">

              <i class="icon">&#xe6b9;</i>

            </p>

          </div>

          <div class="label_title">

            <h1>全部订单</h1>

          </div>

          <div class="label_sub">

            查看全部订单

          </div>

          <div class="label_go">

              <i class="icon">&#xe664;</i>

          </div>

        </div>

      </div>

      <div class="core_entry">

        <div class="label_act" @click="gouwu()">

          <div class="ico">

            <p class="ico-cont ico-cart">

              <i class="icon">&#xe6ba;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>购物车</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

          </div>

        </div>

        <div class="label_act" @click="search()">

          <div class="ico">

            <p class="ico-cont ico-search">

              <i class="icon">&#xe6d1;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>搜索</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

          </div>

        </div>

        <div class="label_act">

          <div class="ico ico_color">

            <p class="ico-cont ico-pay">

              <i class="icon">&#xe783;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>支付宝</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

          </div>

        </div>

        <div class="label_act">

          <div class="ico">

            <p class="ico-cont ico-pay">

              <i class="icon">&#xe6bd;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>旺旺</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

          </div>

        </div>


      </div>

      <div class="core_entry">

        <div class="label_act">

          <div class="ico">

            <p class="ico-cont ico-cart">

              <i class="icon">&#xe6b7;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>我的彩票</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

          </div>

        </div>

        <div class="label_act">

          <div class="ico">

            <p class="ico-cont ico-search">

              <i class="icon">&#xe6b8;</i>

            </p>

          </div>

          <div class="label_title border_title">

            <h1>我的机票</h1>

          </div>

          <div class="label_go border_title">

            <i class="icon">&#xe664;</i>

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

    export default{
      name:"user",
      data(){
        return {
          nickName:""
        }
      },
      methods:{
        settingFn(){
          this.$router.push({name:"setting"})
        },
        gouwu(){
          this.$router.replace({name:"cart"})
        },
        search(){
          this.$router.push({name:"search"})
        },
        checkOrder(){
          this.$router.push({name:"order"})
        }
      },
      created(){
        this.nickName=JSON.parse(window.localStorage.getItem("user")).name;
      },
      beforeRouteEnter (to,from,next){
          console.info(to)
          console.info(from)
          next()
      }
    }

</script>

<style>
body{ background: #eee;}
.view_user{ height: 100%;overflow: scroll;}
.user_bg{ width: 100%; height: 1.2rem; background: url("//gw.alicdn.com/tfscom/TB10.51HFXXXXXqXpXXYx6l2pXX-750-235.jpg_q90") no-repeat center center; position: relative; z-index: 2;}
.set_btn{ position: absolute; width: 0.5rem; height: 0.25rem; line-height: 0.25rem; right: 0.1rem; background: rgba(0,0,0,0.4); border-radius: 0.125rem; top: 0.1rem; font-size: 0.14rem; color: #ffffff;}
.user_photo{ width: 0.7rem; height: 0.7rem; border-radius: 50%; overflow: hidden; position: absolute; top: 0.8rem; left: 0.2rem; border: 2px solid #DDAA00;}
.user_nick{ position: absolute; bottom: 0.2rem; left: 1.0rem; height: 0.2rem; line-height: 0.2rem; font-size: 0.16rem; color: #ffffff; display: flex;}
p.user_level{ background: url("http://gw.alicdn.com/tfscom/TB1B2UNHpXXXXaDaXXXpQsyGpXX-40-32.png_q90") no-repeat 0.025rem; height: 0.2rem; width: 0.5rem; background-size: 0.15rem 0.15rem; margin-left: 0.1rem;}
.user_list{ height: 0.6rem; position: relative; background: #fff; padding-left: 1.0rem; display: flex;}
.user_list div{ flex: 1; padding: 0.15rem 0; font-size: 0.13rem;}
.user_list div a{  color: #aaa;}
.user_order{ background: #ffffff; margin-top: 0.15rem;}
.order_act{ height: 0.6rem; border-bottom: 1px solid #e7e7e7; display: flex;}
.order_act div{ flex: 1; text-align: center; color: #aaa; padding-top: 0.1rem; position: relative;}
.order_act div i{ font-size: 0.22rem;}
.order_act div span{ display: block; position: absolute; min-width: 0.2rem; height: 0.2rem; text-align: center; line-height: 0.08rem; border-radius: 0.1rem; border: 1px solid #ff5000; top: 0.05rem; left: 0.35rem; background: #fff; color: #ff5000; padding: 0.05rem;}
.label_act{ height: 0.4rem; padding-left: 0.15rem; display: flex;}
.ico{ margin-right: 0.1rem;}
.ico-cont{ background: #5090cd; height: 0.26rem; color: #fff; line-height: 0.3rem; text-align: center; margin-top: 0.07rem; border-radius: 0.04rem;}
.ico-cont i{ font-size: 0.17rem;}
div.label_title{ flex: 1;}
div.label_title h1{ width: 100%; font-weight: 400; height: 0.26rem; line-height: 0.26rem; margin-top: 0.07rem; text-align: left; font-size: 0.15rem; color: #aaa; letter-spacing: 1px;}
.label_sub,.label_go{ line-height: 0.4rem; color: #aaa; margin-right: 0.05rem;}
.label_sub,.label_go i{ vertical-align: middle;}
.core_entry{ background: #ffffff; margin-top: 0.15rem;}
div.border_title{ border-bottom: 1px solid #e7e7e7;}
.ico-cart{ background: #e7a200;}
.ico-search{ background: #5090cd;}
.ico-pay{ background: #00aeef;}
</style>
