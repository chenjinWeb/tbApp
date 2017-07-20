<template>

    <div class="menu">

      <div class="vertical-view">

        <div class="menu-view">

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar">

            <span>天猫</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar">

            <span>聚划算</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar">

            <span>天猫国际</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar">

            <span>外卖</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar">

            <span>天猫超市</span>

          </div>

        </div>

        <div class="menu-view">

          <div class="menu-lists">

            <img src="https://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png">

            <span>充值中心</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1LNMxPXXXXXbhaXXXXXXXXXXX-183-129.png">

            <span>飞猪旅行</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar">

            <span>领金币</span>

          </div>

          <div class="menu-lists">

            <img src="https://img.alicdn.com/tfs/TB1Kxe8QFXXXXbSXVXXXXXXXXXX-183-129.png">

            <span>拍卖</span>

          </div>

          <div class="menu-lists">

            <img src="https://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar">

            <span>分类</span>

          </div>

        </div>

      </div>

    </div>

</template>

<script>



    export  default{
      name:"menu",
      data(){
        return {
          menuLists:[]
        }
      },
      methods: {
        submitForm () {
          this.$http.get("./../assets/api/init.json").then(response => {
            console.info(response)
          }, response => {
            console.info(response)
          })
        }
      },
      mounted(){
          /*this.submitForm()*/
      }
    }

</script>

<style scoped>


</style>
