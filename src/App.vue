<template>
  <div id="app" style="position : absolute; left: 0px; top: 0px; width: 100%; height: 100%">
    <el-container>
      <el-aside width="15%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2" @click="click">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>


      <el-container>
        <el-header height="15%">Header</el-header>

        <!-- 加载多个子组件， 是否显示靠变量控制，内容靠函数填充-->
        <el-main>Main</el-main>

      </el-container>



    </el-container>
  </div>


</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key + " " + keyPath);
    },
    handleClose(key, keyPath) {
      console.log("被关上了");
    },
    click() {
      alert("被点了");
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;

  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  div > .el-container {
    margin-bottom: 40px;
    position : absolute;
    left : 0px;
    top : 0px;
    width : 100%;
    height : 100%;
  }
</style>
