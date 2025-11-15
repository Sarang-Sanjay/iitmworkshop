import * as THREE from 'three';

const LANE_POSITIONS = [-3, 0, 3];

export class Player {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.currentLane = 1;

    // Camera tilt
    this.targetCameraRotationZ = 0;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(LANE_POSITIONS[this.currentLane], 0.5, 0);
    this.scene.add(this.mesh);

    this.runSpeed = 10;
    this.isJumping = false;
    this.jumpTimer = 0;
    this.jumpHeight = 4;
    this.jumpDuration = 0.6;
  }

  moveLeft(audioManager) {
    if (this.currentLane > 0) {
      this.currentLane--;
      this.mesh.position.x = LANE_POSITIONS[this.currentLane];
      this.targetCameraRotationZ = 0.1;
      audioManager.playSound('laneChange');
    }
  }

  moveRight(audioManager) {
    if (this.currentLane < LANE_POSITIONS.length - 1) {
      this.currentLane++;
      this.mesh.position.x = LANE_POSITIONS[this.currentLane];
      this.targetCameraRotationZ = -0.1;
      audioManager.playSound('laneChange');
    }
  }

  jump(audioManager) {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpTimer = 0;
      audioManager.playSound('jump');
    }
  }

  update(deltaTime) {
    this.mesh.position.z -= this.runSpeed * deltaTime;

    this.camera.rotation.z += (this.targetCameraRotationZ - this.camera.rotation.z) * 0.1;
    this.targetCameraRotationZ *= 0.9;

    if (this.isJumping) {
      this.jumpTimer += deltaTime;
      const jumpProgress = Math.min(this.jumpTimer / this.jumpDuration, 1);
      this.mesh.position.y = 0.5 + this.jumpHeight * Math.sin(jumpProgress * Math.PI);

      if (jumpProgress >= 1) {
        this.isJumping = false;
        this.mesh.position.y = 0.5;
      }
    }
  }

  checkCollisions(obstacleManager, gameManager) {
    if (gameManager.gameState !== 'playing') return;

    const playerBox = new THREE.Box3().setFromObject(this.mesh);

    obstacleManager.obstacles.children.forEach(obstacle => {
      const obstacleBox = new THREE.Box3().setFromObject(obstacle);
      if (playerBox.intersectsBox(obstacleBox)) {
        gameManager.gameOver();
      }
    });

    obstacleManager.pickups.children.forEach(pickup => {
      const pickupBox = new THREE.Box3().setFromObject(pickup);
      if (playerBox.intersectsBox(pickupBox)) {
        pickup.removeFromParent();
        gameManager.collectPickup();
      }
    });
  }
}
