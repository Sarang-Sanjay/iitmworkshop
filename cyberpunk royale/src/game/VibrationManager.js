export class VibrationManager {
  constructor(settingsManager) {
    this.settingsManager = settingsManager;
  }

  vibrate(pattern) {
    if (this.settingsManager.get('vibration') && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  }

  onCrash() {
    this.vibrate([200, 50, 200]); // Vibrate twice
  }

  onPickup() {
    this.vibrate(50); // Short vibration
  }
}
