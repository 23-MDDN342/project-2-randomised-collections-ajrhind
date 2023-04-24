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
function myFace(leftC,rightC,nose) {

  let midX=0;
  let midY=0;


strokeWeight(0.1);
// stroke(255);
noStroke();
ellipse(midX,midY-3,14,12);

// fill(100,255,255);
//----------------------FACE
stroke(255,200,255);
beginShape();
// vertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-6,6);
curveVertex(0,10);
curveVertex(6,6);
curveVertex(7,-3);
vertex(7,-3); 
vertex(7,-3);
endShape(CLOSE);

//--------------------SHADOWS
// stroke(255,100,255);
fill(155);
beginShape();//left cheek_______
vertex(-6.8,1);
curveVertex(-6.8,1);
curveVertex(-5.8,6.5);
vertex(-2,9.3);
curveVertex(leftC,4);
endShape(CLOSE);

beginShape();//right cheek_______
vertex(6.8,1);
curveVertex(6.8,1);
curveVertex(5.8,6.5);
vertex(2,9.3);
curveVertex(rightC,4);
endShape(CLOSE);
// try to make a map that works for both but u can use it oppostie wise 
// chloe said something about absolute numbers??? idk just try it

fill(155);

beginShape();//nose___________  
vertex(0,4.5);//mid
curveVertex(0,4.5);
curveVertex(nose-4,4);
curveVertex(nose-4,5);
curveVertex(0.5,nose)
curveVertex(-0.5,nose);//mid
curveVertex(-nose+4,5);
curveVertex(-nose+4,4);
curveVertex(0,4.5)
endShape(CLOSE);
// i think for the nose I need to fix that point in the middle cos it looks sharp and agro

beginShape();//eye left_______________
vertex(-3.8,-1.3);
curveVertex(-5,-1.2);
curveVertex(-5,-0);
curveVertex(-4,1.5);
curveVertex(-1,2);  
curveVertex(-1.5,-0.5);
endShape(CLOSE);

beginShape();//eye right_______________
vertex(3.8,-1.3);
curveVertex(5,-1.2);
curveVertex(5,0);
curveVertex(4,1.5)
curveVertex(1,2);
curveVertex(1.5,-0.5);
endShape(CLOSE);


beginShape();//temple left
vertex(-7,-1);
curveVertex(-7,-1);
curveVertex(-4,-4);
curveVertex(-4,-6);
curveVertex(-6.5,-5);
endShape(CLOSE);

beginShape();//temple right
vertex(7,-1);
curveVertex(7,-1);
curveVertex(4,-4);
curveVertex(4,-6);
curveVertex(6.5,-5);
endShape(CLOSE);

beginShape();//mouf
vertex(-1.9 ,7.2);
curveVertex(-1,6.5);
curveVertex(1,6.5);
vertex(1.9,7.2);




endShape(CLOSE);

stroke(255,100,100);



//guideline points MAIN
beginShape(POINTS);
vertex(-7,-3);//top left
vertex(-6,6);
vertex(0,10);//chin
vertex(6,6);
vertex(7,-3);//top right
//secondary
vertex(0,0);//eyes
vertex(0,-5)
//shadow ones
vertex(-3,4);//hollower cheek ish left
vertex(3,4);//hollow cheek right
vertex(-2,9.5);//chin outline
vertex(0,5);
endShape(CLOSE);


}
//make a box shadow around the edges to soften them, i dont know how so ask phoebe 

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
