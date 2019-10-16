<template>
  <!--title-->
  <div>
    <div v-bind:class="{head:'true'}">关于我们
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div class="contentabout">
      <!--背景图-->
      <img src="../assets/about.jpeg" v-bind:class="{topimg:'true'}" />
      <!--内容-->
      <div v-bind:class="{content1:'true'}">区块牛，区块链技术应用专业解决方案提供商。区块牛拥有丰富的企业级区块链技术服务经验，目前已经服务领域包括：社交电商、游戏娱乐、视频直播、连锁商业、企业集团等等。
        区块牛非常重视知识产权保护，已经申请递交了3项中国国家发明专利，
        同时区块牛也申请了多个软件著作权和多个商标。区块牛将在中国上海和美国硅谷设立全球两大研发中心，
        以及在全球多个国家开展直营业务或者通过战略合作伙伴开展业务，建立区块链全球商业生态体系。</div>
      <br/>
      <div v-bind:class="{content1:'true'}">我们是一家专业的区块链技术公司，专注于企业级区块链技术应用解决方案，用区块链技术为实体赋能。
        我们拥有丰富的企业级区块链技术服务经验，技术团队成员由华为系、清华系组成，
        目前已经服务过的领域包括：资产、矿业、连锁、文化、社交、电商、游戏、视频等。从传统企业到互联网企业，从技术到市场，我们提供整套“企业链改”解决方案，用区块链技术为实体经济赋能。
        我们在海外注册有投资管理机构，计划将在中国上海和美国硅谷设立全球两大研发中心，以及在全球多个国家开展直营业务或者通过战略合作伙伴开展业务，用技术服务建立区块链全球商业生态体系，
        目前我们已经申请递交了3项中国国家发明专利，也申请获批了多个软件著作权。
        同时，区块牛自营产品，如休闲游戏模块也可以植入到企业链改解决方案中，为链改企业带来更多营收、更多价值。</div>
    <br/>
      <a href="https://www.blocknew.net">合作成功案例</a>
    <div v-bind:class="{content1:'true'}">*商务合作</div>
      <div v-bind:class="{content1:'true'}">微信: BNDFound</div>
      <div v-bind:class="{content1:'true'}">邮箱: 2825090785@qq.om</div>
      <div v-bind:class="{content1:'true'}">电话: 17301744704</div>
      <div v-bind:class="{content1:'true'}">地址: 上海市闵行区</div>
  </div>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: '哈'
    }
  },
  mounted () {
    const router = document.getElementById('router')
    const tabbar = document.getElementById('tabbar')
    root.style.height = document.body.clientHeight + 'px'
    tabbar.style.display = 'none'
  },
  methods: {
    back: function (event) {
      this.$router.push('/Mine')
    }
  },
  mounted () {
    const router = document.getElementById('router')
    const tabbar = document.getElementById('tabbar')
    router.style.height = document.body.clientHeight + 'px'
    tabbar.style.display = 'none'
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
  .topimg {
    width:100%;
    height:180px;
    margin: 0 auto;
  }
  .contentabout {
    margin-top: 0px;
    background: #ffffff;
  }
  .content1{
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 5px;
    color: black;
    font-size: 14px;
    text-align: left;
  }
</style>
