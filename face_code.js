/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function myFace(tilt_value, eye_value, mouth_value) {

  let midX=0;
  let midY=0;


  let headSize = 20
  let eyeSize = 5; 
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  


strokeWeight(0.1);
stroke(255);
ellipse(midX,midY-3,14);

fill(100,255,255);

stroke(255,200,255);
beginShape();
// vertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-6,6);
curveVertex(0,10);
curveVertex(6,6);
vertex(7,-3);
// curveVertex(7,-3);
vertex(7,-3);
endShape(CLOSE);


stroke(0);
//guideline points
beginShape(POINTS);
vertex(-7,-3);//top left
vertex(-6,6);
vertex(0,10);//chin
vertex(6,6);
vertex(7,-3);//top right
endShape(CLOSE);

}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
