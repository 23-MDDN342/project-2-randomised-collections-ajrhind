const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 2000;

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

  background(bg_color1);


  // clear screen
  noStroke();


  // draw a 7x4 grid of faces
  let w = canvasWidth / 4;
  let h = canvasHeight / 2;
  for(let i=0; i<1; i++) {
    for(let j=0; j<12; j++) {
      let y = h/1 + h*i;
      let x = w/2 + w*j;
     
        // center face
        let cheek = random(3.5,4.2);
        let nose = random(5.5,6);
        let eyes = random(1.8,3);
        let temples = random(4,5);
        let mouth  = random(7.2,8);
        let sideRight = random(-1,1);
        let redEyes = random(1,300);
        let areTheyEvil = false; 
        if (redEyes > 298){
          areTheyEvil = true;
        }

      push();//Face
        let place = map(sideRight,-1,1,15,85);//x
        let upsie = map(eyes,1.8,3,130,150);//y
        translate(place*10, upsie*2);

        scale(w/25, h/25);
        myFace(cheek,nose,eyes,temples,mouth,sideRight,areTheyEvil)
        pop();
        fill(20,80);
        rect(0,0,960,500);
      }
  }

for(i=0; i<15; i++){//spotlight
  let leftSpot = map(i,0,100,100,980);
  let rightSpot = map(i,0,100,500,1200);
    noStroke();
    fill(255,5);
    strokeWeight(10);
    triangle(480,-150,leftSpot,500,rightSpot*1.5,500);

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
