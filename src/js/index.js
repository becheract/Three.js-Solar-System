import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import sunTexture from "../img/sun.webp";
import mercuryTexture from "../img/mercury.jpg";
import venusTexture from "../img/venus.jpg";
import earthTexture from "../img/earth.jpg";
import marsTexture from "../img/mars.jpg";
import jupiterTexture from "../img/jupiter.jpg";
import saturnRingsTexture from "../img/saturnRings.jpg";
import saturnTexture from "../img/saturn.jpg";
import uranusTexture from "../img/uranus.jpg";
import neptuneTexture from "../img/neptune.jpg";
import stars from "../img/stars.jpg";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
// WebGL compatibility check
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

/* Mercury */
const mercuryGeometry = new THREE.SphereGeometry(0.12, 32, 32);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(mercuryTexture),
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

/* Venus */
const venusGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const venusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(venusTexture),
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);
venus.position.x = 3;

/* Earth */
const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const earthMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(earthTexture),
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.x = 4;

/* Mars */
const marsGeometry = new THREE.SphereGeometry(0.23, 32, 32);
const marsMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(marsTexture),
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.x = 5;

/* Jupiter */
const jupiterGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(jupiterTexture),
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.x = 6;

/* Saturn */
const saturnGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(saturnTexture),
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
saturn.position.x = 8;

/* Saturn Rings*/
const saturnRingsGeometry = new THREE.CircleGeometry(1, 32);
const saturnRingsMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(saturnRingsTexture),
  side: THREE.DoubleSide,
});
const saturnRings = new THREE.Mesh(saturnRingsGeometry, saturnRingsMaterial);
scene.add(saturnRings);
saturnRings.position.x = 8;
saturnRings.rotation.x = Math.PI / 2;
camera.position.z = 5;

/* uranus */
const uranusGeometry = new THREE.SphereGeometry(0.42, 32, 32);
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(uranusTexture),
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
uranus.position.x = 10;

/* neptune */
const neptuneGeometry = new THREE.SphereGeometry(0.42, 32, 32);
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(neptuneTexture),
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
neptune.position.x = 11.5;

/* Rendering the Scene */
const animate = () => {
  requestAnimationFrame(animate);
  //gives the sun rotation
  sun.rotateY(0.004);
  mercury.rotateY(0.004);
  // venus.rotation.y += 0.01;
  // earth.rotation.y += 0.01;
  // mars.rotation.y += 0.01;
  // jupiter.rotation.y += 0.01;
  // saturn.rotation.y += 0.01;
  // saturnRings.rotation.z += 0.01;
  // uranus.rotation.y += 0.01;
  // neptune.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();

// adding controls
const orbit = new OrbitControls(camera, renderer.domElement);

/* Text */
const loader = new FontLoader();

loader.load("src/fonts/helvetiker_regular.typeface.json", function (font) {
  const geometry = new TextGeometry("Hello three.js!", {
    color: 0x006699,
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  });
});

/* Background of scene */
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  stars,
  stars,
  stars,
  stars,
  stars,
  stars,
]);

/* Responsiveness */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* Rotate other planets around sun */
sun.add(mercury);
mercury.position.x = 2;
// sun.add(venus);
// sun.add(earth);
// sun.add(saturn);
// sun.add(saturnRings);
// sun.add(jupiter);
// sun.add(mars);
// sun.add(uranus);
// sun.add(neptune);

/* light */
const pointLight = new THREE.PointLight(0xffffff, 2, 300);
scene.add(pointLight);
