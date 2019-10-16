<template>
  <div id="app" style="height: 100%">
    <router-view v-bind:style="{height: scrollHeight}" class="router" id="router"></router-view>
    <div style="height: 50px;background: #f2f2f2;color: #000;" id="tabbar">
      <router-link :to="{name:'ProjectList'}" style="color:#000">
        <div class = "text" v-bind:class="{fontcolor: isSelect}" style="float: left" @click="toActive">链改</div>
      </router-link>
      <router-link v-bind:to="{name: 'Mine'}" style="color:#000">
        <div class = "text" v-bind:class="{fontcolor: !isSelect}" style="float: right" @click="toRecord">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isSelect: true
    }
  },
  computed: {
    scrollHeight: function () {
      return document.body.clientHeight - 50 + 'px'
    }
  },
  methods: {
    toActive: function () {
      if (!this.isSelect) {
        this.isSelect = !this.isSelect
      }
    },
    toRecord: function () {
      if (this.isSelect) {
        this.isSelect = !this.isSelect
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.fontcolor{
  color: #F87415;
}
.text{
  width: 50%;
  text-align: center;
  line-height: 50px;
  display: inline-block;
  font-size: 16px;
}
.router{
  overflow: auto;
}

body{
  margin:0;
  padding:0;
  height: 100%;
}
html{
  height: 100%;
}
</style>
