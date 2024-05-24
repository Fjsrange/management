<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right">
      <HeaderView></HeaderView>
      <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import ContentView from './ContentView'
import HeaderView from './HeaderView'
import NavBar from './NavBar'

export default {
  name: 'mainLayout',
  components: { ContentView, HeaderView, NavBar },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .layout-right {
    flex: 1;
  }
}
</style>
