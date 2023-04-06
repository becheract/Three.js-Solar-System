import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import sunTexture from "../img/sun.webp";
/* allows the use of images */
const textureLoader = new THREE.TextureLoader();
/* Setting up Scene */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, //fov
  window.innerWidth / window.innerHeight, //aspect ratio
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//adding sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture),
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
camera.position.z = 5;

/* Rendering the Scene */

const animate = () => {
  requestAnimationFrame(animate);
  //gives the sun rotation
  sun.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();
