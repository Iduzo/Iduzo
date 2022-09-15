<template>
  <el-container style="height:100%">
    <el-aside width="300px" style="height:100%">
      <library-menu/>
    </el-aside>
    <el-main>
      <tool-scene/>
    </el-main>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</template>

<script setup>
import LibraryMenu from '../components/tool/Library.vue'
import ToolScene from '../components/tool/Scene.vue'
</script>

<script>

export default {
  name: 'ToollView',
  components: {
  },
}
</script>