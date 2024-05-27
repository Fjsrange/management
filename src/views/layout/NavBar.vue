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
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false" router
      @open="handleOpen" @close="handleClose" unique-opened background-color="#304156" text-color="#fff"
      active-text-color="##29b8db">
      <div v-for="(item, index) in menuData" :key="index">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item :index="chi.path" v-for="(chi, ind) in item.children" :key="ind">
            {{ chi.title }}</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
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
import { mapGetters } from 'vuex';


export default {
  name: 'NavBar',
  components: {},
  data() {
    return {
      menuData: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '客户管理',
          path: '/customer',
          children: [
            {
              title: '客户档案',
              path: '/customer/customerFile'
            },
            {
              title: '拜访记录',
              path: '/customer/visit'
            }
          ]
        },
        {
          title: '订单管理',
          path: '/order',
          children: [
            {
              title: '订单列表',
              path: '/order/orderList'
            },
            {
              title: '订单详情',
              path: '/order/orderDetail'
            }
          ]
        },
        {
          title: '流程管理',
          path: '/flow',
          // children: [
          //   {
          //     title: '流程列表',
          //     path: '/flow/flowList'
          //   },
          //   {
          //     title: '流程详情',
          //     path: '/flow/flowDetail'
          //   }
          // ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['isCollapse']) // 折叠导航栏
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
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

/**解决加了div之后的样式显示效果 */
.isCollapse .el-submenu__title span,
::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
