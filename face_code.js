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
function myFace(cheek,nose,eyes,temples,mouth,sideRight,highLs) {

  let midX=0;
  let midY=0;

  
  //----------------------FACE---------------------------------------------------------------------
  strokeWeight(0.1);
  fill(135);
  noStroke();
ellipse(midX,midY-3,13,12);

// stroke(100,200,100);
stroke(135);
beginShape();
  // curveVertex(-7,-3);
  vertex(6,-3); 
  // curveVertex(-6.7,-3);
  curveVertex(-5,-3);
  curveVertex(-6.7,-1.5);
  curveVertex(-5.5,6);
  curveVertex(0,10);
  curveVertex(5.5,6);
  curveVertex(6.7,-1.5);
  // vertex(6.9,-3);
endShape(CLOSE);

// --------------------SHADOWS-----------------------------MID-------------------------------
fill(70);
stroke(70);
strokeWeight(0.05);
beginShape();//left cheek____________
  vertex(-6.8,0);
  curveVertex(-6.8,0);
  curveVertex(-5.7,6);
  vertex(-2.2,9.2);
  curveVertex(-cheek-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//right cheek___________
  vertex(6.8,0);
  curveVertex(6.8,0);
  curveVertex(5.7,6);
  vertex(2.2,9.2);
  curveVertex(cheek-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//nose_______________
  vertex(0,4);//mid
  curveVertex(0,4);
  curveVertex(1.5,4);
  curveVertex(1.5+sideRight/2,5);
  curveVertex(sideRight+0.7,nose)
  curveVertex(sideRight-0.7,nose);//mid
  curveVertex(-1.5+sideRight/3,5);
  curveVertex(-1.5,4);
  curveVertex(0,4)
endShape(CLOSE);

beginShape();//eye left_______________
  vertex(-3.5,-1);
  curveVertex(-4,-1);
  curveVertex(-5,-0);
  curveVertex(-4.5+sideRight/2,1.5);//mid
  curveVertex(-1.75,eyes-0.1);
  curveVertex(-1,1.5); 
  curveVertex(-1.5,-0.5);
endShape(CLOSE);

beginShape();//eye right_______________
  vertex(3.5,-1);
  curveVertex(4,-1);
  curveVertex(5,0);
  curveVertex(4.5+sideRight/2,1.5)//mid
  curveVertex(1.75,eyes-0.1);
  curveVertex(1,1.5);
  curveVertex(1.5,-0.5);
endShape(CLOSE);

beginShape();//temple left_________________
  vertex(-6.85,-1);
  curveVertex(-6.85,-1);
  curveVertex(-temples-sideRight/2,-4);
  curveVertex(-5.4,-6);
  curveVertex(-6.4,-4.3);
endShape(CLOSE);

beginShape();//temple right___________________
  vertex(6.85,-1);
  curveVertex(6.85,-1);
  curveVertex(temples-sideRight/2,-4);
  curveVertex(5.4,-6);
  curveVertex(6.4,-4.3);
endShape(CLOSE);

beginShape();//mouf__________________
  curveVertex(-1,6.5);
  curveVertex(1,6.5);
  vertex(1.9,7.2);
  curveVertex(sideRight,mouth);
  curveVertex(-1.9 ,7.2);
endShape(CLOSE);

//--------------------------------------------------------------DARK---------------------------
fill(40);
stroke(40);
strokeWeight(0.05);
beginShape();//left cheek____________
  vertex(-6.6,2);
  curveVertex(-6.6,2);
  curveVertex(-5.7,6);
  vertex(-4,7.8);
  curveVertex(-(cheek*1.3)-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//right cheek___________
  vertex(6.6,2);
  curveVertex(6.6,2);
  curveVertex(5.7,6);
  vertex(4,7.8);
  curveVertex((cheek*1.3)-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//nose_______________
  vertex(0,4.8);//mid
  curveVertex(1,4.5);
  curveVertex(1+sideRight/2,5);
  curveVertex(sideRight+0.4,nose-0.1)
  curveVertex(sideRight-0.4,nose-0.1);//mid
  curveVertex(-1+sideRight/3,5);
  curveVertex(-1,4.5);
  curveVertex(0,4.8)
endShape(CLOSE);

beginShape();//eye left_______________
  vertex(-3,-0.4);
  curveVertex(-3,-0.4);
  curveVertex(-3.8,0);
  curveVertex(-3+sideRight/2,0.8);//mid
  curveVertex(-1.9,(eyes/1.3)-1);
  curveVertex(-1.7,-0.1);
endShape(CLOSE);

beginShape();//eye right_______________
  vertex(3,-0.4);
  curveVertex(3,-0.4);
  curveVertex(3.8,0);
  curveVertex(3+sideRight/2,0.8)//mid
  curveVertex(1.9,(eyes/1.3)-1);
  curveVertex(1.7,-0.1);
endShape(CLOSE);

beginShape();//temple left_________________
  vertex(-6.8,-1.5);
  curveVertex(-6.8,-1.5);
  curveVertex((-temples-1)-sideRight/2,-4);
  curveVertex(-6.3,-4.5);
endShape(CLOSE);

beginShape();//temple right___________________
  vertex(6.8,-1.5);
  curveVertex(6.8,-1.5);
  curveVertex((temples+1)-sideRight/2,-4);
  curveVertex(6.3,-4.5);
endShape(CLOSE);

beginShape();//top of the head FILL IN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
endShape(CLOSE);

beginShape();//mouf__________________
  curveVertex(-1,6.6);
  curveVertex(1,6.6);
  vertex(1.9,7.2);
  curveVertex(0,7);
  curveVertex(-1.9 ,7.2);
endShape(CLOSE);

//-----------------------------------------------------------HIGHLIGHT-----------------------------

fill(160);
noStroke();
beginShape();//nose forehead thing
vertex(-0.3,1);
curveVertex(-0.3,1);
curveVertex(-0.5,3.5);//bottom left
curveVertex(0.5,3.5);//bottom right
curveVertex(0.3,1);
curveVertex(-sideRight/2+1,-1.6);//left top
curveVertex(0,-3);//top mid 
curveVertex(-sideRight/2-1,-1.6);//top right
endShape(CLOSE);

beginShape();//cheek left
// vertex(-1,2);
curveVertex(-1,eyes);
curveVertex(-1.8,4);
curveVertex((-sideRight/2)-4,(eyes/1.3)+sideRight/6);
curveVertex(-2,eyes+0.1);
endShape(CLOSE);

beginShape();//cheek right
curveVertex(1,eyes);
curveVertex(1.8,4);
curveVertex(-sideRight+3,eyes);
curveVertex(2,eyes+0.1);
endShape(CLOSE);

// if(sideRigh<0){

// }

//guideline points MAIN-----------------------------------------------------------------------
// stroke(255,100,100);

// beginShape(POINTS);
// vertex(-7,-3);//top left
// vertex(-6,6);
// vertex(0,10);//chin
// vertex(6,6);
// vertex(7,-3);//top right
// //secondary
// vertex(0,0);//eyes
// vertex(0,-5)
// //shadow ones
// vertex(-3,4);//hollower cheek ish left
// vertex(3,4);//hollow cheek right
// vertex(-2,9.5);//chin outline
// vertex(0,5);
// endShape(CLOSE);

}

