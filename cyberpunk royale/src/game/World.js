import * as THREE from 'three';

const SEGMENT_LENGTH = 50;
const SEGMENT_COUNT = 4;

export class World {
  constructor(scene) {
    this.scene = scene;
    this.segments = [];
    this.activeSegments = new THREE.Group();
    this.scene.add(this.activeSegments);

    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const segment = this.createSegment(i * -SEGMENT_LENGTH);
      this.segments.push(segment);
      this.activeSegments.add(segment);
    }
  }

  createSegment(zPosition) {
    const segment = new THREE.Group();
    segment.position.z = zPosition;

    const roadGeometry = new THREE.PlaneGeometry(10, SEGMENT_LENGTH);
    const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    segment.add(road);

    for (let i = 0; i < 10; i++) {
      const building = this.createBuilding();
      const side = Math.random() < 0.5 ? -1 : 1;
      building.position.set(side * (Math.random() * 15 + 10), 0, (Math.random() - 0.5) * SEGMENT_LENGTH);
      segment.add(building);
    }
    return segment;
  }

  createBuilding() {
    const building = new THREE.Group();
    const mainHeight = Math.random() * 30 + 15;
    const mainGeom = new THREE.BoxGeometry(Math.random() * 5 + 3, mainHeight, Math.random() * 5 + 3);
    const mainMat = new THREE.MeshStandardMaterial({ color: 0x101015 });
    const mainBlock = new THREE.Mesh(mainGeom, mainMat);
    mainBlock.position.y = mainHeight / 2;
    building.add(mainBlock);

    const signGeom = new THREE.BoxGeometry(0.2, Math.random() * 4 + 1, Math.random() * 4 + 1);
    const neonColors = [0xff00ff, 0x00ffff, 0xff0077];
    const signColor = neonColors[Math.floor(Math.random() * neonColors.length)];
    const signMat = new THREE.MeshStandardMaterial({ color: signColor, emissive: signColor, emissiveIntensity: 2 });
    const sign = new THREE.Mesh(signGeom, signMat);
    sign.position.set((mainBlock.geometry.parameters.width / 2 + 0.1) * (Math.random() < 0.5 ? 1 : -1), Math.random() * mainHeight * 0.7 + mainHeight * 0.1, 0);
    sign.rotation.y = Math.PI / 2;
    building.add(sign);

    return building;
  }

  update(playerPositionZ) {
    const lastSegment = this.segments[0];
    if (playerPositionZ < lastSegment.position.z + SEGMENT_LENGTH) {
      const recycledSegment = this.segments.shift();
      recycledSegment.position.z = this.segments[this.segments.length - 1].position.z - SEGMENT_LENGTH;
      this.segments.push(recycledSegment);
    }
  }
}
