//Defining global variables
var player; // pc
var gangster, pedestrian; //NPC
var rock, spikes; //Obstacles
var soda, HP, sheild, bullets; //Collectables
var wall1, wall2; //making invisible walls
var textBox;

var gamestate = 0;

//Variables for images
var playerimg, gangsterimg, rockimg, pedestrianimg, spikesimg, sodaimg, hpimg, sheildimg, bulletsimg, bg;


function preload() {

    bg = loadImage("Images/background.png");
    playerimg = loadImage("Images/player.png");
    gangsterimg = loadImage("Images/gangster.png");
    hpimg = loadImage("Images/heart.png");
    pedestrianimg = loadImage("Images/npc.png");
    rockimg = loadImage("Images/rock.png");
    spikesimg = loadImage("Images/spikes.png");
    sodaimg = loadImage("Images/sodacan.png");
    sheildimg = loadImage("Images/sheild.png");
    bulletimg = loadImage("Images/bullet.png");


}
function setup() {

    createCanvas(displayWidth - 20, displayHeight - 50);
    player = createSprite(300, displayHeight/2 -60, 20,20);
    player.addImage(playerimg);
    player.scale = 0.25;

     wall1 = createSprite(displayWidth/2-200, displayHeight/2 - 270, 1000, 10);
     wall2 = createSprite(displayWidth/2-200, displayHeight - 180, 1000, 10);
    wall1.visible = false;
    wall2.visible = false;

    textBox = createSprite(displayWidth/2+230,displayHeight/3-20, 500,50);
    textBox.visible = false;
    textBox.shapeColor = "blue";

    //player.debug = true;
    player.setCollider("rectangle",0,0,200,500);



}

function draw() {
 background(bg);
 drawSprites();

 player.collide(wall1);
 player.collide(wall2);

 if(gamestate == 0){
    textBox.visible = true;
     fill("red");
     textSize(50);
     text("Press Enter To Start!", displayWidth/2, displayHeight/3 );
     
     
 }

 if(keyWentDown("enter") && gamestate ==0){
     gamestate = 1;
     textBox.visible = false;
 }
  
 
 if(gamestate == 1){
 
 
 
    if(keyIsDown(UP_ARROW)){
     player.y = player.y-5;
 }
 if(keyIsDown(DOWN_ARROW)){
    player.y = player.y+5;
}
 }




    
}

