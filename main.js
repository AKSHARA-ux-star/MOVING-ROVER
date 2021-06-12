canvas=document.getElementById("myCanvas");
ctx=cavas.getContext("2d");

var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var rover_image="rover.png";
var background_image="mars.jpg";

function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_imgTag;

    rover_imgTag= new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_imgTag;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38')
    {
       up()
       console.log("up");
    }
    if(keyPressed=='40')
    {
        down()
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left()
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right()
        console.log("right");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y -=10;
        console.log("When up arrow is clicked" + rover_y+ " - " + rover_x);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y +=10;
        console.log("When down arrow is clicked x =" + rover_y + "|y=" + rover_x);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x -=10;
        console.log("When left arrow is clicked x =" + rover_y + "|y=" + rover_x);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <=500)
    {
        rover_x +=10;
        console.log("When right arrow is clicked x =" + rover_y + "|y=" + rover_x);
        uploadBackground;
        uploadrover;
    }
}