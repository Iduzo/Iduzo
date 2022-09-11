<template>
  <el-container>
    <el-header> 
      <layout-bar title="Project Sims">
      </layout-bar>
    </el-header>
    <el-main>
      <el-space :fill="true" style="width: 100%; height:100%">
        <el-card>
          <router-view/>
        </el-card>
      </el-space>
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
}
</style>
