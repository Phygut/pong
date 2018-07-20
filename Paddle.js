class Paddle{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  move(dir){
    console.log("Paddle moved");
    switch (dir) {
    	 case 'up':
          this.y=this.y-5;
          break;
    	 case 'down':
          this.y=this.y+5;
          break;
    	 default: console.log("defaulted");
     }
     this.show();
  }
  show(){
    stroke(255);
    rect(this.x,this.y,25,120);
  }

}
