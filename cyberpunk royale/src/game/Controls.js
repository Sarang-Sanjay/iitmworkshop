export class Controls {
  constructor(player, audioManager) {
    this.player = player;
    this.audioManager = audioManager;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;

    this.addKeyboardListeners();
    this.addTouchListeners();
  }

  addKeyboardListeners() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.player.moveLeft(this.audioManager);
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.player.moveRight(this.audioManager);
          break;
        case 'ArrowUp':
        case 'KeyW':
        case 'Space':
          this.player.jump(this.audioManager);
          break;
      }
    });
  }

  addTouchListeners() {
    window.addEventListener('touchstart', (event) => {
      this.touchStartX = event.changedTouches[0].screenX;
      this.touchStartY = event.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (event) => {
      this.touchEndX = event.changedTouches[0].screenX;
      this.touchEndY = event.changedTouches[0].screenY;
      this.handleSwipe();
    }, { passive: true });
  }

  handleSwipe() {
    const swipeDistanceX = this.touchEndX - this.touchStartX;
    const swipeDistanceY = this.touchEndY - this.touchStartY;

    if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
      if (swipeDistanceX < -50) {
        this.player.moveLeft(this.audioManager);
      } else if (swipeDistanceX > 50) {
        this.player.moveRight(this.audioManager);
      }
    } else {
      if (swipeDistanceY < -50) {
        this.player.jump(this.audioManager);
      }
    }
  }
}
