class Ball{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.xdir=+1;
    this.ydir=0;
  }
  show(){
    stroke (255)
    noFill()
    ellipse(this.x,this.y,25)
    fill(255)
  }
  changeDir(){
    this.xdir=this.xdir*(-1)
  }
  moveBall(){
    this.x=this.x+(5*this.xdir)
  }
}
