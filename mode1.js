class ModeOne extends Phaser.Scene {
    constructor() {
        super("mode1");
    }


    //Dissílabas
    create () {
        this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background.setOrigin(0.5,0.5);
        this.background.setScale(1.7);
        this.background.x = config.width / 2;
        this.background.y = config.height / 2;
        this.tempo = 0; // Inicializa o cronômetro em zero
        this.pontos = 0;

        this.textoTempo = this.add.text(config.width / 2 -50,  60, 'Tempo: 0', { fontSize: '24px', fill: '#000' });
        this.textoTempo.setDepth(3);
    
        // Configura um evento de atualização para atualizar o cronômetro a cada segundo
        this.time.addEvent({
          delay: 1000, // 1 segundo (1000 milissegundos)
          callback: this.atualizarTempo,
          callbackScope: this,
          loop: true // O evento se repetirá indefinidamente
        });
      
        this.gato = this.add.image(0, 0, "gato");
        this.gato.setVisible(false);
        this.cama = this.add.image(0, 0, "cama");
        this.cama.setVisible(false);
        this.folha = this.add.image(0, 0, "folha");
        this.folha.setVisible(false);
        this.bota = this.add.image(0, 0, "bota");
        this.bota.setVisible(false);
        this.queijo = this.add.image(0, 0, "queijo");
        this.queijo.setVisible(false);
        this.caju = this.add.image(0, 0, "caju");
        this.caju.setVisible(false);
        this.caju.setScale(.4);
        this.rabo = this.add.image(0, 0, "rabo");
        this.rabo.setVisible(false);
        this.rabo.setScale(.4);
        this.telha = this.add.image(0, 0, "telha");
        this.telha.setVisible(false);
        this.telha.setScale(.4)
        this.dente = this.add.image(0, 0, "dente");
        this.dente.setVisible(false);
        this.dente.setScale(.4);
        this.cacau = this.add.image(0, 0, "cacau");
        this.cacau.setVisible(false);
        this.cacau.setScale(.4);

        this.mouseOver = this.sound.add("audio_mouseOver");
        this.selectSound = this.sound.add("audio_select");
        this.loseSound = this.sound.add("audio_lose");
        this.audioTest = this.sound.add("audio_test")
        this.audioError = this.sound.add("audio_error");
        //this.music = this.sound.add("music");
        this.level = 0;
    
       /* this.musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }*/
        
        this.somConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.openOptionsButton = this.add.image(config.width / 2, config.height - 60, "config");
        this.openOptionsButton.setScale(0.15);
        this.openOptionsButton.setInteractive();
        this.optionsGroup = this.add.container(config.width / 2, config.height / 2);
        this.incSistem = this.add.image(60,60, "inc");
        this.decSistem = this.add.image(0,60, "dec");
        //this.incSom = this.add.image(60,0, "inc");
        //this.decSom = this.add.image(0,0, "dec");
        this.volumeConf = this.add.image(0,-60, "volume");
        this.somSistem = this.add.bitmapText(-150, 40, "pixelFont", "Sistema: ", 42);
        //this.musicaSom = this.add.bitmapText(-95, -15, "pixelFont", "Som: ", 42);
        this.optionsGroup.add(this.incSistem);
        this.optionsGroup.add(this.decSistem);
        //this.optionsGroup.add(this.incSom);
        //this.optionsGroup.add(this.decSom);
        this.optionsGroup.add(this.volumeConf);
        this.optionsGroup.add(this.somSistem);
        //this.optionsGroup.add(this.musicaSom);
    
        this.optionsGroup.setInteractive();
        this.optionsGroup.setDepth(3); // Defina a profundidade (z-index) maior para as opções
        this.optionsGroup.setVisible(false); // Inicialmente invisível

        this.modal = this.add.rectangle(0, 0, config.width, config.height, 0x000000, 0.9); 
        this.modal.setOrigin(0);
        this.modal.setInteractive(); // Torna o modal interativo
        this.modal.setVisible(false); // Inicialmente invisível
        this.modal.setDepth(2);

        this.imagens = this.add.container(config.width / 2, config.height / 2 - 80);
        this.imagens.add(this.gato);
        this.imagens.add(this.cama);
        this.imagens.add(this.folha)
        this.imagens.add(this.bota);
        this.imagens.add(this.queijo);
        this.imagens.add(this.caju);
        this.imagens.add(this.rabo);
        this.imagens.add(this.telha)
        this.imagens.add(this.dente);
        this.imagens.add(this.cacau);
        this.imagens.setInteractive();
        this.imagens.setDepth(1);
        this.imagens.setScale(1);

       
        this.frameImagem = this.add.image(config.width / 2 , config.height / 2 - 110,"frameOn");
        this.frameImagem.setScale(.7)
        this.frame1 = this.add.image(0, config.height / 2 + 100,"frameOn");
        this.frame1.setScale(.2)
        this.frame2 = this.add.image(0, config.height / 2 + 100,"frameOn");
        this.frame2.setScale(.2)
        this.confirm = this.add.image(config.width / 2, config.height - 150, "confirmar");
        this.confirmTxT = this.add.bitmapText(this.confirm.x - 15, this.confirm.y - 20, "pixelFont", "OK", 42 ); 

        this.silabas = [
            ["GA","TO"],
            ["CA","MA"], 
            ["FO","LHA"], 
            ["BO","TA"],
            ["QUEI","JO"],
            ["CA","JU"],
            ["RA","BO"],
            ["TE","LHA"],
            ["DEN","TE"],
            ["CA","CAU"]
        ];

        this.imagensItens = [
            [this.gato],
            [this.cama], 
            [this.folha], 
            [this.bota],
            [this.queijo],
            [this.caju],
            [this.rabo], 
            [this.telha], 
            [this.dente],
            [this.cacau]
        ];

        this.modal.setInteractive().on('pointerdown', () => {
            this.modal.setVisible(false); // Oculta o modal
            this.optionsGroup.setVisible(false);
            var teste = this.level;
            console.log(teste);
        });

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
       /* this.incSom.setInteractive().on('pointerdown', () =>  {
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
        }); */

        this.i = 0;
        this.frameTxt = this.add.bitmapText(this.frame1.x - 40, this.frame1.y - 20, "pixelFont", this.silabas[this.i][0], 64 );
        this.frameTxt.setTint(0x000000);
        this.frameTxt2 = this.add.bitmapText(this.frame2.x - 40, this.frame2.y - 20, "pixelFont", this.silabas[this.i][1], 64 );
        this.frameTxt2.setTint(0x000000);
        this.imagensItens[this.i][0].setVisible(true)
        //this.i = this.i + 1;
        //this.txtChange();
        this.trocarBotão();
        this.selectSilaba();
           

   


        
    }

    update () {
        this.background.tilePositionX += 0.3
   
    }

    //ajeitar botões
    selectSilaba() {
        var aux = 0;
        var selec1 = false
        var selec2 = false
        this.erro = this.add.bitmapText(config.width / 2 - 140, 0, "pixelFont", "Resposta Incorreta", 46)
        .setTint(0x000000)
        .setVisible(false);

        // Lógica para a seleção de opções
        this.frame1.setInteractive().on('pointerdown', () => {
            if (selec1 == false){
                selec1 = true;
                console.log('Opção 1 selecionada');
                aux = 1;
                this.frame1.setTexture("frameOff");
            } else {
                console.log('Opção 1 deselecionada');
                selec1 = false;
                aux = 0;
                this.frame1.setTexture("frameOn");
            }
        });

        
        // Lógica para a seleção de opções
        this.frame1.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            this.frame1.setScale(.25);
            this.frameTxt.setScale(1.6);
            
        });
        
        this.frame1.setInteractive().on('pointerout', () => {
            this.frame1.setScale(.2);
            this.frameTxt.setScale(1.3);
        });

        this.frame2.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
            if (selec2 == false){
                selec2 = true;
                console.log('Opção 2 selecionada');
                if (aux == 1) {
                    aux = 2;
                }
                this.frame2.setTexture("frameOff");
            } else {
                console.log('Opção 2 deselecionada');
                selec2 = false;
                this.frame2.setTexture("frameOn");
            }
        });

        
        // Lógica para a seleção de opções
        this.frame2.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            this.frame2.setScale(.25);
            this.frameTxt2.setScale(1.6);
            
        });
        
        this.frame2.setInteractive().on('pointerout', () => {
            this.frame2.setScale(.2);
            this.frameTxt2.setScale(1.3);
        });  

        this.confirm.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
            if (selec2 == true && selec1 == true && aux == 2){
                this.erro.setVisible(false);
                this.imagensItens[this.i][0].setVisible(false)
                console.log('resposta correta');
                this.frame2.setTexture("frameOff");
                this.i = this.i + 1;
                //alterar para i < tamanho do array
                if (this.i < 10){this.trocarBotão();}
                else {
                    var timerNow = this.tempo;
                    this.pontos = 115 - timerNow;
                    console.log(this.pontos);
                    this.scene.switch("final")
                    this.scene.stop();
                    return;
                }
                this.imagensItens[this.i][0].setVisible(true)
                selec1 = false;
                aux = 0;
                this.frame1.setTexture("frameOn");
                selec2 = false;
                this.frame2.setTexture("frameOn");
                

            } else {
                console.log('resposta incorreta');
                this.erro.setVisible(true);
                this.audioError.play(this.somConfig);
            }
        });
    }


    trocarBotão () {
        var randomX = Phaser.Math.Between(0, 1);
        var num = 0;
        if (randomX == 0) {
            num = 80;
        } else {
            num = -80;
        }

        this.frame1.x = config.width / 2 + num;
        this.frame2.x = config.width / 2 - num;

        this.frameTxt.setPosition(this.frame1.x - 20, this.frameTxt.y);
        this.frameTxt2.setPosition(this.frame2.x - 20, this.frameTxt2.y);
        this.frameTxt.setText(this.silabas[this.i][0]);
        this.frameTxt2.setText(this.silabas[this.i][1]);
    }

    atualizarTempo() {
        // Incrementa o cronômetro em 1 segundo a cada chamada
        this.tempo++;
        this.textoTempo.setText('Tempo: ' + this.tempo);
      }
    
    
}