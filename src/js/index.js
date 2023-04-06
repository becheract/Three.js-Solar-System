import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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
const sunGeometry = new THREE.SphereGeometry(1, 1, 1);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
