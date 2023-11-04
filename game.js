var gameSettings = {
  playerSpeed: 200,
}

const screenWidth = 800; // Largura fixa do jogo
const screenHeight = Math.floor(screenWidth * (9 / 10)); // Proporção 16:9



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

window.addEventListener('resize', function () {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var scaleFactor = Math.min(newWidth / 1280, newHeight / 720);  // Use a resolução de referência
  this.scale.resize(newWidth * scaleFactor, newHeight * scaleFactor);
});

var game = new Phaser.Game(config);
