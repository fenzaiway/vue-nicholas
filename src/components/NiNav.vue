<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-menu :default-active="activeIndex" router class="" style="background-color:#fff;" mode="horizontal">
          <el-menu-item :route="{path:'home'}" index="home">Nicholas</el-menu-item>
          <el-menu-item :route="{path:'index'}" index="index"><i class="glyphicon glyphicon-home"></i>首页</el-menu-item>
          <el-menu-item :route="{path:'article'}" index="article"><i class="glyphicon glyphicon-book"></i>文章</el-menu-item>
          <el-menu-item :route="{path:'plugin'}" index="plugin"><i class="glyphicon glyphicon-plus"></i>插件</el-menu-item>
          <el-menu-item :route="{path:'frontNav'}" index="frontNav"><i class="glyphicon glyphicon-link"></i>前端导航</el-menu-item>
          <el-menu-item :route="{path:'weibo'}" index="weibo"><i class="glyphicon glyphicon-send"></i>微博</el-menu-item>
          <li class="ni-nav-search col-md-3">
            <div class="input-group">
              <input class="form-control" type="email" placeholder="请输入要搜索的内容...">
              <span class="input-group-addon">搜索</span>
            </div>
          </li>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
  export default {
    created(){
      this.activeIndex = this.$route.path.substring(1)
    },
    data(){
      return {
        activeIndex:"article"
      }
    },
    methods:{
      search(){
        console.log('test');
      }
    }
  }
</script>
<style>
.el-menu-item i{
  margin-right: 3px;
  top: 3px;
}

  .ni-nav-search{padding-top: 14px;}
</style>