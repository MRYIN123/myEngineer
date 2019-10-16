<template>
  <div class="container">
    <div class="popup1">

      <!--第一排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('全部')" v-bind:class="{'btn_tag_select2': (selectCityString === '全部' ? true : false)}">全部</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('北京')" v-bind:class="{'btn_tag_select2': (selectCityString === '北京' ? true : false)}">北京</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('上海')" v-bind:class="{'btn_tag_select2': (selectCityString === '上海' ? true : false)}">上海</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('广州')" v-bind:class="{'btn_tag_select2': (selectCityString === '广州' ? true : false)}">广州</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('深圳')" v-bind:class="{'btn_tag_select2': (selectCityString === '深圳' ? true : false)}">深圳</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('杭州')" v-bind:class="{'btn_tag_select2': (selectCityString === '杭州' ? true : false)}">杭州</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('天津')" v-bind:class="{'btn_tag_select2': (selectCityString === '天津' ? true : false)}">天津</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('重庆')" v-bind:class="{'btn_tag_select2': (selectCityString === '重庆' ? true : false)}">重庆</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('安徽')" v-bind:class="{'btn_tag_select2': (selectCityString === '安徽' ? true : false)}">安徽</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('福建')" v-bind:class="{'btn_tag_select2': (selectCityString === '福建' ? true : false)}">福建</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('甘肃')" v-bind:class="{'btn_tag_select2': (selectCityString === '甘肃' ? true : false)}">甘肃</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('广东')" v-bind:class="{'btn_tag_select2': (selectCityString === '广东' ? true : false)}">广东</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('广西')" v-bind:class="{'btn_tag_select2': (selectCityString === '广西' ? true : false)}">广西</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('贵州')" v-bind:class="{'btn_tag_select2': (selectCityString === '贵州' ? true : false)}">贵州</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('海南')" v-bind:class="{'btn_tag_select2': (selectCityString === '海南' ? true : false)}">海南</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('河北')" v-bind:class="{'btn_tag_select2': (selectCityString === '河北' ? true : false)}">河北</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('黑龙江')" v-bind:class="{'btn_tag_select2': (selectCityString === '黑龙江' ? true : false)}">黑龙江</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('河南')" v-bind:class="{'btn_tag_select2': (selectCityString === '河南' ? true : false)}">河南</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('湖北')" v-bind:class="{'btn_tag_select2': (selectCityString === '湖北' ? true : false)}">湖北</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('湖南')" v-bind:class="{'btn_tag_select2': (selectCityString === '湖南' ? true : false)}">湖南</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('内蒙古')" v-bind:class="{'btn_tag_select2': (selectCityString === '内蒙古' ? true : false)}">内蒙古</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('江苏')" v-bind:class="{'btn_tag_select2': (selectCityString === '江苏' ? true : false)}">江苏</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('江西')" v-bind:class="{'btn_tag_select2': (selectCityString === '江西' ? true : false)}">江西</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('吉林')" v-bind:class="{'btn_tag_select2': (selectCityString === '吉林' ? true : false)}">吉林</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('辽宁')" v-bind:class="{'btn_tag_select2': (selectCityString === '辽宁' ? true : false)}">辽宁</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('宁夏')" v-bind:class="{'btn_tag_select2': (selectCityString === '宁夏' ? true : false)}">宁夏</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('青海')" v-bind:class="{'btn_tag_select2': (selectCityString === '青海' ? true : false)}">青海</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('山西')" v-bind:class="{'btn_tag_select2': (selectCityString === '山西' ? true : false)}">山西</button>
        </div>
      </div>


      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('山东')" v-bind:class="{'btn_tag_select2': (selectCityString === '山东' ? true : false)}">山东</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('四川')" v-bind:class="{'btn_tag_select2': (selectCityString === '四川' ? true : false)}">四川</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('西藏')" v-bind:class="{'btn_tag_select2': (selectCityString === '西藏' ? true : false)}">西藏</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('新疆')" v-bind:class="{'btn_tag_select2': (selectCityString === '新疆' ? true : false)}">新疆</button>
        </div>
      </div>

      <!--第二排-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('云南')" v-bind:class="{'btn_tag_select2': (selectCityString === '云南' ? true : false)}">云南</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('浙江')" v-bind:class="{'btn_tag_select2': (selectCityString === '浙江' ? true : false)}">浙江</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('陕西')" v-bind:class="{'btn_tag_select2': (selectCityString === '陕西' ? true : false)}">陕西</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('合肥')" v-bind:class="{'btn_tag_select2': (selectCityString === '合肥' ? true : false)}">合肥</button>
        </div>
      </div>

      <div class="base_tag btn_tag">
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('台湾')" v-bind:class="{'btn_tag_select2': (selectCityString === '台湾' ? true : false)}">台湾</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('香港')" v-bind:class="{'btn_tag_select2': (selectCityString === '香港' ? true : false)}">香港</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('澳门')" v-bind:class="{'btn_tag_select2': (selectCityString === '澳门' ? true : false)}">澳门</button>
        </div>
        <div class="back_btn_tag_city">
          <button type="button" @click="btn_select_area('海外')" v-bind:class="{'btn_tag_select2': (selectCityString === '海外' ? true : false)}">海外</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'DialogSelectArea',
    data: function () {
      return {
        isSelect1: 1,
        selectCityString: '全部',
        props:['selectCityString'],
        list:['全部']
      }
    },
    mounted () {
      this.list = this.$customTool.CompanyTypeList
    },
    methods: {
      btn_select_area (data) {
        let data1 = {
          cityname: data
        };
        this.selectCityString = data
        this.$emit('btn_select_area',data1)
      }
    }
  }
</script>

<style>
  .container {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }
  .popup1 {
    background: #f5f5f9;
    overflow-x: auto;
    width: 100%;
    margin-top: 0px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }
  .base_tag{
    background: #f5f5f9;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
  }
  .back_btn_tag_city{
    border: none;
    height: 40px;
    width: 25%;
    float: left;
    line-height: 40px;
    background: #f5f5f9;
  }
  .btn_tag{
    font-size: 16px;
    height: 30px;
    margin-top: 5px;
    line-height: 30px;
    color: black;
    border-radius: 6px;
  }
  .btn_tag_select2{
    font-size: 16px;
    height: 30px;
    margin-top: 5px;
    line-height: 30px;
    background: #F87415;
    color: white;
    border-radius: 6px;
  }
</style>
