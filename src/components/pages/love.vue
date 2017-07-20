<template>

    <div class="love">
      <div class="love_title">
          <img src="//img.alicdn.com/tps/TB1swWZLpXXXXbnXVXXXXXXXXXX-40-40.png">
          <span>猜你喜欢</span>
          <p>实时推荐最适合你的宝贝</p>
      </div>

      <div id="guessitem">

        <section>

          <div class="single_titem" v-for="(item,index) in singleLists" @click="getInfo()">

            <div class="single_img">

                <img :src="item.src">

            </div>

            <div class="single_text">{{item.name}}</div>

            <div class="single_money">

              <span>￥</span>
              {{item.price}}

            </div>

          </div>

        </section>

      </div>



    </div>

</template>

<script>

    export default{
      name:"love",
      data(){
        return {
          singleLists:[
            {
              src:"//img.alicdn.com/bao/uploaded/i2/514255741/TB2nj.GsFXXXXb.XpXXXXXXXXXX_!!514255741.jpg_q50.jpg",
              name:"[为你推荐]振信家用蔬菜水果手动甩干机沥水篮脱水篮脱水器沙拉手动滤水篮",
              price:"17.36"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i1/2082553778/TB2karVuXXXXXbcXpXXXXXXXXXX_!!2082553778.jpg_q50.jpg",
              name:"[为你推荐]振信家用蔬菜水果手动甩干机沥水篮脱水篮脱水器沙拉手动滤水篮",
              price:"85.6"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i3/TB1UtW0JpXXXXceXVXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
              name:"[为你推荐]Digital Kitchen & Lab Gram Electronic Spoon Weight Scale",
              price:"96.4"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i2/920637093/TB2PHlml3NlpuFjy0FfXXX3CpXa_!!920637093.jpg_q50.jpg",
              name:"[为你推荐]手工高密地方名吃拤饼单饼一份20张包邮 承接定制各种规格面饼",
              price:"51.2"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i1/899273281/TB2zr8Ca86xQeBjSszgXXXGPFXa_!!899273281.jpg_q50.jpg",
              name:"[为你推荐]【天天特价】克美帝双层煮蛋器蒸蛋羹奶瓶消毒热牛奶350W自动断电",
              price:"36.2"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i3/TB15qzlIVXXXXasXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
              name:"[为你推荐]天天特价浴室置物架卫生间储物架层架厕所厨房收纳架淋浴头挂篮",
              price:"25.6"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i3/1083216635/TB2yrudrCFjpuFjSszhXXaBuVXa_!!1083216635.jpg_q50.jpg",
              name:"[为你推荐]现代新中式京瓷苏梨家具刺猬紫檀沙发花梨木实木客厅红木沙发组合",
              price:"7600.0"
            },
            {
              src:"//img.alicdn.com/bao/uploaded/i3/1886862406/TB2UVNXaiGO.eBjSZFEXXcy9VXa_!!1886862406.jpg_q50.jpg",
              name:"[为你推荐]酒店实木正方形便当盒分格便当盒学生餐盒双层三层多层日式保温盒",
              price:"138.0"
            }
          ]
        }
      },
      methods:{
        getInfo(){
          //alert(1)
          this.$emit("refreshbizlines")
        }
      }
    }

</script>

<style scoped>


</style>
