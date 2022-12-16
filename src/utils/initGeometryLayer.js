import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import gsap from "gsap";

let camera, scene, renderer, clock;
const loader = new GLTFLoader();

// init

export function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 5;
  camera.position.x = 0.2;
  camera.position.y = -0.1;
  camera.rotation.z = 1;

  clock = new THREE.Clock();

  const light = new THREE.AmbientLight(0xffffff, 11);
  scene.add(light);

  loader.load("../../src/public/models/flashy_computer_setup.glb", (gltf) => {
    /*mixer = new THREE.AnimationMixer(gltf.scene);

    // Anims
    animation_1 = gltf.animations[0]; // first animation
    animation_2 = gltf.animations[1]; // first animation

    mixer.clipAction(animation_1).play();*/

    const model = gltf.scene;
    model.scale.set(0.05, 0.05, 0.05);

    gsap.to(camera.position, {
      z: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(camera.rotation, {
      z: 0,
      duration: 1,
    });
    gsap.to(model.rotation, {
      y: 1,
      duration: 1,
      delay: 1,
    });
    gsap.to(model.rotation, {
      y: Math.PI * 1.8,
      x: 0.5,
      duration: 2,
      delay: 1,
    });

    gsap.to(model.scale, {
      duration: 1,
      delay: 1,
      x: 0.015,
      y: 0.015,
      z: 0.015,
    });

    gsap.to(model.position, {
      duration: 1,
      delay: 1,
      x: 0.1,
      y: 0.5,
    });

    scene.add(model);

    // Start the animation loop
    // Start the animation loop
    function animate() {
      const time = clock.getElapsedTime();

      model.position.y = Math.cos(time) * 0.02 + 0.4;
      model.rotation.z = Math.cos(time) * 0.08;

      // Tell the browser to call this function again on the next frame
      requestAnimationFrame(animate);
    }
    animate();
    // return model;
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(0xffffff, 1);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// animation

function animation(time) {
  renderer.render(scene, camera);
}
