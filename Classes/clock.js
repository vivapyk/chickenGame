class Clock{
  constructor(clock_img,hand_img,x,y,r=2){
    this.clockImg = clock_img;
    this.handImg = hand_img;
    this.x = x;
    this.y = y;
    this.w = this.clockImg.width/r;
    this.h = this.clockImg.height/r;
    this.angle = 0;
    this.handW = (this.handImg.width*130/400.7643)/r;
    this.handH = (this.handImg.height*130/400.7643)/r;
    this.zeroAngle = -atan2(this.handImg.height,this.handImg.width)-PI/2;
    this.handAngleVar = 0.3;
    this.alarmFrame = 0;
  }

  set(sec,time){
    if(sec>time/1000){
      this.handAngleVar = TWO_PI*(sec-time/1000)/6;
    }
  }

  rewind(sec){
    if(this.handAngleVar%TWO_PI<TWO_PI*sec/6){
      this.handAngleVar+=0.1;
    }
  }

  show(){
    push();translate(this.x,this.y);
    noStroke(); fill(0,150); ellipse(10,0,this.w,this.w);
    imageMode(CENTER); rotate(-0.3);
    image(this.clockImg,0,-this.h*0.10965,this.w,this.h);
    push();
    imageMode(CORNER); rotate(this.zeroAngle+this.handAngleVar);
    image(this.handImg,0,0,this.handW,this.handH);
    pop();
    pop();
  }

}
