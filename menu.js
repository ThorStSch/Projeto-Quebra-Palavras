
class Menu extends Phaser.Scene {
  constructor() {
      super("menu");
  }
  

  create() {

    this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
    this.background.setOrigin(0.5,0.5);
    this.background.setScale(1.7);
    this.background.x = config.width / 2;
    this.background.y = config.height / 2;0

    this.mouseOver = this.sound.add("audio_mouseOver");
    this.selectSound = this.sound.add("audio_select");
    this.loseSound = this.sound.add("audio_lose");
    this.audioTest = this.sound.add("audio_test")
    this.audioError = this.sound.add("audio_error");
//Music by <a href="https://pixabay.com/users/sinneschlösen-1888724/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=117362">Isak</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=117362">Pixabay</a>
    this.music = this.sound.add("music");
    this.level = 0;

    this.musicConfig = {
        mute: false,
        volume: .6,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }

    this.somConfig = {
        mute: false,
        volume: .6,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    // Define o estado inicial do som
    this.musicOn = true;
    this.soundOn = true;
    
    

    this.title = this.add.image(config.width / 2, config.height / 4 - 50, "title");
    this.title.setScale(1.5)
    this.play = this.add.image(config.width / 2, config.height / 2 - 40, "play");
    this.play.setScale(1.5);
    this.play.setInteractive();

    if(this.musicOn){
    this.musicButton = this.add.image(config.width / 2+40, (config.height / 4)*3, "musicaOn")
    }
    else
    {
    this.musicButton = this.add.image(config.width / 2+40, (config.height / 4)*3, "musicaOff")   
    }
    this.musicButton.setInteractive();
    this.musicButton.on('pointerdown', () => {
        this.toggleMusic();
      });
    this.musicButton.setScale(0.10);

    if(this.soundOn){
        this.soundButton = this.add.image(config.width / 2-40, (config.height / 4)*3, "somOn")
        }
        else
        {
        this.soundButton = this.add.image(config.width / 2-40, (config.height / 4)*3, "somOff")   
        }
        this.soundButton.setInteractive();
        this.soundButton.on('pointerdown', () => {
        this.toggleSound();
      });
    this.soundButton.setScale(0.10);
    
    
    /*
    this.records = this.add.image(config.width / 2, config.height / 2 + 20, "records");
    this.records.setScale(.8);
    this.records.setInteractive();
*/

    this.modesGroup = this.add.container(config.width / 2, config.height / 2);
    this.easy = this.add.image(0,-60, "easy");
    //this.normal = this.add.image(0,0, "normal");
    //this.hard = this.add.image(0,60, "hard");

    
    this.modesGroup.add(this.easy);
    //this.modesGroup.add(this.normal);
    //this.modesGroup.add(this.hard);
    if (config.width > config.height ){
        this.modesGroup.setScale((config.width/config.height));}
        else {this.modesGroup.setScale((config.height/config.width));}
    //this.modesGroup.setScale();
    this.modesGroup.setInteractive();
    this.modesGroup.setDepth(2);

    this.modesGroup.setVisible(false);

    this.music.play(this.musicConfig);
    this.modal = this.add.rectangle(0, 0,  window.innerWidth, window.innerHeight, 0x000000, 0.9); 
    this.modal.setOrigin(0);
    this.modal.setInteractive(); // Torna o modal interativo
    this.modal.setVisible(false); // Inicialmente invisível
    this.modal.setDepth(1);

    this.modal.setInteractive().on('pointerdown', () => {
        this.modal.setVisible(false); // Oculta o modal
        this.modesGroup.setVisible(false); // Oculta a caixa de diálogo de opções
  
    });



  /*
    this.records.setInteractive().on('pointerover', () =>  {
        this.records.setScale(1);
        this.mouseOver.play(this.somConfig);
    });

    this.records.setInteractive().on('pointerout', () =>  {
        this.records.setScale(.8);
    });

    this.records.setInteractive().on('pointerdown', () =>  {
        this.records.setScale(.6);
        this.selectSound.play(this.somConfig);
    });
    */
   /*  this.openOptionsButton.setInteractive().on('pointerdown', () =>  {
        this.modal.setVisible(true); // Torna o modal visível
        this.optionsGroup.setVisible(true); // Torna a caixa de diálogo de opções visível
    }); */

    this.selectGameMode();


     
  }

    update() {
        this.background.tilePositionX += 0.3
        }

    selectSyllable(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
      }

    selectGameMode() {
        this.play.setInteractive().on('pointerdown', () => {
            this.selectSound.play(this.somConfig);
            this.modal.setVisible(true);
            this.modesGroup.setVisible(true); //!optionsGroup.visible
        });

        this.play.setInteractive().on('pointerover', () => {
            this.play.setScale(1.7);
            this.mouseOver.play(this.somConfig);

        });

        this.play.setInteractive().on('pointerout', () => {
            this.play.setScale(1.5);
        });

        // Lógica para a seleção de opções
        this.easy.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
                console.log('Opção 1 selecionada');
                this.scene.switch("mode1");
        });

        // Lógica para a seleção de opções
        this.easy.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            this.easy.setScale(1.2);
            
        });

        this.easy.setInteractive().on('pointerout', () => {
            this.easy.setScale(1);
        
        });
        /*
        this.normal.setInteractive().on('pointerout', () => {
            this.normal.setScale(1);
        });

        this.hard.setInteractive().on('pointerout', () => {
            this.hard.setScale(1);
        });

        this.normal.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            this.normal.setScale(1.2);
        });

        this.hard.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            this.hard.setScale(1.2);
        });

        this.normal.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 2
            
                console.log('Opção 2 selecionada');
                this.scene.start("mode2");
            
        });

        this.hard.setInteractive().on('pointerdown', () => {
                console.log('Opção 3 selecionada');
                this.scene.start("mode3");
        });
        */
    }

    toggleMusic() {
        if (this.musicOn) {
          this.musicOn = false;
          this.sound.pauseAll(); // Pausa a música
          this.musicButton.setTexture("musicaOff")
        } else {
          this.musicOn = true;
          this.sound.resumeAll(); // Retoma a música
          this.musicButton.setTexture("musicaOn")
        }
    }

    toggleSound() {
        if (this.soundOn) {
          this.soundOn = false;
          this.somConfig.mute = true; // silencia os sons
          this.soundButton.setTexture("somOff")
        } else {
          this.soundOn = true;
          this.somConfig.mute = false // desilencia os sons
          this.soundButton.setTexture("somOn")
        }
    }
  
}
