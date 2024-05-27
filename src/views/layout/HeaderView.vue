<template>
  <div class="header">
    <!-- <i class="el-icon-s-fold" v-if="isCollapse"></i>
    <i class="el-icon-s-unfold" v-else></i> -->
    <div class="header-left">
      <el-button :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="changeCollapse"></el-button>
    </div>
    <div class="header-right">HeaderView</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderView',
  components: {},
  data() {
    return {
      // isCollapse: true,
    }
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    // 是否展示侧边栏
    changeCollapse() {
      console.log('thi', this.$store)
      this.$store.dispatch('navCollapse/changeIsCollapse')
      // this.$store.dispatch("changeCollapse");
      // this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 84px;
  box-shadow: 0 5px 5px #ddd; // 阴影效果
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    display: flex;
    align-items: center;

    button {
      width: 50px;
      height: 50px;
      font-size: 24px;
      padding: 12px 10px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
  }
}

.el-icon-s-fold {
  font-size: 20px;
  cursor: pointer;
}

.el-icon-s-unfold {
  font-size: 20px;
  cursor: pointer;
}
</style>
