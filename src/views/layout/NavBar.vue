<template>
  <div class="navBar" :class="{ isCollapse }">
    <!--
      collapse="true"

     -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      background-color="#304156"
      text-color="#fff"
      active-text-color="##29b8db"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['isCollapse']) // 折叠导航栏
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.navBar {
  width: 200px;
  height: 100%;
  background-color: #304156;
  box-shadow: 5px 0 5px #ccc;
  // 设置所有元素的过渡时间为0.3秒
  transition: all 0.3s;

  .el-menu {
    border: none;
  }

  &.isCollapse {
    width: 64px;
  }
}
</style>
