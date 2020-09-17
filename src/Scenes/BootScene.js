
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload(){
    this.load.image('PhaserLogo', 'src/assets/images/Phaser.png');
  }

  create(){
    const phaserLogo = this.add.image(400, 300, 'PhaserLogo');
  }

}