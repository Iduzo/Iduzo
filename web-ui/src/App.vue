<template>
  <el-container style="width:100%; height: 100%;">
    <el-header> 
      <layout-bar title="Project Sims">
      </layout-bar>
    </el-header>
    <el-main class="main">
      <div id="main-panel">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import LayoutBar from '@/components/Layout.vue'

export default {
  name: 'App',
  components: {
    LayoutBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
body {
  width:100vw;
  height: 100vh;
  margin:0;
}
#main-panel {
  height:100%; 
  background: rgb(243,242,243)
}
</style>
