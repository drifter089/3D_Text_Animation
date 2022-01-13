import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import gsap from "gsap";

// console.log(gsap);
/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");
const t = document.getElementById("ttt");

document.addEventListener("dblclick", () => {
  canvas
    .requestFullscreen()
    .then(t.remove())
    .then(mmm())

    // element has entered fullscreen mode successfully)
    .catch(function (error) {
      // element could not enter fullscreen mode
      // error message
      console.log(error.message);
    });
});

function mmm() {
  // Scene
  const scene = new THREE.Scene();

  // axis helper
  // const axesHelper = new THREE.AxesHelper();
  // scene.add(axesHelper);

  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader();
  const dmatcaptexture = textureLoader.load("/textures/matcaps/8.png");
  const tmatcaptexture = textureLoader.load("/textures/matcaps/8.png");
  // console.log(matcaptexture);

  // Fonts
  const fontLoader = new THREE.FontLoader();
  fontLoader.load("/fonts/neon.json", (font) => {
    const textGeometry = new THREE.TextBufferGeometry("Selfish GENE", {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 10,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 10,
    });
    //   textGeometry.computeBoundingBox();
    //   //   console.log(textGeometry.boundingBox);
    //   textGeometry.translate(
    //     -(textGeometry.boundingBox.max.x + 0.02) * 0.5,
    //     -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
    //     -(textGeometry.boundingBox.max.z - 0.03) * 0.5
    //   );
    //   console.log(textGeometry.boundingBox);
    textGeometry.center();
    // const textMaterial = new THREE.MeshMatcapMaterial();
    // textMaterial.matcap = tmatcaptexture;
    const textMaterial = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(text);

    gsap.from(text.scale, { x: 0, y: 0, z: 0, duration: 5 });

    // objects
    // const objMaterial = new THREE.MeshMatcapMaterial();
    // objMaterial.matcap = dmatcaptexture;
    const objMaterial = new THREE.MeshNormalMaterial();

    const donutgeo = new THREE.TorusBufferGeometry(0.3, 0.2, 20, 45);
    for (let i = 0; i < 70; i++) {
      const donut = new THREE.Mesh(donutgeo, objMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      gsap.from(donut.position, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.scale, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.rotation, { x: 0, y: 0, z: 0, duration: 8 });
      scene.add(donut);
    }

    const cubegeo = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
    for (let i = 0; i < 50; i++) {
      const donut = new THREE.Mesh(cubegeo, objMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      gsap.from(donut.position, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.scale, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.rotation, { x: 0, y: 0, z: 0, duration: 8 });
      scene.add(donut);
    }

    const spheregeo = new THREE.ConeBufferGeometry(0.2, 0.6, 10, 10);
    for (let i = 0; i < 50; i++) {
      const donut = new THREE.Mesh(spheregeo, objMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      gsap.from(donut.position, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.scale, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.rotation, { x: 0, y: 0, z: 0, duration: 8 });
      scene.add(donut);
    }

    const rand = new THREE.TorusKnotBufferGeometry(0.5, 0.14, 10, 4, 2, 1);
    for (let i = 0; i < 100; i++) {
      const donut = new THREE.Mesh(rand, objMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() - 0.3;
      donut.scale.set(scale, scale, scale);
      gsap.from(donut.position, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.scale, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.rotation, { x: 0, y: 0, z: 0, duration: 8 });
      scene.add(donut);
    }

    const octgeo = new THREE.OctahedronBufferGeometry(1, 0);
    for (let i = 0; i < 100; i++) {
      const donut = new THREE.Mesh(octgeo, objMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() - 0.5;
      donut.scale.set(scale, scale, scale);

      gsap.from(donut.position, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.scale, { x: 0, y: 0, z: 0, duration: 8 });
      gsap.from(donut.rotation, { x: 0, y: 0, z: 0, duration: 8 });
      scene.add(donut);
    }
  });

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  ////mouse vector
  const mouseVec = new THREE.Vector2();

  window.addEventListener("mousemove", (event) => {
    mouseVec.x = (event.clientX / sizes.width) * 2 - 1;
    mouseVec.y = -(event.clientY / sizes.height) * 2 + 1;
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 2;
  scene.add(camera);

  // const cameratl = new gsap.timeline({ delay: 5 });

  // cameratl.to(camera.position, {
  //   x: -4.5,
  //   y: -4.5,
  //   z: 4.5,
  //   duration: 5,
  //   onUpdate: () => {
  //     camera.lookAt(text);
  //   },
  // });
  // cameratl.to(camera.position, {
  //   x: 4.5,
  //   y: 4.5,
  //   z: 4.5,
  //   duration: 5,
  //   onUpdate: () => {
  //     camera.lookAt(text);
  //   },
  // });

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    if (mouseVec.x > 0.05 && mouseVec.y > 0.05) {
      gsap.to(camera.position, { x: 4.5, y: 4.5, z: 2, duration: 6 });
    }
    if (mouseVec.x < -0.05 && mouseVec.y < -0.05) {
      gsap.to(camera.position, { x: -4.5, y: -4.5, z: 2, duration: 6 });
    }
    if (mouseVec.x > 0.05 && mouseVec.y < -0.05) {
      gsap.to(camera.position, { x: 4.5, y: -4.5, z: 2, duration: 6 });
    }
    if (mouseVec.x < -0.05 && mouseVec.y > 0.05) {
      gsap.to(camera.position, { x: -4.5, y: 4.5, z: 2, duration: 6 });
    }
    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}
