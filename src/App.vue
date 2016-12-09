<template>
  <div id="app">
    <ni-index-top/>
    <ni-nav/>
    <router-view></router-view>
    <ni-footer />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

body{background-color: #ebebeb}

.ni-warp{
    padding: 40px 0px;
    text-align: center;
    background: none repeat scroll 0 0 #F5F5F5;
}


.el-card .el-card__header{padding: 2px 5px;}

.ni-index-container{
  margin-top: 15px;
}
</style>
