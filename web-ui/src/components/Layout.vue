<template>
  <el-page-header @back="onBack">
		<template #content>
			{{title}}
		</template>
		<template #extra>
			<el-button @click="user" type="info" :icon="User" circle />
		</template>
	</el-page-header>
</template>

<script setup>
import {
	User
} from '@element-plus/icons-vue'
import { useRouter} from 'vue-router'

const router = useRouter()
function onBack(){
	router.back()
}
function user() {
	router.push({ name: "login" })
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