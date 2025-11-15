# Cyberpunk Runner

A mobile-first 3D endless runner game set in a neon cyberpunk city.

## Features

*   **Endless Runner Gameplay:** The player auto-runs along a straight neon street, swiping to change lanes and jump over obstacles.
*   **Procedural World Generation:** The world is procedurally generated, creating an endless and varied cityscape for the player to run through.
*   **"Cyberpunk Royale" UI:** The UI is styled after "Clash Royale" but with a cyberpunk aesthetic, featuring chunky, tactile buttons and card-like panels.
*   **Original Story:** The game features a 100-fragment original story that unlocks as the player progresses.
*   **Sourced Assets:** The game uses high-quality, royalty-free assets for the UI, music, and sound effects.
*   **Settings and Persistence:** The game saves the player's high score and settings to `localStorage`.
*   **Audio and Final Polish:** The game features a full suite of sound effects and a synthwave background track, as well as device vibration and a glitch/scanline post-processing effect.

## Implementation Notes

The game is built with Vite, JavaScript, and Three.js. The code is structured into modules for different game components, such as `Player`, `World`, `UIManager`, `AudioManager`, and `StoryManager`.

## Running the Project Locally

1.  Clone the repository.
2.  Install the dependencies: `npm install`
3.  Run the development server: `npm run dev`
4.  Open the provided URL in your browser.
