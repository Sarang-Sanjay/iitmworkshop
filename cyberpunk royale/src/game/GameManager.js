export class GameManager {
  constructor(player, uiManager, settingsManager, storyManager, audioManager, vibrationManager) {
    this.player = player;
    this.uiManager = uiManager;
    this.settingsManager = settingsManager;
    this.storyManager = storyManager;
    this.audioManager = audioManager;
    this.vibrationManager = vibrationManager;

    this.score = 0;
    this.dataShards = 0;
    this.distance = 0;
    this.initialSpeed = 10;
    this.speedIncreaseRate = 0.05;
    this.gameState = 'menu'; // 'menu', 'playing', 'paused', 'gameOver'
  }

  startGame() {
    this.gameState = 'playing';
    this.score = 0;
    this.dataShards = 0;
    this.distance = 0;
    this.player.runSpeed = this.initialSpeed;
    this.player.mesh.position.set(0, 0.5, 0);
    this.audioManager.startMusic();
    // TODO: Reset world, obstacles etc.
  }

  pauseGame() {
    this.gameState = 'paused';
  }

  resumeGame() {
    this.gameState = 'playing';
  }

  update(deltaTime) {
    if (this.gameState !== 'playing') return;

    this.player.runSpeed += this.speedIncreaseRate * deltaTime;
    this.distance -= this.player.runSpeed * deltaTime;
    this.score = Math.floor(this.distance);
    this.storyManager.checkUnlock(this.distance);
  }

  collectPickup() {
    this.dataShards++;
    this.score += 100;
    this.audioManager.playSound('pickup');
    this.vibrationManager.onPickup();
  }

  gameOver() {
    this.gameState = 'gameOver';
    this.player.runSpeed = 0;
    this.audioManager.stopMusic();
    this.audioManager.playSound('crash');
    this.vibrationManager.onCrash();

    let highScore = this.settingsManager.get('highScore');
    if (this.score > highScore) {
      highScore = this.score;
      this.settingsManager.set('highScore', highScore);
    }

    this.uiManager.showGameOver(this.score, highScore);
  }
}
