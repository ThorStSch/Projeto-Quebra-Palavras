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


        

    }

    update () {
        this.background.tilePositionX += 0.3
    }



    
}