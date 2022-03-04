var slider;
var slider1;
var button;
let distribution = new Array(360);

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255)
  button = createButton(":) try sliding");
  button.position (10,10);
  colorMode(HSB);
  slider = createSlider(0, 360, 180);
  slider.position(110, 10);
  slider.style('width', '200px');
  slider1 = createSlider(0, 60, 10);
  slider1.position (195, 85);
  slider1.style('width', '200px');
  let p = createP('Are you running around in circles? / 你在忙着什么转呢？');
  p.style('font-size', '20px');
  p.style('font-family', 'Courier New');
  p.position(10, 20);
  let p1 = createP('At what speed?');
  p1.style('font-size', '20px');
  p1.style('font-family', 'Courier New');
  p1.position(10, 65);
  for (let i = 0; i < slider.value(); i++) {
     distribution[i] = floor(randomGaussian(width/5, width/4));
   }
  frameRate(slider1.value());
 }

function draw() {
  background('#99CC99');
  translate(width / 2 , height / 2 + 20);
  for (let i = 0; i < slider.value(); i++) {
     rotate(TWO_PI / slider.value());
     // stroke(0);
     noFill();
     stroke('#f753db');
     // bezier(0, 0, distribution[i], random(0, 500), random(0, 300), 0, distribution[i], 0, 0, 0, 0, distribution[i]);
     arc(0, 0, distribution[i], random(0, 400), 0, TWO_PI);
     // triangle(0, 0, distribution[i], 0,0,0);
   }
 }
