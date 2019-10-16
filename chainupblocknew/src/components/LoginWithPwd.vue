<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">密码登录
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div v-bind:class="{content:'true'}">
      <!--手机号-->
      <div v-bind:class="{div_bac2:'true'}">
        <input type="number"  pattern="[0-9]*" name="name" placeholder="手机号" v-bind:class="{input_phone2:'true'}" v-model="formObj.phone"/>
      </div>
      <!--验证码-->
      <div v-bind:class="{div_bac2:'true'}">
        <input type="text" name="pwd" placeholder="密码" v-bind:class="{input_style2:'true'}" v-model="formObj.pwd"/>
      </div>
      <br/>
      <div v-bind:class="{bottom2:'true'}" v-on:click="regist" >登录</div>
      <br/>
    </div>
    <br/>
    <br/>
  </div>
</template>

<!--<script type="text/javascript" src="md5.js"></script>-->

<script >
export default {
    name: 'LoginWithPwd',
    data () {
      return {
        msg: '哈',
        formObj: {
          phone: '',
          pwd: ''
        },
        loginResutlt: {
          customer_id: '',
          username: '',
          token: ''
        }
      }
    },
    methods: {
      back: function (event) {
        this.$router.push('/Login')
      },
      regist: function (event) {

        var phone = this.formObj.phone
        var pwd = this.formObj.pwd

        if (phone == undefined || phone == '') {
          alert('请输入手机号')
          return
        }

        if (phone.length != 11 || phone.indexOf('1') != 0) {
          alert('请输入正确的手机号')
          return
        }

        if (pwd == undefined || pwd == '') {
          alert('请输入密码')
          return
        }

        var newPwd = this.$md5(pwd)
        newPwd = newPwd.toUpperCase()

        console.log('---this.username='+ phone)
        console.log('---this.新pwd=' + newPwd)

        this.$ajax({
          method: 'post',
          url: this.$customTool.API_Login,
          data: {
            username: phone,
            password: newPwd
          }
        }).then((response) => {
          if (response.status === 200) {
            this.loginResutlt = response.data
            this.$customTool.setupLoginData(response.data)

            if (this.$customTool.isLogin()) {
              this.$options.methods.getUserInfo.bind(this)(this.$customTool.MyCustomId)
            }else {
              alert('customer_id为空')
            }

          } else {
            alert('error')
            console.log(response.data.message)
          }
        })
      },
      getUserInfo: function (customer_id) {
        var para = {
          filters:{limit:1},
          conditions:{id:customer_id}
        }

        this.$ajax({
          method: 'post',
          url: this.$customTool.API_SelectCustomer,
          data: para
        }).then((response) => {
          console.log('用户userinfo=')
          console.log(response.data)
          if (response.status === 200) {
            this.$customTool.setupCustomerData(response.data[0])
            this.$toast('登录成功')
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
  .div_bac2{
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
  .input_phone2{
    float:left ;
    height: 28px ;
    margin-top: 2px;
    text-align: left;
    margin-left: 10px;
    width: 90%;
    border: none;
  }
  .input_style2{
    height: 28px ;
    text-align: left;
    width: 90%;
    border: none;
  }
  .bottom2 {
    margin-top: 30px;
    background: #F87415;
    height: 40px;
    color: white;
    border-radius: 7px;
    line-height: 45px;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>
