<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">完善个人资料
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div v-bind:class="{content:'true'}">
      <!--头像-->
      <div v-bind:class="{div_bac:'true'}">
        <div v-bind:class="{div_content:'true'}">头像</div>
        <img src="../assets/logo1.png" v-bind:class="{icon_style:'true'}"/>
      </div>
      <div v-bind:class="{div_line:'true'}"></div>
      <!--昵称-->
      <div v-bind:class="{div_bac:'true'}">
        <div v-bind:class="{div_content:'true'}">昵称</div>
        <input type="text" name="name" placeholder="昵称" v-bind:class="{input_style:'true'}" v-model="formObj.nameString"/>
      </div>
      <div v-bind:class="{div_line:'true'}"></div>
      <!--个人描述-->
      <div v-bind:class="{div_bac:'true'}">
        <div v-bind:class="{div_content:'true'}">个人描述</div>
        <input type="text" name="info" placeholder="个人描述" v-bind:class="{input_style:'true'}" />
      </div>
      <div v-bind:class="{div_line:'true'}"></div>
    </div>
    <br/>
    <br/>
    <!--bottom-->
    <div v-bind:class="{bottom:'true'}" v-on:click="onSubmit" >完成</div>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {
      msg: '哈',
      formObj: {
        customer_id: '',
        nameString: '',
        level: '',
        time: '',
        score: '',
        infoString: '',
        iconLink: ''
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
    onSubmit: function (event) {
      let formData = JSON.stringify(this.formObj)
      console.log(formData)
      this.$http.post('https://blocknew.net/savescore.php', formData).then(function (res) {
        if (res.status === 2000) {
          alert('success')
        } else {
          alert('fail')
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
  }
  .icon_style {
    background: white ;
    height: 30px;
    width: 30px;
    margin-top: 5px;
    margin-right: 20px;
    border-radius: 15px;
    float: right;
  }
  .div_head{
    color:black;
    fontSize:15px;
    background: #f5f5f9 ;
    text-align: left ;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
  }
  .div_bac{
    height:50px;
    line-height: 50px;
    margin: 0 auto;
  }
  .div_content{
    margin: 0 auto;
    background:white;
    height: 32px;
    fontSize:14px;
    margin-left: 10px;
    color: #333333;
    lineHeight:32px;
    float:left;
  }
  .div_right{
    float:right ;
    width: 100px ;
    height: 28px ;
    margin-top: 2px;
    text-align: right;
    margin-right: 10px;
  }
  .input_style{
    float:right ;
    width: 200px ;
    border-width: 0.5px ;
    height: 28px ;
    margin-top: 10px;
    text-align: right;
    margin-right: 10px;
    borderColor: #f5f5f9;
  }
  .div_line{
    background: lightgrey;
    margin-left: 10px;
    height: 1px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
  .bottom {
    margin-bottom: 20px;
    background: #F87415;
    height: 40px;
    color: white;
    border-radius: 7px;
    line-height: 40px;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>
