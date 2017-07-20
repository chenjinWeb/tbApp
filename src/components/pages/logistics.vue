<template>

  <div class="product">

    <div class="info_bar">

      <top-title :title="title" :back="back" :length="length"></top-title>

    </div>

    <div class="content">

      <h2>订单商品</h2>

      <div class="content_product_info">

        <div class="content_product_left">

          <img src="//gw.alicdn.com/bao/uploaded/i3/TB13AdsRpXXXXaGapXXXXXXXXXX_!!0-item_pic.jpg">

        </div>

        <div class="content_product_right">

          <p>【天猫超市】 好雅 33cm防爆加厚塑料盆洗脸盆洗衣盆 颜色随机</p>

          <span>共13件</span>

        </div>

      </div>

      <p class="content_text">物流公司 顺丰快递</p>
      <p class="content_text">运单号码 605000127782912</p>

      <div class="logis-detail">

        <ul>

          <li v-for="(logis,$index) in logisArr">

            <p class="logis-detail-date">{{logis.date}}</p>

            <div class="logis-detail-d" v-for="(info,$indexes) in logis.infos" :class="activeClass($index,$indexes)">

              <div class="logis-detail-content">

                <p class="logis-detail-content-time">{{info.time}}</p>
                <p class="logis-detail-content-detail">{{info.detail}} </p>

              </div>

            </div>

          </li>

        </ul>

      </div>

      <div class="noInfo" v-show="!logisArr.length>0">

        <div class="noData"></div>

        <p>暂时没有物流信息</p>

      </div>

    </div>

  </div>

</template>

<script>

    import topTitle from "../common/topTitle.vue"

    export default{
      name:"logistics",
      data(){
        return {
          title:" 查看物流",
          back:true,
          length:0,
          logisArr:[
            {
              date:"06-14",
              infos:[
                {
                  time:"14:01",
                  detail:" 漕河泾(本部) 妥投,业务员:李正国 "
                },
                {
                  time:"13:23",
                  detail:"  漕河泾(本部)出班  "
                },
                {
                  time:"11:57",
                  detail:"  上海处理中心 封发,发往漕河泾(本部),业务员:文件406  "
                },
                {
                  time:"07:11",
                  detail:"  上海处理中心开拆,业务员：05007  "
                },
                {
                  time:"03:02",
                  detail:"  南京速递物流航空集散中心 封发,发往上海处理中心,业务员:王亮  "
                }
              ]
            },
            {
              date:"06-13",
              infos:[
                {
                  time:"22:56",
                  detail:"  南京速递物流航空集散中心开拆,业务员：刘世宁  "
                },
                {
                  time:"20:37",
                  detail:"   武汉航空处理中心 封发,发往南京速递物流航空集散中心,业务员:陈元勤   "
                },
                {
                  time:"20:12",
                  detail:"   武汉航空处理中心开拆,业务员：632   "
                },
                {
                  time:"16:34",
                  detail:"   仙桃市邮政速递物流公司 封发,发往武汉航站,业务员:胡海涛   "
                },
                {
                  time:"16:15",
                  detail:"   湖北省邮政速递物流有限公司仙桃市城北揽投部 收寄  "
                }
              ]
            }
          ]
        }
      },
      methods:{
        activeClass(index,indexes){
          if(index==0 && indexes==0){
            return "logis-detail-first"
          }
        }
      },
      components:{
        topTitle
      }
    }

</script>

<style>
.tabs{ background: #eee;}
.content{ padding: 0.32rem 0.1rem; text-align: left; overflow: scroll;}
.content h2{ font-size: 0.14rem; font-weight: normal; margin-top: 0.3rem;}
.content_product_info{ width: 100%; height: 0.8rem; background: #fff; border-bottom-left-radius: 0.1rem; border-bottom-right-radius: 0.1rem; box-shadow: #ccc 1px 2px 5px; margin-top: 0.1rem; padding: 0.1rem; display: flex;}
.content_product_left{ width: 0.6rem; height: 0.6rem; border: 1px solid #ccc;}
.content_product_left img{ width: 90%; height: 90%; margin: 5%;}
.content_product_right{ margin-left: 0.1rem;flex: 1;}
.content_product_right p{font-size: 0.12rem; height: 0.4rem; line-height: 0.2rem;overflow:hidden;  text-overflow:ellipsis;  display:-webkit-box;  -webkit-box-orient:vertical; -webkit-line-clamp:2; }
.content_text{ font-size: 0.14rem; margin-top: 0.1rem;}
.logis-detail ul li:first-child p.logis-detail-date{ color: #F40;}
div.logis-detail-first{ border-left: 2px solid #F40;}
.logis-detail-first .logis-detail-content{ background: #F40; color: #fff;}
.logis-detail-first .logis-detail-content:after{ border-bottom: 10px solid #F40;}
.logis-detail ul li p.logis-detail-date{ width: 0.6rem; text-align: left; font-size: 0.14rem; padding: 0.1rem 0 0.1rem 0.05rem; color: #666;}
.logis-detail-d{ margin-left: 0.25rem; border-left: 2px solid #ccc; padding: 0.1rem 0 0.1rem 0.2rem; color: #666; position: relative;}
.logis-detail-d:after{    content: '';
  display: inline-block;
  position: absolute;
  left: -0.06rem;
  top: 30px;
  width: 0.1rem;
  height: 0.1rem;
  -webkit-border-radius: 10px;
  background: #BDBDBD;
  border: 2px solid #EEE}
div.logis-detail-first:after{background: #F40;}
.logis-detail-content{ display: flex; font-size: 0.12rem; background: #ddd; padding: 0.08rem 0.12rem; position: relative; border-radius: 0.02rem;}
.logis-detail-content:after{
  content: '';
  display: inline-block;
  position: absolute;
  left: -10px;
  top: 18px;
  border-left: 10px solid #EEE;
  border-bottom: 10px solid #ddd;
}
.logis-detail-content-time{ width: 0.5rem; line-height: 0.2rem;}
.logis-detail-content-detail{ flex: 1; line-height: 0.2rem;}
.noInfo{ text-align: center; margin-top: 0.5rem;}
.noData{  height: 1.0rem; background: url("./../../assets/images/noData.png") no-repeat center center; background-size: 1.0rem 1.0rem; margin-bottom: 0.1rem;}
</style>
