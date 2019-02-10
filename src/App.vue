<template>
  <div id="app" style="position : absolute; left: 0px; top: 0px; width: 100%; height: 100%">
    <el-container>
      <el-aside width="15%">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="1" class="el-icon-circle-plus-outline">
              新增
            </el-menu-item>
            <el-menu-item index="2" class="el-icon-remove-outline">
              删除
            </el-menu-item>
            <el-menu-item index="3" class="el-icon-edit">
              修改
            </el-menu-item>
            <el-menu-item index="4" class="el-icon-search">
              查看
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>


      <el-container>
        <el-header height="15%">
          <div id="header-text" style="position: relative; left: 5%;top: 20%; font-size: 20px">
            xxx
          </div>
        </el-header>

        <!-- 加载多个子组件， 是否显示靠变量控制，内容靠函数填充-->
        <el-main>

          <el-form ref="form" :model="form" >
            <el-form-item label="数据名称" align="left">
              <el-input v-model="form.name" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="所属系统"  align="left">

              <el-select v-model="form.region" placeholder="请选择系统">
                <el-option label="" value="productapi"></el-option>
                <el-option label="" value="detailpoi"></el-option>
              </el-select>

            </el-form-item>
            <el-form-item label="有效时间" align="left">
              <el-row style="width: 1500px">
                <el-col span="2">
                  <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 120px"></el-date-picker>
                </el-col>
                <el-col span="2" align="center">至</el-col>
                <el-col span="2">
                  <el-date-picker type="date" placeholder="结束日期" v-model="form.date2" style="width: 120px"></el-date-picker>
                </el-col>
              </el-row>
            </el-form-item>


            <el-form-item label="上传文件" align="left">
              <el-upload
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple="false">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>

      </el-container>

    </el-container>
  </div>


</template>

<script>
export default {
  name: 'App',
  data : function () {
    return {
      show_Navigation_Two : true,
      show_Navigation_Three : false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }

  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
document.documentElement.style.overflow = 'hidden';
var move = function (e) {
  e.preventDefault && e.preventDefault();
  e.returnValue = false;
  e.stopPropagation && e.stopPropagation();
  return false;
}
var keyFunc = function (e) {
  if (37 <= e.keyCode && e.keyCode <= 40) {
    return move(e);
  }
}
document.body.onkeydown = keyFunc;
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
