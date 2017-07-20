<template>

  <div class="product">
    <div class="product_bar">

      <top-title :title="title" :back="back"></top-title>

      <div class="tab_bar">
        <mt-tabbar v-model="selected">
          <mt-tab-item v-for="menuList in menuLists" :id="menuList.id" :key="menuList.id" :class="isActive(selected,menuList.id)">
            {{menuList.name}}
          </mt-tab-item>
        </mt-tabbar>
      </div>

      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1" v-if="selected==1">
          <div class="bundlev" >

            <div class="cart-shop">

              <div class="ico">

                <span class="shopIco_A"></span>

              </div>

              <div class="cart-contact">

                <a href="//shop.m.taobao.com/shop/shop_index.htm?shop_id=114276300">asdasdas</a>
                <span class="cart-span-bg"></span>

              </div>

              <div class="cart-state">
                <div>
                  <p>编辑</p>
                </div>
              </div>

            </div>

            <mt-cell-swipe >

              <div class="item-list">

                <div class="item-detail">

                  <div class="cart-item-img">
                    <img src="https://gw.alicdn.com/bao/uploaded/i1/TB1BiDbPXXXXXXvXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q50s150.jpg_.webp">
                  </div>

                  <div class="cart-item-info">

                    <h3>标致新408中网改色308改装508 2008 308S 3008 301拉花装饰贴</h3>

                  </div>

                  <div class="cart-item-price">9.8</div>

                </div>

              </div>

            </mt-cell-swipe>

          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2" v-if="selected==2">
          <a v-for="(item,$index) in lists2" :key="item" class="item" href="javascript:;">
            <div class="item-pic">
              <img v-lazy="item.src" height="100%">
            </div>
            <div class="item-info">
              <div class="item-title">{{item.title}}</div>
              <div class="item-subtitle">{{item.subtitle}}</div>
              <div class="item-labels"></div>
              <div class="item-wrap">
                <div class="item-price">
                  <span>￥{{item.price}}</span>
                  <em>￥{{item.oldPrice}}</em>
                </div>
                <div class="item-action">
                  马上抢
                  <i></i>
                </div>
              </div>
              <div class="item-range">
                <mt-range :value.sync="item.sold" :min="0" :max="item.total" :bar-height="10"></mt-range>
                <span class="item-persent">{{parseInt((item.sold/item.total)*100)}}%</span>
                <div class="item-sold">
                  {{item.sold}}件已抢
                </div>
              </div>
            </div>
          </a>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3" v-if="selected==3">
          <a v-for="(item,$index) in lists3" :key="item" class="item" href="javascript:;">
            <div class="item-pic">
              <img v-lazy="item.src" height="100%">
            </div>
            <div class="item-info">
              <div class="item-title">{{item.title}}</div>
              <div class="item-subtitle">{{item.subtitle}}</div>
              <div class="item-labels"></div>
              <div class="item-wrap">
                <div class="item-price">
                  <span>￥{{item.price}}</span>
                  <em>￥{{item.oldPrice}}</em>
                </div>
                <div class="item-action">
                  马上抢
                  <i></i>
                </div>
              </div>
              <div class="item-range">
                <mt-range :value.sync="item.sold" :min="0" :max="item.total" :bar-height="10"></mt-range>
                <span class="item-persent">{{parseInt((item.sold/item.total)*100)}}%</span>
                <div class="item-sold">
                  {{item.sold}}件已抢
                </div>
              </div>
            </div>
          </a>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4" v-if="selected==4">
          <a v-for="(item,$index) in lists3" :key="item" class="item" href="javascript:;">
            <div class="item-pic">
              <img v-lazy="item.src" height="100%">
            </div>
            <div class="item-info">
              <div class="item-title">{{item.title}}</div>
              <div class="item-subtitle">{{item.subtitle}}</div>
              <div class="item-labels"></div>
              <div class="item-wrap">
                <div class="item-price">
                  <span>￥{{item.price}}</span>
                  <em>￥{{item.oldPrice}}</em>
                </div>
                <div class="item-action">
                  马上抢
                  <i></i>
                </div>
              </div>
              <div class="item-range">
                <mt-range :value.sync="item.sold" :min="0" :max="item.total" :bar-height="10"></mt-range>
                <span class="item-persent">{{parseInt((item.sold/item.total)*100)}}%</span>
                <div class="item-sold">
                  {{item.sold}}件已抢
                </div>
              </div>
            </div>
          </a>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5" v-if="selected==5">
          <a v-for="(item,$index) in lists3" :key="item" class="item" href="javascript:;">
            <div class="item-pic">
              <img v-lazy="item.src" height="100%">
            </div>
            <div class="item-info">
              <div class="item-title">{{item.title}}</div>
              <div class="item-subtitle">{{item.subtitle}}</div>
              <div class="item-labels"></div>
              <div class="item-wrap">
                <div class="item-price">
                  <span>￥{{item.price}}</span>
                  <em>￥{{item.oldPrice}}</em>
                </div>
                <div class="item-action">
                  马上抢
                  <i></i>
                </div>
              </div>
              <div class="item-range">
                <mt-range :value.sync="item.sold" :min="0" :max="item.total" :bar-height="10"></mt-range>
                <span class="item-persent">{{parseInt((item.sold/item.total)*100)}}%</span>
                <div class="item-sold">
                  {{item.sold}}件已抢
                </div>
              </div>
            </div>
          </a>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

  </div>

</template>

<script>

  import Vue from 'vue';
  import topTitle from "../common/topTitle.vue"
  import { TabContainer, TabContainerItem,InfiniteScroll,Lazyload,Range  } from 'mint-ui';
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Range.name, Range);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload);

  export  default{
    name:"product",
    data(){
      return {
        title:"订单管理",
        back:true,
        selected:"1",
        active:"tab-container1",
        lists1:[],
        lists2:[],
        lists3:[],
        lists4:[],
        lists5:[],
        scrollTop:{
          1:0,
          2:0,
          3:0,
          4:0,
          5:0
        },
        menuLists:[
          {
            id:1,
            name:"全部"
          },
          {
            id:2,
            name:"待付款"
          },
          {
            id:3,
            name:"待发货"
          },
          {
            id:4,
            name:"待收货"
          },
          {
            id:5,
            name:"待评价"
          },
        ]
      }
    },
    methods:{
      getInfo(type){
        const _this=this;
        if(_this["lists"+type].length>0){
          var mintContent=document.querySelectorAll(".mint-tab-container")[0];
          mintContent.scrollTop=_this.scrollTop[_this.selected];
          return
        }
        _this.$http.get("http://fsadmin.adpush.cn/api/init.json?type="+type).then(response => {
          _this["lists"+type]=[
            {
              src:"//gw.alicdn.com/bao/uploaded/i2/1878106004980526633/TB28495jR0lpuFjSszdXXcdxFXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"魅蓝Note5大屏快充长续航手机",
              subtitle:"16G版本低至899元",
              price:"899",
              oldPrice:"899",
              total:1500,
              sold:500
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i3/1980106046251598447/TB2AyhGqB0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"泰国进口酸甜百香果12个营养装",
              subtitle:"前30分钟第2份0.9元",
              price:"29",
              oldPrice:"99",
              total:3560,
              sold:3000
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i2/180120325352376508/TB2a5WKeX5N.eBjSZFKXXX_QVXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"1小时快充智能水洗电动剃须刀",
              subtitle:"大部分地区次日达",
              price:"109",
              oldPrice:"499",
              total:2000,
              sold:265
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i1/1938906006426574001/TB2_tYKj3xlpuFjy0FoXXa.lXXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"喜爱多实木梯柜床四个尺寸同价",
              subtitle:"送床垫送抽屉送书架",
              price:"2478",
              oldPrice:"5360",
              total:200,
              sold:19
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i3/134950261445847956/TB24nhstVXXXXbJXXXXXXXXXXXX_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"[1级变频]大1.5P空调 30s速冷",
              subtitle:"降价150，咨询送礼",
              price:"2849",
              oldPrice:"3199",
              total:160,
              sold:18
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i3/1318306045950030496/TB2egQoqmXlpuFjy0FeXXcJbFXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"夏季薄款直筒男士牛仔长裤",
              subtitle:"前20分钟2件59.9元",
              price:"59.9",
              oldPrice:"500",
              total:4800,
              sold:633
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i2/1634806053170165425/TB2fQEuuYBmpuFjSZFAXXaQ0pXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"士力架超值2桶装10种组合可选",
              subtitle:"前500名送抱枕",
              price:"59",
              oldPrice:"133.2",
              total:3600,
              sold:488
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i3/1789906024871664523/TB2hwrFprBmpuFjSZFAXXaQ0pXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"黑科技防水防污短袖t恤/情侣款",
              subtitle:"抢前500名 第2件0元",
              price:"99",
              oldPrice:"198",
              total:1200,
              sold:271
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i4/1135206056957658820/TB2.atZsl0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"蝴蝶系带背心上衣+条纹半身裙",
              subtitle:"前300名送美衣1件",
              price:"75",
              oldPrice:"150",
              total:1300,
              sold:275
            },
            {
              src:"//gw.alicdn.com/bao/uploaded/i4/1528406032546952488/TB269OuohXlpuFjSsphXXbJOXXa_!!0-juitemmedia.jpg_230x230q75s150.jpg_.webp",
              title:"买1送1送同款大码聚拢文胸套装",
              subtitle:"买一送一 59.8/2套",
              price:"59",
              oldPrice:"199",
              total:3500,
              sold:705
            }
          ];
          _this.$nextTick(function () {

          })
        }, response => {
          console.info(response)
        })
      },
      isActive(select,id){
        if(select==id){
          return "is-selected"
        }
      }
    },
    watch:{
      selected: function (val, oldVal) {
        this.active="tab-container"+val;
        this.getInfo(val);
      }
    },
    created(){
      this.getInfo(1)
    },
    mounted(){
      var _this=this;
      var mintContent=document.querySelectorAll(".mint-tab-container")[0];
      mintContent.addEventListener('scroll',winScroll,false);
      function winScroll(e){
        _this.scrollTop[_this.selected]=this.scrollTop;
      }
    },
    components:{
      topTitle
    }
  }

</script>

<style scoped>
  .mint-tab-container-item{ background: #f1f1f1;}
  div.mint-cell-wrapper{ height: 100%;}
  .mint-cell{ background: #f5f5f5; height: 0.7rem;}
  div.cart-item-img img{ vertical-align: top;}
  div.cart-item-info{ padding: 0; height: 100%;}
</style>
