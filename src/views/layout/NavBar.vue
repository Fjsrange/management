<template>
  <div class="navBar" :class="{ isCollapse }">
    <!--
      collapse="true"

     -->
    <h1 class="main-logo">
      <!-- <img src="../../assets/logo.png" v-if="isCollapse" width="32" />
      <span v-else>通用后台管理系统</span> -->
      <img src="../../assets/logo.png" width="32" />
      <span v-show="!isCollapse">通用后台管理系统</span>
    </h1>
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
      <div v-for="(item, index) in menuData" :key="index">
        <el-submenu :index="`${index + 1}`" v-if="item.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="`${index + 1}-${ind + 1}`"
            v-for="(chi, ind) in item.children"
            :key="ind"
          >
            {{ chi.title }}</el-menu-item
          >
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>
        <el-menu-item :index="`${index + 1}`" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </div>

      <!-- <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  components: {},
  data () {
    return {
      menuData: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '客户管理',
          children: [
            {
              title: '客户列表'
            },
            {
              title: '客户详情'
            }
          ]
        },
        {
          title: '订单管理',
          children: [
            {
              title: '订单列表'
            },
            {
              title: '订单详情'
            }
          ]
        },
        {
          title: '流程管理'
        }
      ]
    }
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

  img {
    vertical-align: middle;
  }
  .main-logo {
    padding: 10px 16px;

    span {
      min-width: 130px;
      color: #fff;
      font-weight: bold;
      display: inline-block;
      position: absolute;
      left: 62px;
      top: 16px;
    }
  }

  .el-menu {
    border: none;
  }

  &.isCollapse {
    width: 64px;
  }
}
</style>
