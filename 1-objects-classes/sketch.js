//create a variable to hold one ball
let b;
let anotherBall;
let ball2;

let person1;
let person2;

function setup() {
  createCanvas(800, 400);
  b = new Circle(0, 100,"red",20); //make a new ball from the Ball class and call it b.
  anotherBall = new Circle(200,20,"green", 30);
  ball2 = new Circle(300,50,"blue", 40);
  person1 = new Square(20,10,"blue");
}


function draw(){
	background(250,100,0);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    ball2.drawBall();
    ball2.moveBall();
    person1.drawPerson();

}


//ball class from which to create new balls with similar properties.
class Circle {

	constructor(x,y,color, diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter = diameter;
	}

  drawBall(){  // draw a ball on the screen at x,y
    		stroke(5);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,this.diameter);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+7;
		this.y = this.y-.5;
	}

}



  class Square {
    constructor(x,y,color) {
      this.x = x;
      this.y = y;
      this.color = color;
    }



  drawPerson(){
    stroke(5);
    fill(this.color);
    rect(this.x, this.y, 10, 10);
  }
}
