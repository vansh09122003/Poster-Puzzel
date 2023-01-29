class Poster2 extends Phaser.Scene
{
    constructor()
    {
        super('Poster2');
    }
    preload()
    {
        this.load.image('piece1','assets/Poster-02/piece1.jpg');
        this.load.image('piece2','assets/Poster-02/piece2.jpg');
        this.load.image('piece3','assets/Poster-02/piece3.jpg');
        this.load.image('piece4','assets/Poster-02/piece4.jpg');
        this.load.image('piece5','assets/Poster-02/piece5.jpg');
        this.load.image('piece6','assets/Poster-02/piece6.jpg');
        this.load.image('piece7','assets/Poster-02/piece7.jpg');
        this.load.image('piece8','assets/Poster-02/piece8.jpg');
        this.load.image('piece9','assets/Poster-02/piece9.jpg');
        this.load.image('piece10','assets/Poster-02/piece10.jpg');
        this.load.image('piece11','assets/Poster-02/piece11.jpg');
        this.load.image('piece12','assets/Poster-02/piece12.jpg');
        this.load.image('preview2','assets/Poster-02/preview2.png');
        this.load.image('trigger','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
    }

    create()
    {
        this.add.image(700,400,'bk');
        this.add.image(200,650,'preview2').setScale(0.2);
        for (var i = 0; i < 12; i++) {
            var piece = this.add.sprite(90 + (i * 100), 90, 'piece'+(i+1)).setScale(0.4);
            piece.setName('piece'+(i+1));
            pieceManager.push(piece);
        }  
        for (var i = 0; i < pieceManager.length; i++) {
            pieceManager[i].setInteractive();
            this.input.setDraggable(pieceManager[i]);
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
        }
        var p=1;
        for(var i=0;i<4;i++){
            for(var j=0;j<3;j++){
                this.trigger=this.add.sprite(660+(i*160),290+(j*160),'trigger').setAlpha(0.5);
                this.trigger.name='piece'+p;
                triggerManager.push(this.trigger);
                p++;
            }
        }
        for(var i=0;i<12;i++){
            
        }
    }
    update()
    {
        for(var i=0;i<12;i++){
            if(this.checkOverlap(triggerManager[i],pieceManager[i])){
                pieceManager[i].x=triggerManager[i].x;
                pieceManager[i].y=triggerManager[i].y;
                pieceManager[i].setInteractable=false;
            }
        }
    }
    checkOverlap(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsB, boundsA);
    }
}