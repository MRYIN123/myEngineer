<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">详情
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div v-bind:class="{content:'true'}">
      <!--背景图-->
      <!--<img src="../assets/bac1.png" width="100%" height="150px"/>-->
      <!--个人logo名字-->
      <div class="probac">
        <img :src="data.iconLink" v-bind:class="{img:'true'}"/>
        <div v-bind:class="{proname:'true'}">{{ data.name }}</div>
      </div>
      <!--所在地-->
      <div class="base1">
        <div class="probase">
          <div class="pro1child1">类型：</div>
          <!--<div class="pro1child2">{{ data.name }}</div>-->
          <div v-if="data.type === '0'" class="pro1child2">
            技术
          </div>
          <div v-else-if="data.type === '1'" class="pro1child2">
            市场
          </div>
          <div v-else-if="data.type === '2'" class="pro1child2">
            其他
          </div>
          <div v-else>
            Not
          </div>
        </div>
      </div>
      <!--家乡-->
      <div class="base1">
        <div class="probase">
          <div class="pro1child1">供给方/需求方：</div>
          <div class="pro1child2">{{ data.category === '0' ? '供给' : '需求' }}</div>
        </div>
      </div>
      <div class="base1">
        <div class="probase">
          <div class="pro1child1">联系方式：</div>
          <div class="pro1child2">{{ data.contact }}</div>
        </div>
      </div>
      <div class="line2"></div>
      <div class="base1">
        <div class="probase">
          <div class="pro1child1">网站或产品下载链接：</div>
          <a class="content1" :href="data.net">{{ data.net }}</a>
        </div>
      </div>
      <div class="line2"></div>
      <div class="line1"></div>
      <!--介绍-->
      <div class="base1">
        <div class="probase">
          <div class="pro1child1">介绍</div>
        </div>
      </div>
      <div class="line2"></div>
      <div class="base1">
        <div class="content1">{{ data.introduction }}</div>
      </div>
      <br/>
    </div>
    <br/>
    <br/>
    <!--bottom-->
    <!--<div v-bind:class="{bottom:'true'}" v-on:click="clickright">聊天</div>-->
  </div>
</template>

<script>
  export default {
    name: 'ProjectNewDetail',
    data () {
      return {
        msg: '哈',
        data: {
          name: this.$route.params.name,
          type: this.$route.params.type,
          category: this.$route.params.category,
          iconLink: this.$route.params.iconLink,
          introduction: this.$route.params.introduction,
          net: this.$route.params.net,
          customer_id: this.$route.params.customer_id,
          contact: this.$route.params.contact
        }
      }
    },
    created (){
      console.log('-----传过来了----')
      console.log(this.$route.params)
      console.log('-----传过来了----')
    },
    methods: {
      back: function (event) {
        this.$router.push('/')
      },
      clickleft: function (event) {
        alert('关注')
      },
      clickright: function (event) {
        alert('聊天')
      }
    },
    mounted () {
      const router = document.getElementById('router')
      const tabbar = document.getElementById('tabbar')
      router.style.height = document.body.clientHeight + 'px'
      tabbar.style.display = 'none'
    },
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
  .probac{
    background: white;
    margin: 0 auto;
    margin-top: 20px;
    height: 90px;
  }
  .img {
    float: left;
    margin-left: 30px;
    width: 60px;
    height: 60px;
    border-radius: 6px;
    margin-top: 10px;
  }
  .teambac{
    height: 70px;
  }
  .img2 {
    float: left;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-top: 10px;
  }
  .proname{
    margin-left: 100px;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 10px;
    font-size: 20px;
    height: 30px;
    padding-top: 40px;
  }
  .base1{
    margin-left: 10px;
    margin-right: 10px;
    height: 37px;
  }
  .pro1{
    margin-left: 0px;
    float: left;
    width: 33.3%;
    height: 36px;
    line-height: 36px;
    background: wheat;
  }
  .probase{
    height: 36px;
    line-height: 36px;
    background: white;
  }
  .link1 {
    margin-top: 10px;
    text-align: left;
    color: #666666;
    font-size: 16px;
    margin-left: 15px;
  }
  .pro1child1{
    float: left;
    color: #666666;
    font-size: 14px;
    margin-left: 15px;
  }
  .pro1child2{
    color: black;
    font-size: 14px;
    text-align: left;
  }
  .content1{
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 5px;
    color: black;
    font-size: 14px;
    text-align: left;
  }
  .line1{
    margin: 0 auto;
    height: 5px;
    background: #eeeeee;
  }
  .line2{
    margin-left: 20px;
    margin-right: 20px;
    height: 1px;
    background: #eeeeee;
  }
  .bottom {
    margin-bottom: 0px;
    background: white;
    height: 40px;
    line-height: 40px;
    margin-left: 5%;
    margin-right: 5%;
  }
  .bottom_child {
    font-size: 18px;
    color: white;
    height: 40px;
    line-height: 40px;
    float: left;
    width: 40%;
    background: #F87415;
    border-radius: 5px;
  }
  .bottom_mid {
    height: 44px;
    line-height: 44px;
    float: left;
    width: 10%;
    background: white;
  }
</style>
