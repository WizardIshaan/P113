function preload()
{

}

function setup()
{
 canvas = createCanvas(640,480);
 canvas.position(400, 250);
 video = createCapture(VIDEO);
 video.hide();
 tint_color = "";
}

function draw()
{
  image(video, 120, 80, 400, 300);
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  rect(50, 50, 20, 360);
  rect(580, 50, 20, 360);
  rect(50, 410, 550, 20);
  rect(50, 30, 550, 20);
  tint(tint_color);
}

function TakePhoto()
{
  save('Ishaan.png');
}

function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}






//background(256);
//line( 78, 400, 1, 10)




