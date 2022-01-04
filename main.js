canvas=document.getElementById("canva");
ctx=canvas.getContext("2d");

nasa_pics=["nasa1.jpeg" , "nasa2.jpg" , "nasa3.jpg" , "nasa4.jpg" , "nasa5.jpg" , "nasa6.jpg" , "mars.jpg"];

random_bhai = Math.floor(Math.random() * 7);
console.log(random_bhai);

rover_width=100 ;
rover_height=90 ;
bgimage= nasa_pics[random_bhai];
console.log("backgroundimage="+ bgimage);
rover="rover.png";

rover_x=10;
rover_y=10;

function add()
{
    bgimage_tag= new Image;
    bgimage_tag.onload = uploadbackgroundimg;
    bgimage_tag.src=bgimage;

    roverimg_tag=new Image;
    roverimg_tag.onload = uploadrover;
    roverimg_tag.src=rover;
}

function uploadbackgroundimg()
{
    ctx.drawImage(bgimage_tag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverimg_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",click);
function click(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37")
    {
        Left();
        console.log("Left");
    }
    if (keyPressed=="38")
    {
        top();
        console.log("top");
    }
    if (keyPressed=="39")
    {
        right();
        console.log("right");
    }
    if (keyPressed=="40")
    {
        down();
        console.log("down");
    }
}
function top()
{
    if (rover_y>=0)
    {
        rover_y = rover_y-5;
        console.log("up arroe pressed,x=" + rover_x + ",y=" + rover_y);
        uploadbackgroundimg();
        uploadrover();
    }
}
function down()
{
    if (rover_y<=500)
    {
        rover_y = rover_y+5;
        console.log("up arroe pressed,x=" + rover_x + ",y=" + rover_y);
        uploadbackgroundimg();
        uploadrover();
    }
}
function Left()
{
    if (rover_x>=0)
    {
        rover_x = rover_x-5;
        console.log("up arroe pressed,x=" + rover_x + ",y=" + rover_y);
        uploadbackgroundimg();
        uploadrover();
    }
}
function right()
{
    if (rover_x<=700)
    {
        rover_x = rover_x+5;
        console.log("up arroe pressed,x=" + rover_x + ",y=" + rover_y);
        uploadbackgroundimg();
        uploadrover();
    }
}