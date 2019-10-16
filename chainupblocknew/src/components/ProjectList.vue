<template>
  <div id="app1">
    <!--筛选-->
    <div class="title2">
      <div class="titlechild2"  v-on:click="leftclick">
        <div class="titlechild_title2" >{{ selectCityString }}</div>
        <DialogSelectArea v-show="isPopupVisible"
                              @btn_select_area="btn_select_area"  :sendData = "selectCityString"></DialogSelectArea>
        <img class="titlechild_img2" src="../assets/jiantou_down.png" />
      </div>
      <div class="titlechild2"  v-on:click="rightclick">
        <div class="titlechild_title2" >{{ selectTypeString }}</div>
        <DialogSelectCompanyType v-show="isPopupVisibleType"
                                 @btn_selectType="btn_selectType" :sendData = "selectTypeString"></DialogSelectCompanyType>
        <img class="titlechild_img2"  src="../assets/jiantou_down.png" />
      </div>
    </div>
    <!--内容-->
    <div class="body">
      <ul v-bind:class="{ul_content:'true'}">
        <li v-bind:class="{li_content:'true'}" v-for = "item in results" v-on:click="clickli(item)">
          <img v-bind:class="{li_img:'true'}" :src= "item.iconLink"/>
          <div v-bind:class="{li_right:'true'}">
            <div v-bind:class="{li_right_top:'true'}">
              <div v-bind:class="{li_title:'true'}">{{ item.name }}</div>
              <!--<div v-bind:class="{li_type:'true'}">{{ item.type }}</div>-->
              <div v-if="item.type === '0'" v-bind:class="{li_type:'true'}">
                技术服务
              </div>
              <div v-else-if="item.type === '1'" v-bind:class="{li_type:'true'}">
                市场推广
              </div>
              <div v-else-if="item.type === '3'" v-bind:class="{li_type:'true'}">
                媒体推广
              </div>
              <div v-else-if="item.type === '4'" v-bind:class="{li_type:'true'}">
                投资人
              </div>
              <div v-else-if="item.type === '5'" v-bind:class="{li_type:'true'}">
                雇主
              </div>
              <div v-else-if="item.type === '2'" v-bind:class="{li_type:'true'}">
                其他
              </div>
              <div v-else>
                Not
              </div>
            </div>
            <div v-bind:class="{li_right_mid:'true'}"></div>
            <div v-bind:class="{li_right_bottom:'true'}">
              <div v-bind:class="{li_cotent2:'true'}">{{ item.introduction }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import DialogSelectArea from '@/components/DialogSelectArea'
  import DialogSelectCompanyType from '@/components/DialogSelectCompanyType'


  export default {
    name: 'ProjectList',
    components: {
      DialogSelectArea,
      DialogSelectCompanyType
    },
    data () {
      return {
        msg: '我的界面',
        selectCityString: '全部',
        selectTypeString: '全部',
        isPopupVisible: false,
        isPopupVisibleType: false,
        results: [{
          net: '',
          customer_id: '',
          iconLink: '',
          introduction: '',
          category: '',
          net: '',
          contact: '',
          name: '',
          type: ''
        }]
      }
    },
    methods: {
      back: function (event) {
        this.$router.push('/')
      },
      leftclick: function (event) {
        this.isPopupVisible = true
      },
      btn_select_area: function (type) {
        this.selectCityString = type.cityname
        this.$options.methods.requestListData.bind(this)()
      },
      rightclick: function (event) {
        this.isPopupVisibleType = true
      },

      btn_selectType: function (type) {
        this.selectTypeString = type.selectType
        this.$options.methods.requestListData.bind(this)()
      },
      clickli: function (item) {

        if (this.$customTool.isLogin() == false) {
          this.$router.push({path: '/Login'})

        }else {
          this.$router.push({
            name: 'ProjectNewDetail',
            params: {
              name: item.name == undefined ? '暂无' : item.name,
              type: item.type == undefined ? '0' : item.type,
              category: item.category == undefined ? '0' : item.category,
              iconLink: item.iconLink == undefined ? '暂无' : item.iconLink,
              introduction: item.introduction == undefined ? '暂无' : item.introduction,
              net: item.net == undefined ? '暂无' : item.net,
              customer_id: item.customer_id == undefined ? '暂无' : item.customer_id,
              contact: item.contact == undefined ? '暂无' : item.contact
            }
          })
        }
      },
      requestListData: function () {
        var category = this.selectCityString;

        var type = '0';
        var i = 0
        for (i = 0 ; i < this.$customTool.CompanyTypeList.length; i++){
          if (this.selectTypeString === this.$customTool.CompanyTypeList[i]) {
            type = i.toString()
            break
          }
        }

        console.log('开始请求category' + category + ' ' + 'type' + type)

        this.$ajax({
          method: 'post',
          url: this.$customTool.API_GetNeedList,
          data: {
            category: category,
            type: type
          }
        }).then((response) => {
          this.isPopupVisible = false
          this.isPopupVisibleType = false

          console.log(response.data)
//        console.log(response.statusText)
//        console.log(response.headers)
          if (response.status === 200) {
//        this.results = JSON.stringify(response.data)
//        this.results = JSON.parse(response.data)
            this.results = response.data
          } else {
            alert('error')
            console.log(response.data.message)
          }
        })
      }
    },
    mounted () {
      this.$options.methods.requestListData.bind(this)()
      const router = document.getElementById('router')
      const tabbar = document.getElementById('tabbar')
      router.style.height = document.body.clientHeight - 50 + 'px'
      tabbar.style.display = 'block'
    }

  }
</script>
<style>
  .title2{
    height:50px;
    background: white;
  }
  .titlechild2{
    width: 50%;
    float: left;
    line-height: 50px;
    height: 50px;
    background: #F87415;
  }
  .titlechild_title2{
    width: 52%;
    float: left;
    line-height: 60px;
    text-align: right;
    font-size: 18px;
    color: white;
  }
  .titlechild_img2{
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 20px;
  }
  .body{
    margin: 0px;
  }
  .ul_content{
    background: #f5f5f9;
    list-style: none;
    margin:0px;
    padding: 0px;
    line-height: 140px;
    list-style-type: none;
    text-decoration: none;
  }
  .li_content{
    background: white;
    height: 140px;
    margin-top: 10px;
    text-decoration: none;
    list-style-type: none;
  }
  .li_img {
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-top: 30px;
    float: left;
    border-radius: 30px;
  }
  .li_right{
    margin-left: 100px;
  }
  .li_right_top {
    height: 70px;
  }
  .li_title {
    line-height: 20px;
    height: 20px;
    margin-left: 10px;
    margin-top: 30px;
    text-align: left;
    font-size: 20px;
    float: left;
  }
  .li_type {
    float: right;
    line-height: 20px;
    height: 20px;
    margin-right: 10px;
    margin-top: 30px;
    font-size: 16px;
    text-align: right;
  }
  .li_right_mid{
    height:0.6px;
    background: lightgray;
    margin-left: 10px;
    margin-right: 10px;
  }
  .li_right_bottom{
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .li_cotent1 {
    line-height: 20px;
    height: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
    float: left;
  }
  .li_cotent2 {
    line-height: 20px;
    height: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
    float: left;
  }
</style>
