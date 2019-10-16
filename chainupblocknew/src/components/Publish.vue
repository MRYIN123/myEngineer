<template>
  <!--title-->
  <div>
    <div v-bind:class="{head1:'true'}">发布
      <img v-bind:class="{headback:'true'}" src="../assets/back_white.png" v-on:click="back"/>
    </div>
    <!--content-->
    <div class="content">
      <!--基本资料-->
      <div class="div_head">请填写基本资料</div>
      <!--项目图标-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">项目图标</div>-->
      <!--&lt;!&ndash;<img src="../assets/logo1.png" v-bind:class="{icon_style:'true'}"/>&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="filediv" ref="file1">&ndash;&gt;-->
      <!--<input type="file" @change="fang" accept="image/*" name="imgUrls" value="file1">-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</div>-->
      <div class="div_line"></div>
      <!--项目名称-->
      <div class="div_bac">
        <div class="div_content">名称</div>
        <input type="text" name="name" placeholder="请输入名称" v-bind:class="{input_style:'true'}" v-model="formObj.name"/>
      </div>
      <div class="div_line"></div>
      <!--联系方式-->
      <div class="div_bac">
        <div class="div_content">联系方式</div>
        <input type="text" name="contact" placeholder="请输入联系方式" v-bind:class="{input_style:'true'}" v-model="formObj.contact"/>
      </div>
      <div class="div_line"></div>
      <!--<div class="div_line"></div>-->
      <!--地区-->
      <div class="div_bac">
        <div class="div_content">供给/需求</div>
        <div id="sexdiv" v-bind:class="{div_right:'true'}" v-on:click="selectCategory">{{ selectCityString }}</div>
        <DialogSelectArea v-show="isPopupVisible"
                              @btn_select_area="btn_select_area"  :sendData = "selectCityString"></DialogSelectArea>
      </div>
      <div class="div_line"></div>
      <!--类型-->
      <div class="div_bac">
        <div class="div_content">选择类型</div>
        <div id="sexRegion" v-bind:class="{div_right:'true'}" v-on:click="selectType">{{ selectTypeString }}</div>
        <DialogSelectCompanyType v-show="isPopupVisibleType"
                                 @btn_selectType="btn_selectType" :sendData = "selectTypeString"></DialogSelectCompanyType>

      </div>
      <!--项目方向-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">项目方向</div>-->
      <!--<input type="text" name="direction" placeholder="项目方向" v-bind:class="{input_style:'true'}" v-model="formObj.time"/>-->
      <!--</div>-->
      <!--<div class="div_line"></div>-->
      <!--项目阶段-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">项目阶段</div>-->
      <!--<input type="text" name="jieduan" placeholder="项目阶段" v-bind:class="{input_style:'true'}" v-model="formObj.infoString"/>-->
      <!--</div>-->
      <div class="div_line"></div>
      <div class="div_bac">
        <div class="div_content">网站</div>
        <input type="text" name="weburl" placeholder="请输入网站" v-bind:class="{input_style:'true'}" v-model="formObj.net"/>
      </div>
      <div class="div_line"></div>
      <!--项目概述-->
      <div class="div_bac">
        <div class="div_content">介绍</div></div>
      <textarea type="text" name="detailInfo" placeholder="请输入自己或者项目介绍" v-bind:class="{input_style1:'true'}" v-model="formObj.introduction"/>
      <!--团队资料-->
      <!--<div class="div_head">团队资料</div>-->
      <!--团队人数-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">团队介绍</div>-->
      <!--<input type="text" name="teamcount" placeholder="团队人数" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->
      <!--<div class="div_line"></div>-->
      <!--融资阶段-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">融资阶段</div>-->
      <!--<input type="text" name="rongzi" placeholder="融资阶段" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->
      <!--<div class="div_line"></div>-->
      <!--招募信息-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">其他信息</div>-->
      <!--<input type="text" name="zhaomu" placeholder="其他信息" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->

      <!--产品资料-->
      <!--<div class="div_head">产品资料</div>-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">官网</div>-->
      <!--<input type="text" name="weburl" placeholder="项目官网" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->
      <!--<div class="div_line"></div>-->
      <!--android-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">安卓下载链接</div>-->
      <!--<input type="text" name="android" placeholder="安卓下载链接" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->
      <!--<div class="div_line"></div>-->
      <!--apple-->
      <!--<div class="div_bac">-->
      <!--<div class="div_content">苹果下载链接</div>-->
      <!--<input type="text" name="apple" placeholder="苹果下载链接" v-bind:class="{input_style:'true'}" />-->
      <!--</div>-->
    </div>
    <div v-bind:class="{div_bottom1:'true'}"></div>
    <!--bottom-->
    <div v-bind:class="{bottom222:'true'}" v-on:click="onSubmit" >确定发布</div>
    <br/>
    <br/>
  </div>
</template>

<script>
  import DialogSelectArea from '@/components/DialogSelectArea'
  import DialogSelectCompanyType from '@/components/DialogSelectCompanyType'
  import { Toast } from 'vant';


  export default {
    name: 'Publish',
    components: {
      DialogSelectArea,
      DialogSelectCompanyType
    },
    data () {
      return {
        msg: '哈',
        isPopupVisible: false,
        isPopupVisibleType: false,
        selectCityString: '全部',
        selectTypeString: '全部',
        formObj: {
          net: '',
          customer_id: this.$customTool.MyCustomId,
          iconLink: this.$customTool.MyCustomAvatar,
          introduction: '',
          name: '',
          contact: '',
          type: '0',
          category: '0'
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
      selectCategory: function (event) {
        this.isPopupVisible = true
      },
      btn_select_area :function(event) {
        this.isPopupVisible = false
        this.selectCityString = event.cityname
      },
      selectType: function (event) {
        this.isPopupVisibleType = true
      },
      btn_selectType: function (event) {
        this.isPopupVisibleType = false
        this.selectTypeString = event.selectType
      },

      uploadImage: function (i) {
        var oFReader = new FileReader()
        var file = i.path[0].files[0]
        oFReader.readAsDataURL(file)
        oFReader.onloadend = function (oFRevent) {
          var src = oFRevent.target.result
          i.path[1].style.background = 'url(' + src + ') no-repeat center center'
          i.path[1].style.backgroundSize = '100%'
          i.path[1].nextSibling.className = 'filediv'
        }
        console.log(file)
      },
      onSubmit: function (event) {

        if (this.formObj.name == undefined || this.formObj.name == '') {
          alert('请输入名字')
          return
        }
        if (this.formObj.contact == undefined || this.formObj.contact == '') {
          alert('请输入联系方式')
          return
        }
        if (this.formObj.introduction == undefined || this.formObj.introduction == '') {
          alert('请输入介绍')
          return
        }


        var category = '0';
        if (this.selectCityString === '需求') {
          category = '1'
        }else{
          category = '0'
        }

        var type = '0';
        if (this.selectTypeString === '技术服务'){
          type = '0'
        }else if (this.selectTypeString === '市场推广'){
          type = '1'
        }else if (this.selectTypeString === '投资人'){
          type = '3'
        }else if (this.selectTypeString === '媒体传播'){
          type = '4'
        }else if (this.selectTypeString === '雇主'){
          type = '5'
        }else {
          type = '2'
        }


        this.$ajax({
          method: 'post',
          url: this.$customTool.API_PublishNeed,
          data: {
            net: this.formObj.net,
            customer_id: this.$customTool.MyCustomId,
            iconLink: this.$customTool.MyCustomAvatar,
            introduction: this.formObj.introduction,
            name: this.formObj.name,
            type: type,
            contact: this.formObj.contact,
            category: category
          }
        }).then((response) => {
          if (response.status === 200) {
            console.log('---请求成功---')
            this.results = response.data
            this.$router.push('/Mine')

          } else {
            console.log('---请求失败---')
            alert('error')
            console.log(response.data.message)
            console.log('---请求失败结束---')
          }
        })
      }
    }
  }
</script>

<style>
  .head1{
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
    margin-top: 0px;
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
  .div_head{
    color:black;
    fontSize:15px;
    background: #f5f5f9 ;
    text-align: left ;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
  }
  .div_right{
    float:right ;
    width: 100px ;
    height: 28px ;
    margin-top: 2px;
    text-align: right;
    margin-right: 10px;
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
  .div_bac{
    height:40px;
    line-height: 40px;
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
  .input_style{
    float:right ;
    width: 200px ;
    height: 32px ;
    font-size: 16px;
    line-height: 32px;
    text-align: right;
    margin-right: 10px;
  }
  .input_style1 {
    width: 90%;
    border: solid 1px lightgray;
    height: 80px ;
    margin-top: 5px;
    margin-right: 10px;
    rows: "10";
  }
  .div_line{
    background: lightgrey;
    margin-left: 10px;
    height: 1px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
  .div_bottom1{
    background: white;
    height: 60px;
    line-height: 60px;
  }
  .bottom222 {
    margin-bottom: 20px;
    background: #F87415;
    height: 40px;
    color: white;
    border-radius: 7px;
    line-height: 45px;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>
