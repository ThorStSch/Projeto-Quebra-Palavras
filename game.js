var gameSettings = {
  playerSpeed: 200,
}

const screenWidth = 800; // Largura fixa do jogo
const screenHeight = Math.floor(screenWidth * (9 / 16)); // Proporção 16:9

var config = {
  type: Phaser.AUTO,
  width: screenWidth,
  height: screenHeight,
  scale: {
      mode: Phaser.Scale.SHOW_ALL,
      parent: 'index'
  },
  backgroundColor: 0x000000,
  scene: [Loading, Menu, ModeOne, ModeTwo, ModeThree, Final],
  pixelArt: true,
  physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
  }
}

var game = new Phaser.Game(config);
