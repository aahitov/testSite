let x = 1021;
let mouseWheelDelta = 0;
let lastMouseWheelTime = 0;
let img;

function preload() {
  // Load the image in the preload function
  img = loadImage('map-1.png');
}
function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  background(img);
  
  // Update the position of the square based on the mouse wheel
  x += (-mouseWheelDelta * .25);
  
  // Reset the mouse wheel delta to 0 if it has not changed for .3 seconds
  if (millis() - lastMouseWheelTime > 300) {
    mouseWheelDelta = 0;
    x = x;
  }
  
  // Stop the square if out of domain
  if(x >= 1021){
    x = 1021;
  }
  if(x <= 115.6){
    x=115.6;
  }
  // Calculate the y position of the square based on the polynomial function
  let y = 0.00026 * (x - 760) * (x - 960) + 470;
  
  // Draw the square
  ellipse(x, y, 10, 10);

}

// Mouse wheel event handler function
function mouseWheel(event) {
  // Update the mouse wheel delta and the last mouse wheel time based on the event data
  mouseWheelDelta = event.deltaY;
  lastMouseWheelTime = millis();
}