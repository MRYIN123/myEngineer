<template>
  <div class="container">
    <div class="popup">

      <!--tags-->
      <div class="base_tag btn_tag">
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('全部')" v-bind:class="{'btn_tag_select1': (selectTypeString === '全部' ? true : false)}">全部</button>
        </div>
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('技术服务')" v-bind:class="{'btn_tag_select1': (selectTypeString === '技术服务' ? true : false)}">技术服务</button>
        </div>
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('市场推广')" v-bind:class="{'btn_tag_select1': (selectTypeString === '市场推广' ? true : false)}">市场推广</button>
        </div>
      </div>

      <div class="base_tag btn_tag">
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('媒体推广')" v-bind:class="{'btn_tag_select1': (selectTypeString === '媒体推广' ? true : false)}">媒体推广</button>
        </div>
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('投资人')" v-bind:class="{'btn_tag_select1': (selectTypeString === '投资人' ? true : false)}">投资人</button>
        </div>
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('雇主')" v-bind:class="{'btn_tag_select1': (selectTypeString === '雇主' ? true : false)}">雇主</button>
        </div>
      </div>
      <div class="base_tag btn_tag">
        <div class="back_btn_tag">
          <button type="button" @click="btn_selectType('其他')" v-bind:class="{'btn_tag_select1': (selectTypeString === '其他' ? true : false)}">其他</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'DialogSelectCompanyType',
    data: function () {
      return {
        isSelect1: 1,
        selectTypeString: '全部',
        props:['selectTypeString'],
        list:['全部']
      }
    },
    mounted () {
      this.list = this.$customTool.CompanyTypeList
    },
    methods: {
      btn_selectType (data) {
        let data1 = {
          selectType: data
        };
        this.selectTypeString = data
        this.$emit('btn_selectType',data1)
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
  .popup {
    background: #f5f5f9;
    /*box-shadow: 2px 2px 20px 1px;*/
    overflow-x: auto;
    width: 100%;
    margin-top: 0px;
    height: 120px;
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
  .back_btn_tag{
    border: none;
    height: 40px;
    width: 33%;
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
  .btn_tag_select1{
    font-size: 16px;
    height: 30px;
    margin-top: 5px;
    line-height: 30px;
    background: #F87415;
    color: white;
    border-radius: 6px;
  }
</style>
