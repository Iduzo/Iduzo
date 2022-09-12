<template>
  <el-container style="height:100%">
    <el-aside width="300px" style="height:100%">
      <library-menu></library-menu>
    </el-aside>
    <el-main>Main</el-main>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</template>

<script setup>
import LibraryMenu from '../components/tool/Library.vue'
</script>

<script>

export default {
  name: 'ToollView',
  components: {
  },
}
</script>