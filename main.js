Canvas= document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

var nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_num=Math.floor(Math.random()*4);


rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_img = "rover.png";
background_img = nasa_mars_images_array[random_num];

function add(){
    baground_img_Tag = new Image();
    baground_img_Tag.onload = uploadbackground;
    baground_img_Tag.src = background_img;

    rover_img_Tag = new Image();
    rover_img_Tag.onload = uploadrover;
    rover_img_Tag.src = rover_img;
}
function uploadbackground(){
ctx.drawImage(baground_img_Tag,0,0,Canvas.width, Canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img_Tag,rover_x,rover_y,rover_width, rover_height);
    }

    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
var keypressed = e.keyCode;
if (keypressed == "38"){
    up();
}
if (keypressed == "40"){
    down();
}
if (keypressed == "37"){
    left();
}

if (keypressed == "39"){
    right();
}
 }

 function up(){
    if (rover_y  >=0)
{
    rover_y=rover_y-10;
    console.log("When up arrow is pressed, x =" + rover_x + ", y=" + rover_y);
    uploadbackground();
    uploadrover();
}
 }
 function down(){
    if (rover_y  <=500)
{
    rover_y=rover_y+10;
    console.log("When up arrow is pressed, x =" + rover_x + ", y=" + rover_y);
    uploadbackground();
    uploadrover();
}
 }
 function left(){
    if (rover_x  >=0)
{
    rover_x=rover_x - 10;
    console.log("When up arrow is pressed, x =" + rover_x + ", y=" + rover_y);
    uploadbackground();
    uploadrover();
}}
function right(){
    if (rover_x  <=700)
{
    rover_x=rover_x+10;
    console.log("When up arrow is pressed, x =" + rover_x + ", y=" + rover_y);
    uploadbackground();
    uploadrover();
}}