<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">注册
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div class="content">
      <!--手机号-->
      <div class="div_bac1">
        <input type="number" pattern="[0-9]*" name="name" placeholder="手机号" v-bind:class="{input_phone1:'true'}" v-model="formObj.mobile"/>
        <div v-bind:class="{codebtn:'true'}" >
          <div v-show="show" v-on:click="sendcode">发送验证码</div>
          <div v-show="!show" v-bind:class="{codecss:'true'}" >{{count}} s</div>
        </div>
      </div>
      <!--验证码-->
      <div class="div_bac1">
        <input type="number"  pattern="[0-9]*" name="code" placeholder="验证码" v-bind:class="{input_style1:'true'}" v-model="formObj.code"/>
      </div>
      <!--密码-->
      <div class="div_bac1">
        <input type="number"  pattern="[0-9]*" name="pwd" placeholder="密码" v-bind:class="{input_style1:'true'}" v-model="formObj.pwd"/>
      </div>
      <br/>
      <div class="bottom1" v-on:click="regist" >注册</div>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script type="text/javascript" src="md5.js"></script>
<script>
  export default {
    name: 'Regist',
    data () {
      return {
        msg: '哈',
        show: true,
        count: '',
        timer: null,
        formObj: {
          pwd: '',
          mobile: '',
          code: ''
        }
      }
    },
    methods: {
      back: function (event) {
        this.$router.push('/Login')
      },
      regist: function (event) {
        console.log('---注册---')
        var code = this.formObj.code
        var phone = this.formObj.mobile
        var pwd = this.formObj.pwd

        if (phone == undefined || phone == '') {
          alert('请输入手机号')
          return
        }

        if (phone.length != 11 || phone.indexOf('1') != 0) {
          alert('请输入正确的手机号')
          return
        }

        if (code == undefined || code == '') {
          alert('请输入验证码')
          return
        }

        if (pwd == undefined || pwd == '') {
          alert('请输入密码')
          return
        }

        this.$ajax({
          method: 'post',
          url: this.$customTool.API_Login,
          data: {
            mobile: phone,
            code: this.$md5(code),
            password: this.$md5(pwd)
          }
        }).then((response) => {
          if (response.status === 200) {
            this.loginResutlt = response.data
            this.$customTool.setupLoginData(response.data)

            this.$options.methods.getUserInfo.bind(this)(this.$customTool.MyCustomId)

          } else {
            this.$toast('请求出错')
            console.log(response.data.message)
          }
        })
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
        var phone = this.formObj.mobile
        if (phone == undefined || phone == '') {
          alert('请输入手机号')
          return
        }

        if (phone.length != 11 || phone.indexOf('1') != 0) {
          alert('请输入正确的手机号')
          return
        }
        this.$options.methods.sendCodeTimer.bind(this)()

        this.$ajax({
          method: 'post',
          url: this.$customTool.API_SendSMS,
          data: {
            mobile: phone,
          }
        }).then((response) => {
          if (response.status === 200) {
            console.log('---发送验证码成功---')

          } else {
            this.$toast('发送验证码失败')
            console.log(response.data.message)
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
            this.$toast('注册成功')
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
    margin-top: 15px;
    height:40px;
    line-height: 40px;
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
    height: 28px ;
    margin-top: 2px;
    text-align: left;
    margin-left: 0px;
    padding-left: 10px;
    width: 60%;
    border: none;
  }
  *:focus {
    outline: none;
    background-color: white;
  }
  .input_style1{
    height: 28px ;
    text-align: left;
    width: 90%;
    border: none;
  }
  .content1 {
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
  .bottom2{
    margin-top: 20px;
    background: #F87415;
    height: 40px;
    color: white;
    border-radius: 7px;
    line-height: 45px;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>
