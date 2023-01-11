import * as THREE from "three";
// Import three.js IFCLoader
import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";

export class Scene {
    camera = null
    scene = null
    container = null
    renderer = null
    ifcLoader = null
    controler = null
    models = []

    loadIfcFile(fileName) {
        this.ifcLoader.load("@/threejs/models/" + fileName, (ifcModel) => {
            this.models.push(ifcModel)
            this.scene.add(ifcModel)
            this.renderer.render(this.scene, this.camera)
            console.log(ifcModel)
        });
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    addCube() {
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.renderer.render(this.scene, this.camera);
        console.log("here")
        console.log(this.renderer, this.camera, this.scene)
    }

    constructor(container) {
        this.ifcLoader = new IFCLoader();
        this.container = container;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(container.clientWidth, container.clientHeight);

        container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(75, container.innerWidth / container.innerHeight, 0.1, 5);
        this.camera.position.z = 2;
        this.camera.lookAt(0, 0, 0);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color("rgba(243, 242, 243, 0)");
        this.controler = new THREE.FirstPersonControls(this.camera, this.container)
        this.addCube();
    }


}