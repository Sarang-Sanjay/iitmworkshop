const DEFAULTS = {
  highScore: 0,
  soundOn: true,
  cameraStyle: 'smooth', // 'smooth' or 'snappy'
  cameraShake: true,
  vibration: true,
  reducedFx: false
};

const STORAGE_KEY = 'cyberpunkRunnerSettings';

export class SettingsManager {
  constructor(storyManager) {
    this.storyManager = storyManager;
    this.settings = this.load();
  }

  load() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...DEFAULTS, ...JSON.parse(stored) } : DEFAULTS;
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
    this.save();
  }

  reset() {
    this.settings = DEFAULTS;
    this.save();
    this.storyManager.reset();
    window.location.reload();
  }
}
