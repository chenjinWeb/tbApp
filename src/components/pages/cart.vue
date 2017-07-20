<template>

    <div class="tab-content">

      <div class="info_bar">

        <top-title :title="title" :back="back" :length="length"></top-title>

      </div>

      <div class="content">

        <div class="scroll-content" margin-tabbar margin-header>

          <div class="bundlev" v-for="(item,$index) in foodLists" :key="item.id" v-if="item.productInfo.length>0">

            <div class="cart-shop">

              <div class="shopcb">

                <input type="checkbox" class="o-t-cb" :checked="item.checked">

                <label @click="parentCheck(item)"></label>

              </div>

              <div class="ico">

                <span :class="item.imgType"></span>

              </div>

              <div class="cart-contact">

                <a href="//shop.m.taobao.com/shop/shop_index.htm?shop_id=114276300">{{item.soldName}}</a>
                <span class="cart-span-bg"></span>

              </div>

              <div class="cart-state">
                <div v-if="item.isCheper">
                  <p>领券</p>
                </div>
                <div>
                  <p>编辑</p>
                </div>
              </div>

            </div>

            <div class="cart-group" v-if="item.isShow">

              <div class="group-promotion">

                <div class="grounp-img">

                  <img src="//img.alicdn.com/tfs/TB1oh1BRFXXXXb4XFXXXXXXXXXX-160-36.png">

                </div>

                <div class="grounp-text">6.18-6.20每300减60，可跨店</div>

                <div class="grounp-sub">
                  去凑单
                  <span></span>
                </div>

              </div>

            </div>

            <mt-cell-swipe :right="[{
              content: '删除',
              style: { background: 'red', color: '#fff' },
              handler: ()=>pass($index,item.productInfo)
            }]" v-for="(product,$index) in item.productInfo" :key="product">

              <div class="item-list">

                <div class="shopcb cart-shopcb">

                  <input type="checkbox" class="o-t-cb" :checked="product.isCheck">

                  <label @click="childCheck(product,item)"></label>

                </div>

                <div class="item-detail">

                  <div class="cart-item-img">
                    <img :src="product.imgSrc">
                  </div>

                  <div class="cart-item-info">

                    <h3>{{product.title}}</h3>

                    <p>{{product.des}}</p>

                    <div class="cart-item-money">

                      <p>￥{{product.price}}<span>￥{{product.oldPrice}}</span><em>X{{product.number}}</em></p>

                    </div>

                  </div>

                </div>

              </div>

            </mt-cell-swipe>

          </div>

          <div class="allItemv" v-show="length==0">

            <div class="allItemv-img">

              <img src="//gw.alicdn.com/tfscom/TB1xdQSJFXXXXcuXXXXy7S8WFXX-176-176.png">

            </div>
            <div class="allItemv-info">

              <h3>购物车快饿瘪了T.T</h3>
              <p>主人快给我挑点宝贝吧</p>
              <p>
                <a href="//m.taobao.com">去逛逛</a>
              </p>

            </div>

          </div>

        </div>

      </div>

      <div class="sellte">

        <div class="cart-shop cart-sellte">

          <div class="shopcb">

            <input type="checkbox" class="o-t-cb" v-model="allChecked">

            <label @click="allCheck()"></label>

          </div>

          <div class="ico">全选</div>

          <div class="pay">
            <div>
              <p>合计：<span>￥{{totalMoney.toFixed(2)}}</span><br><em v-if="totalExpress==0">不含运费</em><em v-if="totalExpress>0">运费：{{totalExpress.toFixed(2)}}</em></p>
            </div>
          </div>

          <div class="seltte-money" @click="sellteTotal()">
            <div class="">
              <p>结算({{total}})</p>
            </div>
          </div>

        </div>

      </div>

    </div>

</template>

<script>

    import Vue from 'vue'

    import { Checklist,CellSwipe,Toast,MessageBox,Indicator } from 'mint-ui';

    import topTitle from "../common/topTitle.vue"

    import canCreat from "../../canCreat"

    Vue.component(Checklist.name, Checklist);

    Vue.component(CellSwipe.name, CellSwipe);

    export default{
      name:"cart",
      data(){
        return {
          title:"购物车",
          back:false,
          length:0,
          foodLists:[],
          allChecked:false,
          totalMoney:0,
          total:0,
          totalExpress:0
        }
      },
      methods:{

        /*店铺全选*/
        parentCheck(item){
          item.checked=!item.checked;
          var arr=item.productInfo;
          for(var i=0;i<arr.length;i++){
            arr[i].isCheck=item.checked;
          }
          this.isAllCheck(item.checked);
        },

        /*商品单选*/
        childCheck(product,item){
          var number=0;
          product.isCheck=!product.isCheck;
          for(var i=0;i<item.productInfo.length;i++){
            if(item.productInfo[i].isCheck){
              number++;
            }
          }
          if(number==item.productInfo.length){
            item.checked=true;
          }else{
            item.checked=false;
          }
          this.isAllCheck(item.checked)
        },

        /*删除*/
        pass(n,arr){
          MessageBox.confirm('确定删除此商品?').then(action => {
            var _this=this;
            _this.length=0;
            arr.splice(n,1);
            for(var i=0;i<_this.foodLists.length;i++){
              _this.length+=_this.foodLists[i].productInfo.length;
            }
            this.selletMoney()
          },action => {
            //console.info(action)
          });
        },

        /*全选和全不选*/
        allCheck(){
          var _this=this;
          this.allChecked=!this.allChecked;
          for(var i=0;i<_this.foodLists.length;i++){
            _this.foodLists[i].checked=_this.allChecked;
            for(var j=0;j<_this.foodLists[i].productInfo.length;j++){
              this.foodLists[i].productInfo[j].isCheck=_this.allChecked;
            }
          }
          this.selletMoney()
        },

        /*是否全选和全不选*/
        isAllCheck(check){
          var num=0;
          var _this=this;
          if(check){
            for(var i=0;i<_this.foodLists.length;i++){
              if(_this.foodLists[i].checked){
                num++;
              }
            }
            if(num==_this.foodLists.length){
              _this.allChecked=true;
            }
          }else{
            _this.allChecked=false;
          }
          this.selletMoney()
        },

        /*结算金钱和运费*/
        selletMoney(){
          var _this=this;
          _this.totalMoney=0;
          _this.totalExpress=0;
          _this.total=0;
          for(var i=0;i<_this.foodLists.length;i++){
            for(var j=0;j<_this.foodLists[i].productInfo.length;j++){
              if(_this.foodLists[i].productInfo[j].isCheck){
                _this.total++
                _this.totalMoney+=((_this.foodLists[i].productInfo[j].price*1)*(_this.foodLists[i].productInfo[j].number*1)+_this.foodLists[i].productInfo[j].express)
                _this.totalExpress+=_this.foodLists[i].productInfo[j].express
              }
            }
          }
        },

        sellteTotal(){

          if(this.totalMoney==0){
            Toast("您还没有选择宝贝哦！");
          }else{
            var _this=this;
            //提交数据给后台
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
            });
            setTimeout(function () {
                window.localStorage.setItem("productInfo",JSON.stringify(_this.foodLists))
                Indicator.close()
                _this.$router.push({
                  name: 'submit'
                })
            },500)
          }
        }
      },
      watch:{

      },
      mounted(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        this.$http.get("../init.json").then(response => {
            Indicator.close()
        },response => {
            Indicator.close()
            var _this=this;
            _this.foodLists=[
              {
                id:"11",
                imgType:"shopIco_A",
                soldName:"凌振汽车用品专营",
                isCheper:true,
                isShow:true,
                href:"//shop.m.taobao.com/shop/shop_index.htm?shop_id=114276300",
                checked:false,
                productInfo:[
                  {
                    imgSrc:"https://gw.alicdn.com/bao/uploaded/i1/TB1BiDbPXXXXXXvXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q50s150.jpg_.webp",
                    title:"雪铁龙C4世嘉 C4LC5 C3-XR 全新爱丽舍改装专用轮毂螺丝保护盖",
                    des:"单个价",
                    price:"1.00",
                    oldPrice:"3.00",
                    isCheck:false,
                    express:5,
                    number:1
                  },
                  {
                    imgSrc:"https://gw.alicdn.com/bao/uploaded/i4/2259519477/TB25t21aGbyQeBjy1XbXXa9yXXa_!!2259519477.png_200x200.jpg_.webp",
                    title:"标致新408中网改色308改装508 2008 308S 3008 301拉花装饰贴",
                    des:"新408中网三色 6条/套",
                    price:"9.8",
                    oldPrice:"19.9",
                    isCheck:false,
                    express:0,
                    number:1
                  }
                ]
              },
              {
                id:"22",
                imgType:"shopIco_B",
                soldName:"兰爵灯饰",
                isCheper:false,
                isShow:false,
                href:"//shop.m.taobao.com/shop/shop_index.htm?shop_id=116076710",
                checked:false,
                productInfo:[{
                  imgSrc:"https://gw.alicdn.com/bao/uploaded/i1/2352651428/TB2uwCzlpXXXXaSXpXXXXXXXXXX_!!2352651428.jpg_200x200q50s150.jpg_.webp",
                  title:"台灯卧室床头现代简约台灯欧式创意个性调光台灯中式装饰酒店台灯",
                  des:"调光开关;镂空富贵金+3瓦led",
                  price:"58.00",
                  oldPrice:"116.00",
                  isCheck:false,
                  express:0,
                  number:1
                }]
              }
            ];
            for(var i=0;i<_this.foodLists.length;i++){
              _this.length+=_this.foodLists[i].productInfo.length;
            }
        })
      },
      components:{
        topTitle
      },
      beforeRouteEnter(to,from,next){
        if(canCreat()){
          next();
        }
      },
    }

</script>

<style>
  .mint-cell{ padding-left: 0.06rem; height: 1.0rem; border-bottom: 1px solid #e5e5e5;}
  a.mint-cell-swipe-button{ line-height: 1.0rem;}
  .mint-cell-title{ display: none;}
  .mint-cell-wrapper{ height: 100%;}
  .mint-cell-value{ height: 100%; width: 100%}
</style>
