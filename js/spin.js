var slider;
var slider1;
var button;
let distribution = new Array(360);

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255)
  textStyle(BOLD);
  colorMode(HSB);
  let p = createP('01');
  p.style('font-size', '40px');
  p.style('font-family', 'Courier New');
  p.position(10, 0);
  slider = createSlider(0, 360, 180);
  slider.position(80, 54);
  slider.style('width', '130px');
  slider.style('height', '10px');
  slider.class("slider")
  slider1 = createSlider(0, 60, 10);
  slider1.position (200, 155);
  slider1.style('width', '140px');
  slider1.class("slider")
  let p1 = createP('Are you running in circles? / 你在忙着什么转呢？');
  p1.style('font-size', '20px');
  p1.style('font-family', 'Courier New');
  p1.position(10, 70);
  let p2 = createP('At what speed?');
  p2.style('font-size', '20px');
  p2.style('font-family', 'Courier New');
  p2.position(10, 130);
  for (let i = 0; i < slider.value(); i++) {
     distribution[i] = floor(randomGaussian(width/5, width/4));
   }
 }

function draw() {
  background('#99CC99');
  frameRate(slider1.value() + 5);
  // if include the fr in setup(), its only going to run once
    // and hence the value could not be changed by the slider.
  // +5 as a the lowest fr rather than 0 so draw() won't be stopped after sliding to 0.
    // also, +5 gives better visual effect; smoother.
  translate(width / 2 , height / 2 + 20);
  for (let i = 0; i < slider.value(); i++) {
     rotate(TWO_PI / slider.value());
     noFill();
     stroke('#f753db');
     // bezier(0, 0, distribution[i], random(0, 500), random(0, 300), 0, distribution[i], 0, 0, 0, 0, distribution[i]);
     arc(0, 0, distribution[i], random(0, 400), 0, TWO_PI);
   }
 }

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}
//this is to readjust the window when refresh is not pressed;
