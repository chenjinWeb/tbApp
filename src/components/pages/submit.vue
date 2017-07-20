<template>

  <div class="product">

    <div class="info_bar">

      <top-title :title="title" :back="back" :length="length"></top-title>

    </div>

    <div class="content">

      <div class="scroll-content" margin-tabbar margin-header>

        <div class="submit-adress" @click="address()">

          <div class="submit-left-img" v-if="selectAdd">

            <img src="../../assets/images/address.png">

          </div>

          <div class="submit-info" v-if="selectAdd">

            <div class="submit-name-number">

              <div class="submit-name">收货人：{{selectAdd.name}}</div>

              <div class="submit-number">{{selectAdd.mobile}}</div>

            </div>

            <div class="submit-detail">

              <p>收货地址：{{selectAdd.areaName+selectAdd.privinceName+selectAdd.cityName+selectAdd.address}}</p>

            </div>

            <div class="submit-text">(收货不便时，可选择免费代收服务)</div>

          </div>

          <div class="submit_add_add" v-if="!selectAdd">
            <img src="../../assets/images/add_add.png">
          </div>

        </div>

        <div class="submit-bg"></div>

        <div v-for="(item,$index) in productsInfo" v-if="isShowInfo(item.productInfo)">

          <div class="submit-product">

            <a class="submit-subtitle-taobao"  :class="item.imgType" :href="item.href" >{{item.soldName}}</a>

          </div>

          <div class="submit-des" v-for="(product,$index) in item.productInfo" v-if="product.isCheck">

            <div class="submit-des-img">
              <img :src="product.imgSrc">
            </div>

            <div class="submit-des-text">

              <div class="submit-des-title">{{product.title}}</div>

              <div class="submit-des-subdes">{{product.des}}</div>

              <div class="submit-des-commit">发货时间：卖家承诺24小时内发货</div>

              <div class="submit-commit-money">
                <span>￥{{product.price}}</span>
                <em>X{{product.number}}</em>
              </div>

            </div>

          </div>

        </div>

        <!--配送方式-->
        <div class="submit-yun" @click="showAction()">

          <div class="submit-transform">
            <div>配送方式</div>
            <div class="submit-transform-right">
              <span>快递 {{totalExpress? totalExpress.toFixed(2) : '免邮'}}</span>
            </div>
          </div>
        </div>

        <!--运费险-->
        <div class="submit-yun">

          <div class="submit-transform">
            <div>运费险</div>
            <div class="submit-transform-right">
              <span>未选择</span>
            </div>
          </div>

        </div>

        <!--运费险投保须知-->
        <div class="submit-yun" @click="freight()">

          <div class="submit-transform submit-yiwen">
            <div>运费险投保须知</div>
          </div>

        </div>

        <!--买家留言-->
        <div class="submit-yun">

          <div class="submit-transform no-bg">
            <div>运费险投保须知</div>
            <div class="submit-input">

              <input type="text" placeholder="对本次交易说明" v-model="mark">

            </div>
          </div>

        </div>

        <!--多少件-->
        <div class="submit-yun">

          <div class="submit-transform no-bg">
            <div class="submit-transform-right">
              <span>共{{total}}件商品  小计：<em>￥</em><strong>{{totalMoney.toFixed(2)}}</strong><i></i></span>
            </div>
          </div>

        </div>

        <!--匿名购买-->
        <div class="submit-yun">
          <div class="submit-transform no-bg">
            <div>匿名购买</div>
            <div class="submit-transform-right submit-transform-btn">
              <mt-switch v-model="value"></mt-switch>
            </div>
          </div>
        </div>

        <mt-actionsheet v-show="sheetVisible" :actions="actions" cancelText="">
        </mt-actionsheet>

      </div>

    </div>

    <div class="submit-sellte">

      <div class="submit-money">
        合计:
        <span><em>￥</em>{{totalMoney.toFixed(2)}}<i></i></span>
      </div>

      <div class="submit-btn">提交订单</div>

    </div>

    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>

  import Vue from "vue"

  import topTitle from "../common/topTitle.vue"

  import { Switch,Actionsheet,Toast, MessageBox } from 'mint-ui';

  Vue.component(Switch.name, Switch);

  Vue.component(Actionsheet.name, Actionsheet);

  export default {
    name:"submit",
    data(){
      return {
        title:"确认订单",
        back:true,
        length:0,
        value:true,
        selectAdd:null,
        sheetVisible: false,
        totalMoney:0,
        totalExpress:0,
        total:0,
        mark:"",
        productsInfo:[],
        actions: [
          {
            name: '商家快递包邮',
            method:this.showToast
          },
          {
            name: '商家快递不包邮',
            method:this.showMsgbox
          },
          {
            name: '取消',
            method:this.cancelBox
          }
        ]
      }
    },
    methods:{
      //判断是否
      isShowInfo(item){
        const length=item.length;
        let number=0;
        item.forEach(function (_item,_index,_array) {
          if(_item.isCheck){
            number++
          }
        })
        if(number){
          return true
        }else{
          return false
        }
      },

      //计算总价，运费
      selletMoney(){
        var _this=this;
        _this.totalMoney=0;
        _this.total=0;
        _this.totalExpress=0;
        for(var i=0;i<_this.productsInfo.length;i++){
          for(var j=0;j<_this.productsInfo[i].productInfo.length;j++){
            if(_this.productsInfo[i].productInfo[j].isCheck){
              _this.total++
              _this.totalMoney+=((_this.productsInfo[i].productInfo[j].price*1)*(_this.productsInfo[i].productInfo[j].number*1)+_this.productsInfo[i].productInfo[j].express)
              _this.totalExpress+=_this.productsInfo[i].productInfo[j].express
            }
          }
        }
      },

      showAction(){
        this.sheetVisible=true;
      },

      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },

      cancelBox(){
        this.sheetVisible=false;
      },

      freight(){
        this.title="运费险投保须知"
        this.$router.push({
          name:"freight"
        })
      },

      //更换地址
      address(){
        this.title="选择收货地址";
        this.$router.push({
          name:"address"
        })
      }

    },
    mounted(){
      this.productsInfo=JSON.parse(window.localStorage.getItem("productInfo"));
      this.selletMoney();
      this.selectAdd=JSON.parse(window.localStorage.getItem("selectAdd"));
    },
    components:{
      topTitle
    },
    beforeRouteUpdate  (to, from, next){
      var name=to.name;
      if(name == "freight"){
        this.title="运费险投保须知"
      }else if(name == "submit"){
        this.selectAdd=JSON.parse(window.localStorage.getItem("selectAdd"));
        this.title="确认订单"
      }
      next()
    }
  }

</script>

<style>
  div.submit{ width: 100%; height: 100%; background: #fff; position: absolute; z-index: 100;}
  .mint-switch-input:checked + .mint-switch-core{ border-color: #4bd963; background-color: #4bd963; }
</style>
