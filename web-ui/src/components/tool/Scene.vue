<template>
  <div style="height:100%; width:100%" :ref="containerId">

  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: 'ToolScene',

  data: () => {
    return {
      containerId: 'scene-container'
    }
  },

  methods: {
    renderScene() {
      this.renderer.render(this.scene, this.camera);
    },
    addRoom() {
      const geometry = new THREE.BoxGeometry(20, 20, 20);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh( geometry, material );
      this.scene.add( cube );
    },
    init() {
      this.renderer = new THREE.WebGLRenderer();
      const container = this.$refs[this.containerId]
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      console.log(container.clientWidth)
      
      container.appendChild( this.renderer.domElement );

      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
      this.camera.position.set( 0, 0, 100 );
      this.camera.lookAt( 0, 0, 0 );

      this.scene = new THREE.Scene();
    }
  },
  mounted() {
    this.init()
    this.addRoom()
    this.renderScene()
  },
}
</script>

<style lang="scss" scoped>

</style>>
