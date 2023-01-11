<template>
  <div style="height:100%; width:100%" :ref="containerId">
  </div>
</template>

<script>
// import * as THREE from "three";
// Import three.js IFCLoader
// import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";
// import { IFCLoader } from "web-ifc-three/IFCLoader";
// import { IfcViewerAPI } from "web-ifc-viewer";
//import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from "three-mesh-bvh";
import {Scene} from "../../threejs"

export default {
  name: 'ToolScene',

  data: () => {
    return {
      containerId: 'scene-container'
    }
  },

  methods: {
    renderScene() {
      // this.renderer.render(this.scene, this.camera);
    },
    async loadIFC() {
      // const ifcLoader = new IFCLoader();
      // this.ifcModels = [];
      // this.ifcLoader = new IFCLoader();
      // this.viewer.IFC.setWasmPath("../IFCLoader");
      // this.viewer.IFC.loadIfcUrl("../../threejs/models/house.ifc")
      //   , (ifcModel) => {
      //   this.ifcModels.push(ifcModel);
      // });
      // console.log(this.ifcModels)
      // this.raycaster = new THREE.Raycaster();
      // this.raycaster.firstHitOnly = true;
      // this.mouse = new THREE.Vector2();
    },
    // cast(event) {
    //   // Computes the position of the mouse on the screen
    //   const bounds = this.renderer.domElement.getBoundingClientRect();

    //   const x1 = event.clientX - bounds.left;
    //   const x2 = bounds.right - bounds.left;
    //   this.mouse.x = (x1 / x2) * 2 - 1;

    //   const y1 = event.clientY - bounds.top;
    //   const y2 = bounds.bottom - bounds.top;
    //   this.mouse.y = -(y1 / y2) * 2 + 1;

    //   // Places it on the camera pointing to the mouse
    //   this.raycaster.setFromCamera(this.mouse, this.camera);

    //   // Casts a ray
    //   return this.raycaster.intersectObjects(this.ifcModels);
    // },
    init() {
      const container = this.$refs[this.containerId]

      new Scene(container)
      // this.viewer = new IfcViewerAPI({
      //   container,
      //   backgroundColor: new THREE.Color(0xffffff),
      // });
      // this.viewer.axes.setAxes();
      // this.viewer.grid.setGrid();
      // window.onkeydown = (event) => {
      //   if (event.code === "KeyP") {
      //     this.viewer.clipper.createPlane();
      //   } else if (event.code === "KeyO") {
      //     this.viewer.clipper.deletePlane();
      //   }
      // };

      // this.renderer = new THREE.WebGLRenderer();
      // this.renderer.setSize(container.clientWidth, container.clientHeight);
      
      // container.appendChild(this.renderer.domElement);

      // this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
      // this.camera.position.set( -200, -200, 100 );
      // this.camera.lookAt( 0, 0, 0 );

      // this.scene = new THREE.Scene();
    }
  },
  async mounted() {
    this.init()
    await this.loadIFC()
    this.renderScene()
  },
}
</script>

<style lang="scss" scoped>

</style>>
