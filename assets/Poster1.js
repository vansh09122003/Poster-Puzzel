class Poster1 extends Phaser.Scene
{
    constructor()
    {
        super('Poster1');
    }
    preload()
    {
        this.load.image('piece1','assets/piece1.jpeg');
        this.load.image('piece2','assets/piece2.jpeg');
        this.load.image('piece3','assets/piece3.jpeg');
        this.load.image('piece4','assets/piece4.jpeg');
        this.load.image('piece5','assets/piece5.jpeg');
        this.load.image('piece6','assets/piece6.jpeg');
        this.load.image('piece7','assets/piece7.jpeg');
        this.load.image('piece8','assets/piece8.jpeg');
        this.load.image('piece9','assets/piece9.jpeg');
        this.load.image('piece10','assets/piece10.jpeg');
        this.load.image('piece11','assets/piece11.jpeg');
        this.load.image('piece12','assets/piece12.jpeg');
        this.load.image('preview1','assets/preview1.png');
        this.load.image('trigger','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
    }
    create()
    {
        this.add.image(700,400,'bk');
        this.add.image(200,650,'preview1').setScale(0.2);
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
