<template>

    <div>
      <div class="bar-button" @click="$router.go(-1)" v-if="back">
          <span class="button-inner">
              <i class="icon">&#xe662;</i>
          </span>
      </div>
      <div class="title-h">
        <div class="toolbar-title">
          {{title}}
          <span v-if="length">({{length}})</span>
        </div>
      </div>
    </div>

</template>

<script>

    export default{
      name:"title",
      props:{
        title:{
          type:String,
          default:""
        },
        back:{
          type:Boolean,
          default:false
        },
        length:{
          type:Number,
          default:0
        }
      }
    }

</script>

<style scoped>


</style>
