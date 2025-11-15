export class UIManager {
  constructor() {
    this.gameManager = null;

    // Screens
    this.startScreen = document.getElementById('start-screen');
    this.settingsScreen = document.getElementById('settings-screen');
    this.storyLogScreen = document.getElementById('story-log-screen');
    this.storyViewerScreen = document.getElementById('story-viewer-screen');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.hud = document.getElementById('hud');

    // Buttons
    this.startButton = document.getElementById('start-button');
    this.storyButton = document.getElementById('story-button');
    this.settingsButton = document.getElementById('settings-button');
    this.backButton = document.getElementById('back-button');
    this.backToMenuButton = document.getElementById('back-to-menu-button');
    this.backToLogButton = document.getElementById('back-to-log-button');
    this.playAgainButton = document.getElementById('play-again-button');
    this.pauseButton = document.getElementById('pause-button');

    // Text elements
    this.scoreEl = document.getElementById('score');
    this.shardsEl = document.getElementById('shards');
    this.finalScoreEl = document.getElementById('final-score');
    this.highScoreEl = document.getElementById('high-score');

    // Story elements
    this.storyGrid = document.getElementById('story-grid');
    this.storyImage = document.getElementById('story-image');
    this.storyText = document.getElementById('story-text');

    this.addEventListeners();
  }

  addEventListeners() {
    this.startButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.startGame();
    });
    this.storyButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.showStoryLog();
    });
    this.settingsButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.showScreen(this.settingsScreen);
    });
    this.backButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.showScreen(this.startScreen);
    });
    this.backToMenuButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.showScreen(this.startScreen);
    });
    this.backToLogButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.showScreen(this.storyLogScreen);
    });
    this.playAgainButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.startGame();
    });
    this.pauseButton.addEventListener('click', () => {
      this.gameManager.audioManager.playSound('uiSelect');
      this.pauseGame();
    });
  }

  showScreen(screen) {
    this.startScreen.classList.add('hidden');
    this.settingsScreen.classList.add('hidden');
    this.storyLogScreen.classList.add('hidden');
    this.storyViewerScreen.classList.add('hidden');
    this.gameOverScreen.classList.add('hidden');
    this.hud.classList.add('hidden');
    screen.classList.remove('hidden');
  }

  startGame() {
    this.showScreen(this.hud);
    this.gameManager.startGame();
  }

  pauseGame() {
    // For now, we'll just go back to the start screen
    this.showScreen(this.startScreen);
    this.gameManager.pauseGame();
  }

  updateHUD() {
    this.scoreEl.textContent = `SCORE: ${this.gameManager.score}`;
    this.shardsEl.textContent = `SHARDS: ${this.gameManager.dataShards}`;
  }

  showGameOver(score, highScore) {
    this.finalScoreEl.textContent = `FINAL SCORE: ${score}`;
    this.highScoreEl.textContent = `HIGH SCORE: ${highScore}`;
    this.showScreen(this.gameOverScreen);
  }

  showStoryLog() {
    this.populateStoryGrid();
    this.showScreen(this.storyLogScreen);
  }

  populateStoryGrid() {
    this.storyGrid.innerHTML = '';
    this.gameManager.storyManager.fragments.forEach(fragment => {
      const fragEl = document.createElement('div');
      fragEl.classList.add('story-fragment');
      fragEl.textContent = fragment.id;
      if (fragment.unlocked) {
        fragEl.classList.add('unlocked');
        fragEl.addEventListener('click', () => this.showStoryFragment(fragment));
      }
      this.storyGrid.appendChild(fragEl);
    });
  }

  showStoryFragment(fragment) {
    this.storyImage.src = fragment.image;
    this.storyText.textContent = fragment.text;
    this.showScreen(this.storyViewerScreen);
  }
}
