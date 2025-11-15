import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const GlitchShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'amount': { value: 0.005 },
    'angle': { value: 0.02 },
    'seed': { value: 0.02 },
    'seed_x': { value: 0.02 },
    'seed_y': { value: 0.02 },
    'distortion_x': { value: 0.05 },
    'distortion_y': { value: 0.05 },
    'col_s': { value: 0.05 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float angle;
    uniform float seed;
    uniform float seed_x;
    uniform float seed_y;
    uniform float distortion_x;
    uniform float distortion_y;
    uniform float col_s;
    varying vec2 vUv;

    float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void main() {
      vec2 p = vUv;
      float xs = floor(gl_FragCoord.x / 0.5);
      float ys = floor(gl_FragCoord.y / 0.5);
      vec4 normal = texture2D (tDiffuse, p);

      float noise = rand(vec2(xs * seed, ys * seed)) * amount;

      float x = p.x + noise * distortion_x;
      float y = p.y + noise * distortion_y;

      vec2 offset = vec2(x, y);

      if (offset.x > 1.0) {
        offset.x = 1.0;
      }
      if (offset.y > 1.0) {
        offset.y = 1.0;
      }

      gl_FragColor = texture2D(tDiffuse, offset);
    }
  `
};

export class Postprocessing {
  constructor(scene, camera, renderer, settingsManager) {
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));

    this.glitchPass = new ShaderPass(GlitchShader);
    this.composer.addPass(this.glitchPass);

    this.settingsManager = settingsManager;
  }

  update(deltaTime) {
    if (this.settingsManager.get('reducedFx')) {
      this.glitchPass.enabled = false;
    } else {
      this.glitchPass.enabled = true;
      this.glitchPass.uniforms.seed.value = Math.random();
    }

    this.composer.render(deltaTime);
  }
}
