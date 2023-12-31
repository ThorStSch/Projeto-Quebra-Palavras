class Loading extends Phaser.Scene {
  constructor() {
      super("bootGame");
  }

  preload(){

      this.load.image("background", "assets/images/bg-1.png");

      this.load.image("title", "assets/images/titulo.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("play", "assets/images/jogar.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("records", "assets/images/recordes.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("easy", "assets/images/iniciante.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("normal", "assets/images/normal.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("hard", "assets/images/desafio.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("config", "assets/images/opções.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("inc", "assets/images/aumentar.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("dec", "assets/images/diminuir.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("volume", "assets/images/volume.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("frameOn", "assets/images/frame.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("frameOff", "assets/images/frame2.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("confirmar", "assets/images/confirmar.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("gato", "assets/images/gato.png",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("cama", "assets/images/cama.png",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("folha", "assets/images/folha.png",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("bota", "assets/images/bota.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("queijo", "assets/images/queijo.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("caju", "assets/images/caju.jpeg",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("rabo", "assets/images/rabo.jpeg",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("telha", "assets/images/telha.jpeg",{
        frameWidth: 16,
        frameHeight: 16
      })
      
      this.load.image("dente", "assets/images/dente.jpeg",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("cacau", "assets/images/cacau.jpeg",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("vitoria", "assets/images/vitoria.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

      this.load.audio("audio_lose", "assets/sounds/lose.mp3");
      this.load.audio("audio_mouseOver", "assets/sounds/mouseOver.mp3");
      this.load.audio("audio_select", "assets/sounds/select.mp3");
      this.load.audio("music", "assets/sounds/background.mp3");
      this.load.audio("audio_test", "assets/sounds/boop.mp3");
      this.load.audio("audio_error", "assets/sounds/error.mp3");
  }

  create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("menu");
/*
      this.anims.create({
          key: "ship1_anim",
          frames: this.anims.generateFrameNumbers("ship"),
          frameRate: 20,
          repeat: -1
      });*/

  }
}
