var seaImage,sea;
var shipImage,ship;


function preload(){


seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")




}

function setup(){
createCanvas(2000,1000);
sea=createSprite(500,500)
sea.addImage("water",seaImage)

ship=createSprite(500,500)
ship.addAnimation("swim",shipImage)

}

function draw() {
background("white");
sea.velocityX=-5
if(sea.x< 0 ) {

sea.x=sea.width/2

}





drawSprites();
}