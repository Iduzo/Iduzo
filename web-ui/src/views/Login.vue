<template>
  <div  style="height: 100%; display: flex; justify-content: space-around; flex-direction: column;">
    <multi-lines :lines="lines"/>
    <div>
      <h1>A vous de jouer !</h1>
      <div>
        <el-button round type="primary" @click="()=>router.push({name:'login'})">
          <h1>GO</h1> 
          <el-icon>
            <ArrowRightBold/>
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {
  }
}
</script>