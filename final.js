class Final extends Phaser.Scene {
    constructor() {
        super("final");
    }

    create () {
        this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background.setOrigin(0.5,0.5);
        this.background.setScale(1.7);
        this.background.x = config.width / 2;
        this.background.y = config.height / 2;
        const sceneMode1 = this.scene.get('mode1');
        console.log(sceneMode1.pontos);
        this.frameImagem = this.add.image(config.width / 2 , config.height / 2 - 60,"frameOn");
        this.frameImagem.setScale(.7);

        this.pontuação = this.add.bitmapText(config.width / 2-100, config.height/2-80, "pixelFont", "pontos: " + sceneMode1.pontos, 46);
        this.pontuação.setTint(0x000000);
        this.add.image(config.width / 2 , config.height / 2 , 'vitoria')
            .setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
        // Redirecione para o URL do formulário do Google
             window.location.href = 'https://forms.gle/hroRX6zuNdLQHEFz9';
            });
        
        this.frameImagem.setInteractive().on('pointerdown', () => {
            this.scene.switch("menu");
        })

    }

    update () {
        this.background.tilePositionX += 0.3
   
    }
}