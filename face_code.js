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
function myFace(cheek,nose,eyes,temples,mouth) {

  let midX=0;
  let midY=0;


strokeWeight(0.1);
// stroke(255);
noStroke();
ellipse(midX,midY-3,13.9,12);

// fill(100,255,255);
//----------------------FACE---------------------------------------------------------------------
// stroke(255,200,255);
beginShape();
// vertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-7,-3);
curveVertex(-5.9,6);
curveVertex(0,10);
curveVertex(5.9,6);
curveVertex(7,-3);
vertex(7,-3); 
vertex(7,-3);
endShape(CLOSE);

//--------------------SHADOWS---------------------------------------------------------------------
// stroke(255,100,255);
fill(155);
beginShape();//left cheek_______
vertex(-7,0);
curveVertex(-7,0);
curveVertex(-6,6);
vertex(-2.2,9.3);

curveVertex(-cheek,4);
endShape(CLOSE);

beginShape();//right cheek_______
vertex(7,0);
curveVertex(7,0);
curveVertex(6,6);
vertex(2.2,9.3);
curveVertex(cheek,4);
endShape(CLOSE);

fill(155);

beginShape();//nose___________  
vertex(0,4);//mid
curveVertex(0,4);
curveVertex(1.5,4);
curveVertex(1.5,5);
curveVertex(0.5,nose)
curveVertex(-0.5,nose);//mid
curveVertex(-1.5,5);
curveVertex(-1.5,4);
curveVertex(0,4)
endShape(CLOSE);


beginShape();//eye left_______________
vertex(-3.5,-1);
curveVertex(-4,-1);
curveVertex(-5,-0);
curveVertex(-4.5,1.5);//mid
curveVertex(-1.75,eyes);
curveVertex(-1,1.5); 
curveVertex(-1.5,-0.5);
endShape(CLOSE);


beginShape();//eye right_______________
vertex(3.5,-1);
curveVertex(4,-1);
curveVertex(5,0);
curveVertex(4.5,1.5)//mid
curveVertex(1.75,eyes);
curveVertex(1,1.5);
curveVertex(1.5,-0.5);
endShape(CLOSE);


beginShape();//temple left_________________
vertex(-7,-1);
curveVertex(-7,-1);
curveVertex(-temples,-4);
curveVertex(-6.7,-4.5);
endShape(CLOSE);


beginShape();//temple right___________________
vertex(7,-1);
curveVertex(7,-1);
curveVertex(temples,-4);
curveVertex(6.7,-4.5);
endShape(CLOSE);


beginShape();//mouf__________________
curveVertex(-1,6.5);
curveVertex(1,6.5);
vertex(1.9,7.2);
curveVertex(0,mouth);
curveVertex(-1.9 ,7.2);
endShape(CLOSE);


stroke(255,100,100);



//guideline points MAIN-----------------------------------------------------------------------
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

