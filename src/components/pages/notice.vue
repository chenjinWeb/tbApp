<template>

    <div class="notice">

      <div class="no-left">

        <img src="http://gw.alicdn.com/tps/i3/TB12wM3HXXXXXbxapXXdFmWHFXX-207-60.png?imgtag=avatar">

      </div>

      <div class="no-right">
        <span class="span-icon">最新</span>
        <span class="no-des">{{info}}</span>
      </div>
    </div>

</template>

<script>

    export default{
      name:"notice",
      data(){
        return {
          info:"追风者全新SFF机箱太个性：一根方柱子"
        }
      },
      methods:{
        getInfo(){
          const _this=this;
          var data={
            campaignIds:15,
            batch:0
          }
          setTimeout(function (){
            _this.$http.post("http://localhost:3100",data).then(response => {
              if(response.data.code==200){
                _this.info="自行车呢，买自行车你，没招贤纳才吗"
              }
            }, response => {
              console.info(response)
            })
          },3000)
        }
      },
      mounted(){
        this.getInfo()
      }
    }

</script>

<style scoped>


</style>
