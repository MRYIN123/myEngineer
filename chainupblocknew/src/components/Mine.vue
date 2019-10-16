<template>
  <div id="app1" v-bind:class="{app1:'true'}">
    <!--个人中心-->
    <div v-bind:class="{headScr:'true'}">
      <img v-bind:class="{head_image1:'true'}" :src="this.$customTool.getAvatar()" />
      <div v-bind:class="{head_user:'true'}"  v-on:click="gotoUserclick">{{ (this.$customTool.isLogin() ? this.$customTool.MyCustomName : '登录/注册') }}</div>
    </div>
    <!--功能-->
    <div class="headtitle"></div>
    <div class="titlechild"  v-on:click="publishClick">发布</div>
    <div class="line11"></div>
    <div class="titlechild"  v-on:click="hezuo">我的消息</div>
    <div class="line11"></div>
    <div class="titlechild"  v-on:click="aboutus">关于我们</div>
    <div class="line11"></div>
    <!--<div class="titlechild"  v-on:click="logout" >退出登录</div>-->
    <!--<div class="line11"></div>-->
    <br/>
  </div>
</template>

<script>
  export default {
    name: 'Mine',
    data () {
      return {
        msg: '我的界面',
        selectIndex: '0'
      }
    },
    methods: {
      gotoUserclick: function (event) {
        if (this.$customTool.isLogin() == false) {
          this.$router.push({path: '/Login'})
        }else {
//          this.$router.push({path: '/UserCenter'})
        }
      },
      publishClick: function (event) {
        if (this.$customTool.isLogin() == false) {
          this.$router.push({path: '/Login'})
        }else {
          this.$router.push({path: '/Publish'})
        }
      },
      aboutus: function (event) {
        this.$router.push({path: '/AboutUs'})
      },
      hezuo: function (event) {
        this.$toast('功能正在开发中')
      },
      morefunc: function (event) {
        window.location.href="http://blocknew.net";
      },
      logout: function (event) {
        this.$customTool.MyCustomId = ''
        this.$customTool.MyCustomName = ''
        this.$customTool.MyCustomToken = ''
        this.$customTool.MyCustomAvatar = ''
      }
    },
    mounted () {
      const router = document.getElementById('router')
      const tabbar = document.getElementById('tabbar')
      router.style.height = document.body.clientHeight - 50 + 'px'
      tabbar.style.display = 'block'
    }
  }
</script>
<style>
  .app1{
    margin: 0 auto;
  }
  .headScr{
    background: #F87415;
    height: 160px;
    margin: 0 auto;
    width: 100%;
    padding: 0px;
  }
  .head_image1{
    height: 80px;
    width: 80px;
    margin: 0 auto;
    float: left;
    margin-top: 40px;
    border-radius: 40px;
    margin-left: 40px;
    background: white;
  }
  .head_user {
    float: left;
    color: white;
    line-height: 50px;
    height: 50px;
    font-size: 22px;
    margin-left: 20px;
    text-align: left;
    margin-top: 60px;
    font-weight: bold;
  }
  .titlechild{
    background: white;
    color: black;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    text-align: left;
    margin-left: 20px;
  }
  .headtitle{
    text-align: left;
    background: #f5f5f9;
    color: black;
    height: 20px;
    font-size: 15px;
    padding-left: 10px;
  }
  .line11{
    margin: 0px;
    height: 1px;
    background: lightgray;
  }
</style>
