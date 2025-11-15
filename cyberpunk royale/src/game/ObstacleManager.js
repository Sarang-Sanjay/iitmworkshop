import * as THREE from 'three';

const LANE_POSITIONS = [-3, 0, 3];
const SPAWN_DISTANCE = 50;

export class ObstacleManager {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = new THREE.Group();
    this.pickups = new THREE.Group();
    this.scene.add(this.obstacles);
    this.scene.add(this.pickups);

    this.lastSpawnZ = 0;
  }

  spawnObjects(playerPositionZ) {
    if (this.lastSpawnZ - playerPositionZ > 10) {
      const lane = Math.floor(Math.random() * 3);
      const objectType = Math.random() < 0.7 ? 'obstacle' : 'pickup';

      if (objectType === 'obstacle') {
        const obstacle = this.createObstacle();
        obstacle.position.set(LANE_POSITIONS[lane], 0.5, playerPositionZ - SPAWN_DISTANCE);
        this.obstacles.add(obstacle);
      } else {
        const pickup = this.createPickup();
        pickup.position.set(LANE_POSITIONS[lane], 1, playerPositionZ - SPAWN_DISTANCE);
        this.pickups.add(pickup);
      }
      this.lastSpawnZ = playerPositionZ;
    }
  }

  createObstacle() {
    const geom = new THREE.BoxGeometry(2, 1, 1);
    const mat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    return new THREE.Mesh(geom, mat);
  }

  createPickup() {
    const geom = new THREE.OctahedronGeometry(0.5, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 3 });
    return new THREE.Mesh(geom, mat);
  }

  update(playerPositionZ) {
    this.spawnObjects(playerPositionZ);

    [...this.obstacles.children, ...this.pickups.children].forEach(child => {
      if (child.position.z > playerPositionZ + 10) {
        child.removeFromParent();
      }
    });
  }
}
