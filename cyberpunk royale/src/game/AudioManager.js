import * as THREE from 'three';

const SFX_PATHS = {
  jump: '/assets/sfx/Audio/laserRetro_000.ogg',
  laneChange: '/assets/sfx/Audio/thrusterFire_000.ogg',
  pickup: '/assets/sfx/Audio/laserSmall_000.ogg',
  crash: '/assets/sfx/Audio/explosionCrunch_000.ogg',
  uiSelect: '/assets/sfx/Audio/computerNoise_001.ogg',
};

const MUSIC_PATH = '/assets/sfx/music.mp3';

export class AudioManager {
  constructor(camera, settingsManager) {
    this.camera = camera;
    this.settingsManager = settingsManager;
    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);

    this.sounds = {};
    this.music = null;

    this.loadSounds();
    this.loadMusic();
  }

  loadSounds() {
    const audioLoader = new THREE.AudioLoader();
    for (const key in SFX_PATHS) {
        audioLoader.load(SFX_PATHS[key], (buffer) => {
            const sound = new THREE.Audio(this.listener);
            sound.setBuffer(buffer);
            this.sounds[key] = sound;
        });
    }
  }

  loadMusic() {
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load(MUSIC_PATH, (buffer) => {
          this.music = new THREE.Audio(this.listener);
          this.music.setBuffer(buffer);
          this.music.setLoop(true);
          this.music.setVolume(0.5);
      });
  }

  playSound(name) {
    if (this.settingsManager.get('soundOn') && this.sounds[name] && !this.sounds[name].isPlaying) {
      this.sounds[name].play();
    }
  }

  startMusic() {
      if (this.settingsManager.get('soundOn') && this.music && !this.music.isPlaying) {
          this.music.play();
      }
  }

  stopMusic() {
      if (this.music && this.music.isPlaying) {
          this.music.stop();
      }
  }

  toggleSound(isOn) {
      this.settingsManager.set('soundOn', isOn);
      if (isOn) {
          this.startMusic();
      } else {
          this.stopMusic();
      }
  }
}
