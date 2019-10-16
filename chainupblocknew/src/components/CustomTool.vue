

<script>

  //公共数据文件tool
  //node后台
  const BaseUrlStrDev = 'http://dev.blocknew.net/api/'
  const BaseUrlStrDevAPI = 'http://dev.blocknew.net/api/'

  const BaseUrlStrRelease = 'https://www.blocknew.net/'
  const BaseUrlStrReleaseAPI = 'https://www.blocknew.net/api/'

  //php后台
  const BaseUrlStrMallAPIDev = 'http://shopping.blocknew.net/'
  const BaseUrlStrMallAPIRelease = 'https://blocknew.net/'

  //实际用Node后台域名: 切换Node环境
  const BaseUrlStr = BaseUrlStrDev
  const BaseUrlStrAPI = BaseUrlStrDevAPI

  //使用用php后台域名：切换php环境
  const BaseUrlMallStr = BaseUrlStrMallAPIDev


  //Api
  const API_Login = BaseUrlStrAPI + 'login'
  const API_SendSMS = BaseUrlStrAPI + 'send_sms'
  const API_SelectCustomer = BaseUrlStrAPI + 'select/Customer'

  const API_GetNeedList = BaseUrlMallStr + 'getNeedList.php'
  const API_PublishNeed = BaseUrlMallStr + 'publishNeed.php'

  //公共参数
  const CompanyTypeList = ['全部','技术服务','市场推广','其他','投资人','媒体传播','雇主']

  //用户
  const MyCustomId = ''
  const MyCustomName = ''
  const MyCustomToken = ''
  const MyCustomAvatar = ''

  export default {
    BaseUrlStr,
    BaseUrlStrAPI,
    BaseUrlMallStr,


    //api
    /**登录*/
    API_Login,
    /**发送验证码*/
    API_SendSMS,
    /**查询用户信息*/
    API_SelectCustomer,
    //需求列表
    API_GetNeedList,
    //发布需求
    API_PublishNeed,

    //用户
    MyCustomId,
    MyCustomName,
    MyCustomToken,
    MyCustomAvatar,

    CompanyTypeList,

    //登录之后赋值
    isReleaseEnvNode: function () {
      if (BaseUrlStr === BaseUrlStrDev) {
        return false
      }else {
        return true
      }
    },
    isReleaseEnvPhp: function () {
      if (BaseUrlMallStr === BaseUrlStrMallAPIDev) {
        return false
      }else {
        return true
      }
    },

    //登录之后赋值
    setupLoginData: function (data) {
      this.MyCustomId = data.customer_id
      this.MyCustomToken = data.token
      this.MyCustomName = data.username
    },
    /**获取customer之后赋值*/
    setupCustomerData: function (data) {
      console.log('--头像是--')
      this.MyCustomAvatar = data.avatar
    },

    /**是否登录*/
    isLogin: function () {
      console.log('-----公共方法--')
      console.log(this)

      if (this.MyCustomId == undefined || this.MyCustomId == '') {
        console.log('未登录,MyCustomId=' + this.MyCustomId)
        return false
      } else {
        console.log('已经登录MyCustomId=' + this.MyCustomId + '   name=' + this.MyCustomName)
        return true
      }
    },

    /**获取头像*/
    getAvatar: function () {
      if (this.MyCustomAvatar == undefined || this.MyCustomAvatar == '') {
        return 'http://image.blocknew.net/image/app/icon_app_china.png'
      } else {
        if (this.isReleaseEnvNode()) {
          return this.MyCustomAvatar
        }else {
          var newAvatar = this.MyCustomAvatar.replace('https','http')
          return newAvatar
        }

      }
    },

    //如果带着customer_id或者有缓存,返回false,true
    checkIsLogin:function (event) {
      //1检查链接上是否带customer_id
      var params = this.$options.methods.parseUrl();
      console.log('--验证参数--')
      console.log(params);
      console.log('--打印参数--')

      var getid = this.$options.methods.validate(params);
      console.log('--验证参数--' + getid)

      var hasCustomer_id = false
      if (getid == 'undefind' || getid == ''){
        hasCustomer_id = false
      }else {
        hasCustomer_id = true
      }

      //2检查浏览器缓存是否有customer_id
      var hasCacheCustomer = false
      if (hasCustomer_id || hasCacheCustomer) {
        return true
      }else {
        return false
      }
    },

    //保存customer
    saveCustomerCache:function () {

    },
    //拿到缓存customer
    getCustomerCache:function () {

    },

    //判断是否带customer_id
    parseUrl: function() {
      var searchHref = window.location.search.replace('?', '');
      var params = searchHref.split('&');
      var returnParam = {};
      params.forEach(function (param) {
        var paramSplit = param.split('=');
        returnParam[paramSplit[0]] = paramSplit[1];
      });
      return returnParam;
    },

    validate: function(params) {
      if (!params.hasOwnProperty('customer_id')) {
        return 'false'
      } else {
        return params.customer_id
      }
    },



  }

</script>

