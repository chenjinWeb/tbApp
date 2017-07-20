<template>
    <div class="item-login">

      <!--logo-->
      <div class="item-img"></div>

      <!--输入框-->
      <div class="item-submit">

        <div class="item-input">

          <input type="text" placeholder="手机号/邮箱/会员名" v-model="loginName">

          <span v-if="loginName" @click="deleteText('loginName')">X</span>

        </div>

        <div class="item-input item-bottom">

          <input type="password" placeholder="请输入密码" v-model="passWord">

          <span v-if="passWord" @click="deleteText('passWord')">X</span>

        </div>

      </div>

      <!--注册忘记密码-->
      <div class="item-regist">

        <a class="fl">免费注册</a>

        <a class="fr">忘记密码</a>

      </div>

      <!--登录按钮-->
      <div class="item-in" @click="loginIn()">登录</div>

      <!--短信验证-->
      <div class="item-in item-message">短信验证码登录</div>

    </div>

</template>

<script>

    export default{
      name:"login",
      data(){
        return {
          loginName:"",
          passWord:""
        }
      },
      methods:{
        deleteText(name){
          this[name]="";
        },
        loginIn(){
          const data={
            logName:this.loginName,
            logPwd:this.passWord,
            vertCode:"sdaa"
          }
          const _this=this;
          _this.$http.post("http://fsadmin.adpush.cn//login",data).then(response=> {
            if(response.data.Code==500){
              _this.$router.push({
                name:'index'
              })
              window.localStorage.user=JSON.stringify({name:_this.loginName})
            }
          }, response => {

          })
        }
      }
    }

</script>

<style scoped>


</style>
