class Ending{
  constructor(success_img,doom_img){
    this.frameN = 50;
    this.currentFrame = -1;

    this.successImg = success_img;
    this.successX = width/2;
    this.successY = height/2;
    this.successW = 1;
    this.successH = 1;
    this.sSinIntegral = 0;
    for(let i=0; i<this.frameN; i++){
      this.sSinIntegral += sin(i*PI/this.frameN);
    }

    this.doomImg = doom_img;
    this.doomX = 0;
    this.doomY = -height;
    this.doomW = width;
    this.doomH = height;
    this.doomV = 10; //velocity
    this.doomA = 2; //acceleration
    this.doomR = 5; //resistance
  }

  success(){
    imageMode(CENTER);
    image(this.successImg,this.successX,this.successY,this.successW,this.successH);
    this.currentFrame++;
    if(this.successW<width) this.successW += sin(this.currentFrame*PI/this.frameN)*(width/this.sSinIntegral);
    if(this.successH<height) this.successH += sin(this.currentFrame*PI/this.frameN)*(height/this.sSinIntegral);
    else{
      this.currentFrame=0;
      return true;
    }
  }

  doom(){
    imageMode(CORNER);
    image(this.doomImg,this.doomX,this.doomY,this.doomW,this.doomH);

    if(this.doomY>=0 &&this.doomV>0&& -this.doomV+this.doomR>0){
      this.Y=0;
      return true;
    }else{
      this.doomY+=this.doomV;
      this.doomV+=this.doomA;
      if(this.doomY>=0){
        this.doomV =-this.doomV+this.doomR;
        this.doomR+=5;
      }
    }
  }

}
