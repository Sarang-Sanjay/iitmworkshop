import * as THREE from 'three';
import './style.css';
import { Player } from './game/Player.js';
import { Controls } from './game/Controls.js';
import { World } from './game/World.js';
import { ObstacleManager } from './game/ObstacleManager.js';
import { GameManager } from './game/GameManager.js';
import { Effects } from './game/Effects.js';
import { UIManager } from './ui/UIManager.js';
import { SettingsManager } from './game/SettingsManager.js';
import { StoryManager } from './game/StoryManager.js';
import { AudioManager } from './game/AudioManager.js';
import { VibrationManager } from './game/VibrationManager.js';
import { Postprocessing } from './game/Postprocessing.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Lighting & Fog
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
scene.fog = new THREE.Fog(0x000000, 10, 50);

// Core Game Modules
const world = new World(scene);
const player = new Player(scene, camera);
const storyManager = new StoryManager();
const settingsManager = new SettingsManager(storyManager);
const audioManager = new AudioManager(camera, settingsManager);
const vibrationManager = new VibrationManager(settingsManager);
const controls = new Controls(player, audioManager);
const obstacleManager = new ObstacleManager(scene);
const uiManager = new UIManager();
const gameManager = new GameManager(player, uiManager, settingsManager, storyManager, audioManager, vibrationManager);
uiManager.gameManager = gameManager;

// Postprocessing
const postprocessing = new Postprocessing(scene, camera, renderer, settingsManager);


// Clock
const clock = new THREE.Clock();

// Animation loop
function animate() {
  const deltaTime = clock.getDelta();

  if(gameManager.gameState === 'playing') {
    gameManager.update(deltaTime);
    player.update(deltaTime);
    world.update(player.mesh.position.z);
    obstacleManager.update(player.mesh.position.z);
    player.checkCollisions(obstacleManager, gameManager);
  }

  // Camera follows player regardless of game state
  const targetCameraPosition = new THREE.Vector3(player.mesh.position.x * 0.5, camera.position.y, player.mesh.position.z + 10);
  camera.position.lerp(targetCameraPosition, 0.1);
  camera.lookAt(player.mesh.position.x, 0, player.mesh.position.z - 5);

  requestAnimationFrame(animate);
  postprocessing.update(deltaTime);
}

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
