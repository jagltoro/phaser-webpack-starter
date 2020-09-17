import "phaser";

import BootScene from "./Scenes/BootScene";
import Phaser from "phaser";

const Config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  pixelArt: true,
  roundPixels: true,
}

class Game extends Phaser.Game {
  constructor() {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
  }
}

window.onload = function () {
  window.game = new Game();
}
