<template>

    <div class="search-page">

      <div class="search-top">

        <div class="search-div">

            <span>宝贝</span>

            <input type="text" placeholder="请输入要查找的宝贝" v-focus v-model="searchName">

        </div>

        <span class="cance-span" @click="$router.go(-1)">取消</span>

      </div>

      <p class="search-all">大家都在搜</p>

      <div class="search-list">

        <ul>

          <li v-for="(list,$index) in lists" @click="getName(list.name)">{{list.name}}</li>

        </ul>

      </div>

    </div>

</template>

<script>

    export default{
      name:"search",
      data(){
        return {
          lists:[
            {
              name:"单肩包男"
            },
            {
              name:"西服"
            },
            {
              name:"名族"
            },
            {
              name:"苹果6"
            },
            {
              name:"休闲皮鞋"
            },
            {
              name:"早秋套装"
            },
            {
              name:"印度神油"
            },
            {
              name:"杜蕾斯"
            },
            {
              name:"冈本"
            },
            {
              name:"保温杯"
            }
          ],
          searchName:""
        }
      },
      directives:{
        focus:{
          inserted: function (el) {
            el.focus()
          }
        }
      },
      methods:{
        getName(name){
            this.searchName=name;
        }
      }
    }

</script>

<style scoped>


</style>
