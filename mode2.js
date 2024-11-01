class ModeTwo extends Phaser.Scene {
    constructor() {
        super("mode2");
    }

    //Trissílabas
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
        console.log('Adicionando imagens');

        this.camisa = this.add.image(0, 0, "camisa");
        this.camisa.setVisible(false);
        this.camisa.setScale(.7);
        this.borracha = this.add.image(0, 0, "borracha");
        this.borracha.setVisible(false);
        this.borracha.setScale(.7);
        this.mochila = this.add.image(0, 0, "mochila");
        this.mochila.setVisible(false);
        this.mochila.setScale(.7);
        this.relogio = this.add.image(0, 0, "relogio");
        this.relogio.setVisible(false);
        this.relogio.setScale(.4);
        this.tesoura = this.add.image(0, 0, "tesoura");
        this.tesoura.setVisible(false);
        this.tesoura.setScale(1.3); 
        this.caderno = this.add.image(0, 0, "caderno");
        this.caderno.setVisible(false);
        this.caderno.setScale(.3);
        this.janela = this.add.image(0, 0, "janela");
        this.janela.setVisible(false);
        this.janela.setScale(.3);
        this.cenoura = this.add.image(0, 0, "cenoura");
        this.cenoura.setVisible(false);
        this.cenoura.setScale(.3)
        this.martelo = this.add.image(0, 0, "martelo");
        this.martelo.setVisible(false);
        this.martelo.setScale(.7);
        this.espelho = this.add.image(0, 0, "espelho");
        this.espelho.setVisible(false);
        this.espelho.setScale(1.3);

        //botão voltar
        this.voltar = this.add.image(config.width / 6, (config.height/100)*10, "voltar");
        this.voltar.setScale(.5);
        this.voltar.setInteractive();
        this.voltar.on('pointerdown', () => {
            this.scene.switch("menu");
            this.scene.stop();
            return;
          });

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

        const sceneMenu = this.scene.get('menu');
        this.soundOn = sceneMenu.soundOn;
        this.musicOn = sceneMenu.musicOn;
        console.log(this.somAnterior);

        this.somConfig = {
                mute: sceneMenu.somConfig.mute,
                volume: .6,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: false,
                delay: 0
            }
        
        console.log('botões de som');    
        
        if(this.soundOn){
            this.soundButton = this.add.image((config.width /8)*6- 40, (config.height/100)*10, "somOn");
        }
        else{
            this.soundButton = this.add.image((config.width /8)*6 - 40, (config.height/100)*10, "somOff");
        }
        if (config.width > config.height ){
        this.soundButton.setScale((config.width/config.height)/20);}
        else {this.soundButton.setScale((config.height/config.width)/10);}
        this.soundButton.setScale(0.10);
        this.soundButton.on('pointerdown', () => {
            this.toggleSound();
          });
        this.soundButton.setInteractive();

        if(this.musicOn){
        this.musicButton = this.add.image((config.width /8)*6 + 40, (config.height/100)*10, "musicaOn");}
        else{this.musicButton = this.add.image((config.width /8)*6 + 40, (config.height/100)*10, "musicaOff");}
        if (config.width > config.height ){
        this.musicButton.setScale((config.width/config.height)/20);}
        else {this.musicButton.setScale((config.height/config.width)/10);}
        this.musicButton.setScale(0.10);
        this.musicButton.on('pointerdown', () => {
            this.toggleMusic();
          });
        this.musicButton.setInteractive();


        this.modal = this.add.rectangle(0, 0, config.width, config.height, 0x000000, 0.9); 
        this.modal.setOrigin(0);
        this.modal.setInteractive(); // Torna o modal interativo
        this.modal.setVisible(false); // Inicialmente invisível
        this.modal.setDepth(2);

        console.log('imagens agrupadas');

        // adicionando imagens das palavras
        this.imagens = this.add.container((config.width/100)*50  , (config.height/100)*25);
        this.imagens.add(this.camisa);
        this.imagens.add(this.borracha);
        this.imagens.add(this.mochila)
        this.imagens.add(this.relogio);
        this.imagens.add(this.tesoura);
        this.imagens.add(this.caderno);
        this.imagens.add(this.janela);
        this.imagens.add(this.cenoura)
        this.imagens.add(this.martelo);
        this.imagens.add(this.espelho);
        this.imagens.setInteractive();
        this.imagens.setDepth(1);
        this.imagens.setScale(1);

       
        this.frameImagem = this.add.image((config.width/100)*50  , (config.height/100)*25 ,"frameOn");
        if (config.width > config.height ){
            this.frameImagem.setScale((config.width/config.height)/2);}
        else {this.frameImagem.setScale((config.height/config.width)/2);}
        //this.frameImagem.setScale(.7)
        this.frame1 = this.add.image((config.width/100)*5, (config.height/100)*60,"frameOn");
        if (config.width > config.height ){
            this.frame1.setScale((config.width/config.height)/10);}
        else {this.frame1.setScale((config.height/config.width)/4);}
        //this.frame1.setScale(.6)
        this.frame2 = this.add.image((config.width/100)*75, (config.height/100)*60,"frameOn");
        if (config.width > config.height ){
            this.frame2.setScale((config.width/config.height)/10);}
        else {this.frame2.setScale((config.height/config.width)/4);}
        //this.frame2.setScale(.6)
        this.frame3 = this.add.image((config.width/100)*75, (config.height/100)*60,"frameOn");
        if (config.width > config.height ){
            this.frame3.setScale((config.width/config.height)/10);}
        else {this.frame3.setScale((config.height/config.width)/4);}
        //this.frame3.setScale(.6)
        this.confirm = this.add.image(config.width / 2, (config.height/100)*78  , "confirmar");
        if (config.width > config.height ){
            this.confirm.setScale((config.width/config.height));}
            else {this.confirm.setScale((config.height/config.width));}
        this.confirmTxT = this.add.bitmapText(this.confirm.x - 25, this.confirm.y - 35, "pixelFont", "OK", 42 );
        this.confirmTxT.setScale(1.8)

        console.log('silabas separadas');

        //palavras e suas silabas do jogo
        this.silabas = [
            ["CA","MI","SA"],
            ["BOR","RA","CHA"], 
            ["MO","CHI","LA"], 
            ["RE","LO","GIO"],
            ["TE","SOU","RA"],
            ["CA","DER","NO"],
            ["JA","NE","LA"],
            ["CE","NOU","RA"],
            ["MAR","TE","LO"],
            ["ES","PE","LHO"]
        ];


        console.log('imagens das palavras');
        // imagens das palavras
        this.imagensItens = [
            [this.camisa],
            [this.borracha], 
            [this.mochila], 
            [this.relogio],
            [this.tesoura],
            [this.caderno],
            [this.janela], 
            [this.cenoura], 
            [this.martelo],
            [this.espelho]
        ];


        this.i = 0;
        this.frameTxt = this.add.bitmapText(this.frame1.x - 25, this.frame1.y - 20, "pixelFont", this.silabas[this.i][0], 54 );
        this.frameTxt.setTint(0x000000);
        this.frameTxt2 = this.add.bitmapText(this.frame2.x - 25, this.frame2.y - 20, "pixelFont", this.silabas[this.i][1], 54 );
        this.frameTxt2.setTint(0x000000);
        this.frameTxt3 = this.add.bitmapText(this.frame2.x - 25, this.frame2.y - 20, "pixelFont", this.silabas[this.i][2], 54 );
        this.frameTxt3.setTint(0x000000);
        this.imagensItens[this.i][0].setVisible(true)
        //this.i = this.i + 1;
        //this.txtChange();
        console.log('trocarbotão');
        this.trocarBotão();
        console.log('selectSilaba');
        this.selectSilaba();
           

   


        
    }

    update () {
        this.background.tilePositionX += 0.3
   
    }

    //ajeitar botões
    selectSilaba() {
        console.log('t2');
        var aux = 0;
        var selec = [false,false,false]
        
        this.erro = this.add.bitmapText(config.width / 2 - 140, 0, "pixelFont", "Resposta Incorreta", 46)
        .setTint(0x000000)
        .setVisible(false);

        // Lógica para a seleção de opções
        this.frame1.setInteractive().on('pointerdown', () => {
            if (selec[0] == false){
                selec[0] = true;
                console.log('Opção 1 selecionada');
                aux = 1;
                this.frame1.setTexture("frameOff");
            } else {
                console.log('Opção 1 deselecionada');
                selec[0] = false;
                aux = 0;
                this.frame1.setTexture("frameOn");
            }
        });

        
        // Lógica para a seleção de opções
        this.frame1.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            if (config.width > config.height ){
                this.frame1.setScale((config.width/config.height)/12+0.05);}
                else {this.frame1.setScale((config.height/config.width)/4.5);}
            this.frameTxt.setScale(1.6);
            
        });
        
        this.frame1.setInteractive().on('pointerout', () => {
            if (config.width > config.height ){
                this.frame1.setScale((config.width/config.height)/12);}
                else {this.frame1.setScale((config.height/config.width)/4.5);}
            this.frameTxt.setScale(1.3);
        });

        this.frame2.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
            if (selec[1] == false){
                selec[1] = true;
                console.log('Opção 2 selecionada');
                if (aux == 1) {
                    aux = 2;
                }
                this.frame2.setTexture("frameOff");
            } else {
                console.log('Opção 2 deselecionada');
                selec[1] = false;
                this.frame2.setTexture("frameOn");
            }
        });

        
        // Lógica para a seleção de opções
        this.frame2.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            if (config.width > config.height ){
                this.frame2.setScale((config.width/config.height)/12+0.05);}
                else {this.frame2.setScale((config.height/config.width)/4.5);}
            this.frameTxt2.setScale(1.6);
            
        });
        
        this.frame2.setInteractive().on('pointerout', () => {
            if (config.width > config.height ){
                this.frame2.setScale((config.width/config.height)/12);}
                else {this.frame2.setScale((config.height/config.width)/4.5);}
            this.frameTxt2.setScale(1.3);
        });  

        
        this.frame3.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
            if (selec[2] == false){
                selec[2] = true;
                console.log('Opção 3 selecionada');
                if (aux == 2) {
                    aux = 3;
                }
                this.frame3.setTexture("frameOff");
            } else {
                console.log('Opção 3 deselecionada');
                selec[2] = false;
                this.frame3.setTexture("frameOn");
            }
        });

        
        // Lógica para a seleção de opções
        this.frame3.setInteractive().on('pointerover', () => {
            this.mouseOver.play(this.somConfig);
            if (config.width > config.height ){
                this.frame3.setScale((config.width/config.height)/12+0.05);}
                else {this.frame3.setScale((config.height/config.width)/4.5);}
            this.frameTxt3.setScale(1.6);
            
        });
        
        this.frame3.setInteractive().on('pointerout', () => {
            if (config.width > config.height ){
                this.frame3.setScale((config.width/config.height)/12);}
                else {this.frame3.setScale((config.height/config.width)/4.5);}
            this.frameTxt3.setScale(1.3);
        });  

        this.confirm.setInteractive().on('pointerdown', () => {
            // Ação para a Opção 1
            if (selec[0] == true && selec[1] == true && selec[2] == true && aux == 3){
                this.selectSound.play(this.somConfig);
                this.erro.setVisible(false);
                this.imagensItens[this.i][0].setVisible(false)
                console.log('resposta correta');
                this.frame2.setTexture("frameOff");
                this.i = this.i + 1;
                //alterar para i < tamanho do array
                if (this.i < 10){this.trocarBotão();}//Fim do jogo
                else {
                    var timerNow = this.tempo;
                    this.pontos = 500 - timerNow;
                    console.log(this.pontos);
                    this.scene.switch("final")
                    this.scene.stop();
                    return;
                }
                this.imagensItens[this.i][0].setVisible(true)
                selec[0] = false;
                aux = 0;
                this.frame1.setTexture("frameOn");
                selec[1] = false;
                this.frame2.setTexture("frameOn");
                selec[2] = false;
                this.frame3.setTexture("frameOn");
                

            } else {
                console.log('resposta incorreta');
                this.erro.setVisible(true);
                this.audioError.play(this.somConfig);
            }
        });
    }


    trocarBotão () {
        
        this.localBtn = [[(config.width/100)*25],[(config.width/100)*50],[(config.width/100)*75]];
        this.locAl = [[-1],[-1],[-1]];
        this.aux1 = 0;
        while (this.aux1 < 3)
        {
            var randomX = Phaser.Math.Between(0,2)
            if (this.locAl[0] != randomX && this.locAl[1] != randomX){
                this.locAl[this.aux1] = randomX;
                this.aux1 = this.aux1 + 1;
            }
           
        }
        this.frame1.x = this.localBtn[this.locAl[0]];
        this.frame2.x = this.localBtn[this.locAl[1]];
        this.frame3.x = this.localBtn[this.locAl[2]];
                   
        this.frameTxt.setPosition(this.frame1.x - 40, this.frameTxt.y);
        this.frameTxt2.setPosition(this.frame2.x - 40, this.frameTxt2.y);
        this.frameTxt3.setPosition(this.frame3.x - 40, this.frameTxt3.y);
        this.frameTxt.setText(this.silabas[this.i][0]);
        this.frameTxt2.setText(this.silabas[this.i][1]);
        this.frameTxt3.setText(this.silabas[this.i][2]);
    }

    atualizarTempo() {
        // Incrementa o cronômetro em 1 segundo a cada chamada
        this.tempo++;
        this.textoTempo.setText('Tempo: ' + this.tempo);
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

    
