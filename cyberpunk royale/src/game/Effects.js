import * as THREE from 'three';

export class Effects {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.rainParticles = null;
        this.createRain();
    }

    createRain() {
        const particleCount = 2000;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 50;
            positions[i + 1] = Math.random() * 50;
            positions[i + 2] = (Math.random() - 0.5) * 50;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.1,
            transparent: true,
            opacity: 0.5
        });

        this.rainParticles = new THREE.Points(particles, material);
        this.scene.add(this.rainParticles);
    }

    update(deltaTime) {
        if (this.rainParticles) {
            // Make it look like rain is falling
            this.rainParticles.position.y -= 15 * deltaTime;
             if (this.rainParticles.position.y < -10) {
                 this.rainParticles.position.y = 20;
             }

            // Keep the rain centered around the camera
            this.rainParticles.position.x = this.camera.position.x;
            this.rainParticles.position.z = this.camera.position.z - 20;
        }
    }
}
