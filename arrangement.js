/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [0];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 4;
  let h = canvasHeight / 2;
  for(let i=0; i<2; i++) {
    for(let j=0; j<4; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
        // center face
        let eyes = int(random(2,4));
        let cheek = random(3.5, 6);
        let nose = random(5.5,6);
        let temples = random(4,5);
        let mouth  = random(7.3,8);


        // let is_cyclops = random(0, 100);

        // if(is_cyclops < 10) {
        //   eye_value = 1;
        //   tilt_value = random(-5, 5);
        //   mouth_value = random(0, 1.7);
        // }

        push();
        translate(x, y);
        scale(w/25, h/25);
        
        myFace(cheek,nose,eyes,temples,mouth)
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
