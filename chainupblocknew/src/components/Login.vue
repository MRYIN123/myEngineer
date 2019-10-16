<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">验证码登录
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div class="content">
      <!--手机号-->
      <div class="div_bac1">
        <input type="number" pattern="[0-9]*" name="phone" placeholder="手机号" v-bind:class="{input_phone1:'true'}" v-model="formObj.mobile"/>
        <div v-bind:class="{codebtn:'true'}" >
          <div v-show="show" v-on:click="sendcode">发送验证码</div>
          <div v-show="!show" v-bind:class="{codecss:'true'}" >{{count}} s</div>
        </div>
      </div>
      <!--验证码-->
      <div class="div_bac1">
        <input type="number"  pattern="[0-9]*" name="code" placeholder="验证码" v-bind:class="{input_style1:'true'}" v-model="formObj.code"/>
      </div>
      <!--内容-->
      <div class="content2">登录代表您同意<a href="https://blocknew.net/indexUserNegotiation.html">用户条款</a>和
        <a href="https://blocknew.net/indexUserPrivacyTerm.html">隐私协议</a></div>
      <br/>
      <div class="bottom1" v-on:click="login" >登录</div>
      <div class="bottom2_loin" v-on:click="regist" >去注册</div>
      <div class="bottom2_loin" v-on:click="loginWithAccount" >密码登录</div>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script type="text/javascript" src="md5.js"></script>
<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '哈',
      show: true,
      count: '',
      timer: null,
      formObj: {
        mobile: '',
        code: ''
      },
      loginResutlt: {
        customer_id: '',
        username: '',
        token: ''
      }
    }
  },
  mounted () {
    const router = document.getElementById('router')
    const tabbar = document.getElementById('tabbar')
    router.style.height = document.body.clientHeight + 'px'
    tabbar.style.display = 'none'
  },
  methods: {
    back: function (event) {
      this.$router.push('/Mine')
    },
    login: function (event) {
      console.log('---this.登录---')

      var code = this.formObj.code
      var phone = this.formObj.mobile

      if (phone == undefined || phone == '') {
        alert('请输入手机号')
        return
      }

      if (phone.length != 11 || phone.indexOf('1') != 0) {
        alert('请输入正确的手机号')
        return
      }

      if (code == undefined || code == '') {
        alert('请输入密码')
        return
      }

      var newCode = this.$md5(code)
      alert(newCode)

      this.$ajax({
        method: 'post',
        url: this.$customTool.API_Login,
        data: {
          mobile: phone,
          code: newCode
        }
      }).then((response) => {
        if (response.status === 200) {
          console.log('---登录成功---')
          this.loginResutlt = response.data
          this.$customTool.setupLoginData(response.data)

          this.$options.methods.getUserInfo.bind(this)(this.$customTool.MyCustomId)

        } else {
          alert('error')
          console.log(response.data.message)
        }
      })
    },
    loginWithAccount: function (event) {
      this.$router.push('/LoginWithPwd')
    },
    regist: function (event) {
      this.$router.push('/Regist')
    },
    sendCodeTimer: function (event) {
      const TIME_COUNT = 60;

      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;

        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.$options.methods.setupTimerState.bind(this)()
          }
        }, 1000)
      }
    },

    setupTimerState:function (event) {
      this.show = true;
      clearInterval(this.timer);
      this.timer = null;
    },
    sendcode: function (event) {
      this.$options.methods.sendCodeTimer.bind(this)()
      console.log('---发送验证码'+ this.formObj)
      var phone = this.formObj.mobile

      if (phone == undefined || phone == '') {
        alert('请输入手机号')
        return
      }

      if (phone.length != 11 || phone.indexOf('1') != 0) {
        alert('请输入正确的手机号')
        return
      }

      this.$ajax({
        method: 'post',
        url: this.$customTool.API_SendSMS,
        data: {
          mobile: phone,
        }
      }).then((response) => {
        console.log('---请求成功---')
        console.log(response.data)
        if (response.status === 200) {
          console.log('---请求成功---')

        } else {
          console.log('---请求失败---')
          alert('error')
          console.log(response.data.message)
          console.log('---请求失败结束---')
        }
      })
    },
    getUserInfo: function (customer_id) {
      var para = {
        filters:{limit:1},
        conditions:{id:customer_id}
      }
      console.log('请求userInfo参数为=' + para)

      this.$ajax({
        method: 'post',
        url: this.$customTool.API_SelectCustomer,
        data: para
      }).then((response) => {
        console.log('---请求成功---')
        console.log(response.data)
        if (response.status === 200) {
          console.log('---请求成功---')
          this.$toast('登录成功')
          this.$options.methods.setupTimerState.bind(this)()
          this.$router.push('/Mine')

        } else {
          this.$toast('请求出错')
          console.log(response.data.message)
        }
      })
    }
  }
}
</script>
<style>
  .head{
    background: #F87415;
    height:60px;
    color: white;
    padding-right: 34px;
    line-height: 70px;
    font-size: 20px;
  }
  .headback {
    margin-left: 10px;
    font-size: 20px;
    height: 20px;
    width: 20px;
    margin-top: 25px;
    float: left;
  }
  .content {
    background: #ffffff;
    margin-top: 50px;
  }
  .div_bac1{
    height:40px;
    line-height: 40px;
    margin-top: 15px;
    margin-left: 40px;
    margin-right: 40px;
    border: solid 1px;
    border-radius: 5px;
    border-color: #eeeeee;
    overflow: hidden;
  }
  .codebtn {
    background: white;
    fontSize:14px;
    float: left;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    color: black;
  }
  .codecss {
    text-align: center;
    margin-left: 10px;
    float: left;
    width: 80px;
  }
  .input_phone1{
    float:left ;
    height:40px;
    line-height: 40px;
    margin-top: 0px;
    text-align: left;
    margin-left: 0px;
    padding-left: 10px;
    width: 60%;
    background: white;
    border: none;
  }
  *:focus {
     outline: none;
     background-color: white;
   }
  .input_style1{
    margin-top: 0px;
    height:40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    width: 100%;
    border: none;
    background: white;
  }
  .content2 {
    margin-top: 20px;
    font-size: 14px;
  }
  .bottom1 {
     margin-top: 30px;
     background: #F87415;
     height: 40px;
     color: white;
     border-radius: 7px;
     line-height: 45px;
     margin-left: 40px;
     margin-right: 40px;
   }
  .bottom2_loin{
    margin-top: 20px;
    background: white;
    height: 30px;
    color: gray;
    float: left;
    width: 50%;
    border-radius: 7px;
  }
</style>
