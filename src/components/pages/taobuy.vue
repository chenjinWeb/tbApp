<template>

    <div class="buy">

      <div class="buy_left" @click="goBuy()">

        <div class="buy_sell">

          <span class="buy_time">00</span>
          <span class="buy_dot">:</span>
          <span class="buy_time">{{minute}}</span>
          <span class="buy_dot">:</span>
          <span class="buy_time">{{second}}</span>

        </div>

      </div>

      <div class="buy_top">

        <div class="buy_text"></div>
        <div class="buy_img"></div>

      </div>

      <div class="buy_bottom">
        <div class="buy_text"></div>
        <div class="buy_img"></div>
      </div>

    </div>

</template>

<script>

    export default{
      name:"buy",
      data(){
        return {
          hour:"00",
          minute:"05",
          second:"59"
        }
      },
      methods:{
        ShowCountDown: function (){
          const _this=this;
          let timers=null;
          timers=setInterval(function (){
            _this.second=_this.second*1;
            _this.second--;
            if(_this.second<10){
              _this.second="0"+_this.second
            }
            if(_this.second=="00"){
              _this.second=59;
              _this.minute=_this.minute*1;
              _this.minute--;
              if(_this.minute<10){
                _this.minute="0"+_this.minute
                console.info(_this.minute)
                if(_this.minute=="0-1"){
                  _this.minute="00";
                  _this.second="00";
                  clearInterval(timers)
                }
              }
            }
          },1000)
        },
        goBuy(){
          this.$router.push({name:"product"})
        }
      },
      mounted(){
          this.ShowCountDown()
      }
    }

</script>

<style scoped>


</style>
