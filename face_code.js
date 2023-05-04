
function myFace(cheek,nose,eyes,temples,mouth,sideRight, evilness) {

  let midX=0;
  let midY=0;

  angleMode(DEGREES);

//colours
  let baseC = 115;
  let high = 130;
  let midd = 80;
  let dark = 60;
  let redEyes = color(171, 14, 3);
 
  //----------------------FACE---------------------------------------------------------------------
  strokeWeight(0.1);
  fill(baseC);
  noStroke();
ellipse(midX,midY-3,13,12);

stroke(baseC);
beginShape();
  vertex(6,-3); 
  curveVertex(-5,-3);
  curveVertex(-6.7,-1.5);
  curveVertex(-5.5,6);
  curveVertex(0,10);
  curveVertex(5.5,6);
  curveVertex(6.7,-1.5);
endShape(CLOSE);


//-----------------------------------------------------------HIGHLIGHT-----------------------------

fill(high);
noStroke();
beginShape();//nose forehead thing
vertex(-0.3,1);
curveVertex(-0.3,1);
curveVertex(-0.5,3.5);//bottom left
curveVertex(0.5,3.5);//bottom right
curveVertex(0.3,1);
curveVertex(-sideRight/2+1,-1.6);//left top
curveVertex(-sideRight/2,-3);//top mid 
curveVertex(-sideRight/2-1,-1.6);//top right
endShape(CLOSE);

beginShape();//cheek left
curveVertex(-1,1);
curveVertex(-1.8,4);
curveVertex((-sideRight/2)-4,0);
curveVertex(-2,0);
endShape(CLOSE);

beginShape();//cheek right
curveVertex(1,1);
curveVertex(1.8,4);
curveVertex((-sideRight/2)+4,0);
curveVertex(2,0);
endShape(CLOSE);


// --------------------SHADOWS-----------------------------MID-------------------------------

fill(midd);
stroke(midd);
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
fill(dark);
stroke(dark);
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
if(evilness){
  fill(redEyes);
}
else(
  fill(dark)
)
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

fill(dark);
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

beginShape();//mouf__________________
  curveVertex(-1,6.6);
  curveVertex(1,6.6);
  vertex(1.9,7.2);
  curveVertex(0,7);
  curveVertex(-1.9 ,7.2);
endShape(CLOSE);



}

