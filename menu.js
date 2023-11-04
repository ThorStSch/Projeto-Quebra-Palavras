
class Menu extends Phaser.Scene {
  constructor() {
      super("menu");
  }
  

  create() {

    this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
    this.background.setOrigin(0.5,0.5);
    this.background.setScale(1.7);
    this.background.x = config.width / 2;
    this.background.y = config.height / 2;

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
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    
    this.somConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    this.title = this.add.image(config.width / 2, config.height / 2 - 150, "title");
    this.play = this.add.image(config.width / 2, config.height / 2 - 40, "play");
    this.play.setScale(.8);
    this.play.setInteractive();
    this.openOptionsButton = this.add.image(config.width / 2, config.height - 40, "config");
    this.openOptionsButton.setScale(0.1);
    this.openOptionsButton.setInteractive();
    
    /*
    this.records = this.add.image(config.width / 2, config.height / 2 + 20, "records");
    this.records.setScale(.8);
    this.records.setInteractive();
*/
    this.optionsGroup = this.add.container(config.width / 2, config.height / 2);
    this.incSistem = this.add.image(60,60, "inc");
    this.decSistem = this.add.image(0,60, "dec");
    this.incSom = this.add.image(60,0, "inc");
    this.decSom = this.add.image(0,0, "dec");
    this.volumeConf = this.add.image(0,-60, "volume");
    this.somSistem = this.add.bitmapText(-150, 40, "pixelFont", "Sistema: ", 42);
    this.musicaSom = this.add.bitmapText(-95, -15, "pixelFont", "Som: ", 42);
    this.optionsGroup.add(this.incSistem);
    this.optionsGroup.add(this.decSistem);
    this.optionsGroup.add(this.incSom);
    this.optionsGroup.add(this.decSom);
    this.optionsGroup.add(this.volumeConf);
    this.optionsGroup.add(this.somSistem);
    this.optionsGroup.add(this.musicaSom);

    this.optionsGroup.setInteractive();
    this.optionsGroup.setDepth(2); // Defina a profundidade (z-index) maior para as opções
    this.optionsGroup.setVisible(false); // Inicialmente invisível

    this.modesGroup = this.add.container(config.width / 2, config.height / 2);
    this.easy = this.add.image(0,-60, "easy");
    //this.normal = this.add.image(0,0, "normal");
    //this.hard = this.add.image(0,60, "hard");

    
    this.modesGroup.add(this.easy);
    //this.modesGroup.add(this.normal);
    //this.modesGroup.add(this.hard);

    this.modesGroup.setScale(.5);
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
        this.optionsGroup.setVisible(false);
        this.music.resume(this.musicConfig);
        var teste = this.level;
        console.log(teste);
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
    this.openOptionsButton.setInteractive().on('pointerdown', () =>  {
        this.modal.setVisible(true); // Torna o modal visível
        this.optionsGroup.setVisible(true); // Torna a caixa de diálogo de opções visível
    });

    this.incSistem.setInteractive().on('pointerdown', () =>  {
        if (this.somConfig.volume < 1){
            this.somConfig.volume += 0.2;
            console.log(this.somConfig.volume);
            this.audioTest.play(this.somConfig);
            if (this.somConfig.volume >= 0.2){
                this.somConfig.mute = false;}
        }
    });
    this.decSistem.setInteractive().on('pointerdown', () =>  {
        if (this.somConfig.volume >= 0.2){
            this.somConfig.volume -= 0.2;
            console.log(this.somConfig.volume);
            this.audioTest.play(this.somConfig);
            if (this.somConfig.volume < 0.2){
                this.somConfig.volume = 0;
                this.somConfig.mute = true;}
        }
    });
    this.incSom.setInteractive().on('pointerdown', () =>  {
        this.musicConfig.loop = false;
        if (this.musicConfig.volume < 1){
            this.musicConfig.volume += 0.2;
            console.log(this.musicConfig.volume);
            this.audioTest.play(this.musicConfig);
            if (this.musicConfig.volume >= 0.2){
                this.musicConfig.mute = false;
            }
            this.musicConfig.loop = true;
            this.music.play(this.musicConfig);
            this.music.pause();
        }
        
    });
    this.decSom.setInteractive().on('pointerdown',  () =>  {
        this.musicConfig.loop = false;
        if (this.musicConfig.volume >= 0.2){
            this.musicConfig.volume -=  0.2;
            console.log(this.musicConfig.volume);
            this.audioTest.play(this.musicConfig);
            if (this.musicConfig.volume < 0.2){
                this.musicConfig.volume = 0;
                this.musicConfig.mute = true;
            }
            this.musicConfig.loop = true;
            this.music.play(this.musicConfig);
            this.music.pause();
        }
    });

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
            this.play.setScale(1);
            this.mouseOver.play(this.somConfig);

        });

        this.play.setInteractive().on('pointerout', () => {
            this.play.setScale(.8);
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
  
}
