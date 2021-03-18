canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
image=["1.jpg","2.jpg","3.jpg","4.jpg"];
randomnumber=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;

background_image=image[randomnumber];
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add()
{
    backgroundimgtag=new Image();
    backgroundimgtag.onload=uploadbackground;
    backgroundimgtag.src=background_image;

    roverimgtag=new Image();
    roverimgtag.onload=uploadrover;
    roverimgtag.src=rover_image;
    
}
function uploadbackground ()
{
ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverimgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
up();
console.log(up);
}
if(keyPressed=='40')
{
down();
console.log(down);
}

if(keyPressed=='37')
{
left();
console.log(left);
}

if(keyPressed=='39')
{
rigth();
console.log(rigth);
}
}
function up()
{
    if(rover_y>=0)
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
}

function left()
{
    if(rover_x>=0)
    rover_x=rover_x-10;
    uploadbackground();
    uploadrover();
}

function rigth()
{
    if(rover_x<=700)
    rover_x=rover_x+10;
    uploadbackground();
    uploadrover();
}

function down()
{
    if(rover_y<=500)
    rover_y=rover_y+10;
    uploadbackground();
    uploadrover();
}