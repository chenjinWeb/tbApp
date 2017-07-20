<template>

  <div class="header">

    <div class="toolbar">

      <img src="../../assets/images/logo.png">

      <div class="search" @click="emitSearch()">

        <i class="icon">&#xe6d1;</i>
        <span>{{title}}</span>

      </div>

      <div class="bar-button">
          <span class="button-inner" v-if="router == -1">
              <i class="icon">&#xe692;</i>
          </span>
      </div>

      <div class="bar-button">
        <router-link to="" class="button-inner" replace></router-link>
        <span></span>
        <span class="button-inner"> <i class="icon" ></i> </span>
      </div>

     <!-- <div class="title-h">
        <div class="toolbar-title" v-if="title">
          <i class="icon">&#xe607;</i>
          {{title}}
        </div>
      </div>-->

    </div>

  </div>

</template>

<script>

    export default{
      name:"mHeader",
      props:{
        title:{
          type:String,
          defalut:""
        },
        router:{
          type:Number,
          defalut:0
        }
      },
      methods:{
        emitSearch(){
          this.$emit("search")
        }
      }
    }

</script>

<style scoped>


</style>
