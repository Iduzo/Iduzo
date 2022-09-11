<template>
  <el-page-header @back="onBack">
		<template #content>
			{{title}}
		</template>
		<template #extra>
			<el-button @click="home" type="info" :icon="House" circle />
		</template>
	</el-page-header>
</template>

<script setup>
import {
	House
} from '@element-plus/icons-vue'
import { useRouter} from 'vue-router'

const router = useRouter()
function onBack(){
	router.back()
}
function home() {
	router.push({ name: "home" })
}
</script>
<script>
export default {
  name: 'LayoutBar',
  props: {
    title: String,
    logo: String,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>