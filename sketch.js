let ball;
let paddle1;
let paddle2;
function setup() {
	createCanvas(600, 400)
	paddle1=new Paddle(5,(height-120)/2)
	paddle2=new Paddle(width-30,(height-120)/2)
	ball1  =new Ball(width/2,height/2)

}

function draw() {
	background(0)
	insertObjects()
	moveOnKey()
	moveBall()
}

function moveBall(){
	if (ball1.x>(width-29)||ball1.x<29) {
		ball1.changeDir()
	}
	ball1.moveBall()
}

function insertObjects(){
	paddle1.show()
	paddle2.show()
	ball1.show()

}

function moveOnKey(){
	if (keyIsDown(UP_ARROW)) {
		//console.log('up arrow');
		paddle2.move('up');
	} else if (keyIsDown(DOWN_ARROW)){
		//console.log('down arrow');
		paddle2.move('down');
	} else if (keyIsDown(87)){
		//console.log('w key');
		paddle1.move('up');
	} else if (keyIsDown(83)){
		//console.log('s key');
		paddle1.move('down');
	} else {
		//console.log("moveOnKey defaulted");
	}


}
