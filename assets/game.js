var config={
  type:Phaser.AUTO,
  width: 1400,
  height: 800,
  physics: {
      default: "arcade",
      arcade: {
          debug: false
      }
  },
  scene:[Poster1],
};

var pieceManager=[];
var triggerManager=[];
var game = new Phaser.Game(config);