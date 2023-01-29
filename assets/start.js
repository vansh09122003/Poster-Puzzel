class start extends Phaser.Scene
{
    constructor()
    {
        super('start');
    }
    preload()
    {
        this.load.image('start','assets/startGraphic.png');
        this.load.image('bk','assets/Background_2.png');
    }
    create()
    {
        this.add.image(700,400,'bk');
        this.add.image(700,400,'start').setScale(0.7);
    }
}