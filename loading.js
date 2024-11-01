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

      this.load.image("somOn", "assets/images/somOn.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("somOff", "assets/images/somOff.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("musicaOn", "assets/images/musicaOn.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("musicaOff", "assets/images/musicaOff.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("camisa", "assets/images/camisa.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("borracha", "assets/images/borracha.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("mochila", "assets/images/mochila.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("relogio", "assets/images/relogio.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("tesoura", "assets/images/tesoura.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("caderno", "assets/images/caderno.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("janela", "assets/images/janela.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("cenoura", "assets/images/cenoura.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("martelo", "assets/images/martelo.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("espelho", "assets/images/espelho.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("versao", "assets/images/versao.png",{
        frameWidth: 16,
        frameHeight: 16
      })

      this.load.image("voltar", "assets/images/voltar.png",{
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
