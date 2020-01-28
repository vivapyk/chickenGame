class Chicken{
  constructor(batter_imgs,fry_imgs,sauce_imgs,pot_imgs){
    this.steps = [batter_imgs,fry_imgs,sauce_imgs,pot_imgs];
    this.step = 0;
    this.imgN = 0;
    this.x = 413;
    this.y = 488;
    this.Xvar = random(-5,5);
    this.Yvar = random(-5,5);
    this.pClickCount = 0;
    print(pot_imgs);
    print(this.steps[3]);
    print(this.steps[3][0]);

    this.w = 400;
    this.Wvar = 0;
    this.h = 350;
    this.Hvar = 0;
    this.angle = 0;
    this.moveFrame = 50;
    this.frameRate = 0;
    this.Xspeed = 0;
    this.Yspeed = 0;
    this.XsinConstant = 0;
    this.YsinConstant = 0;
    this.sinVariable = 0;
    this.i = 0;
    for(this.i=0; this.i<this.moveFrame; this.i++){
      this.sinVariable += sin(this.i*PI/this.moveFrame);
    }  //sinVariable = constant가 없을 경우 이동거리
    this.j = 0;
    this.k = 0;
    this.l = 0;

    this.fXspeed = 0;
    this.fYspeed = 0;

    this.pots = []
    this.potsi = 0;
  }

  batter(x,y,clickCount){
    this.step = 0;
    this.x = x + this.Xvar;
    this.y = y + this.Yvar;
    if(clickCount == this.pClickCount){
      this.Xvar = random(-10,10);
      this.Yvar = random(-10,10);
      this.pClickCount++;
    }
    if(clickCount == batterN){
      this.pClickCount = 0;
    }
    //this.angle = clickCount*TWO_PI*2/batterN;
    this.imgN = int(4*clickCount/batterN);
  }

  fry(time){ //튀김타이머 3 이용
    if(time/1000 < 0.3){
      this.w -= 2;
      this.h -= 2;
      this.step = 0;
      this.imgN = 4;
    }else if(time/1000 < fryTime/5){
      this.step = 1;
      this.imgN = 0;
    }else if(time/1000 < fryTime*2/5){
      this.imgN = 1;
    }else if(time/1000 < fryTime*3/5){
      this.imgN = 2;
    }else if(time/1000 < fryTime*4/5){
      this.imgN = 3;
    }else if(time/1000 < fryTime){
      this.imgN = 4;
    }
    if(time/1000 >= fryTime-0.3 && time/1000 < fryTime){
      this.w += 2;
      this.h += 2;
    }
  }

  sauce(key){
    this.step = 2;
    if(key==0||key==1||key==2) this.imgN = key;
  }

  cook(keypress){
    if(keypress%7 == 0) this.angle = 0;
    else this.angle = (keypress%7-1)*TWO_PI/6;
  }

  pot(){
    if(this.j<30){
      this.step = 2;
      this.angle+=6*PI/60;
      this.j++
    }else if(this.w>200){
      this.step = 3;
      this.w = 200;
      this.h = 150;
      this.angle = 0;
    }else{
      return true;
    }
  }

  // chicken.w = 400;
  // chicken.h = 350;
  // chicken.j = 0;
  // chicken.k = 0;나중에 써줘야 함

  finishedMove(x,y){
    if(this.fXspeed==0){
      this.fXspeed = (x-this.x)/50;
      this.fYspeed = (y-this.y)/50;
    }
    if(this.k<50){
      print('finishedmove');
      this.x += this.fXspeed;
      this.y += this.fYspeed;
      this.w -= 1;
      this.h -= 1; //chickenpot = w150,h100
      this.k++;
    }else{
      this.fXspeed = 0;
      this.fYspeed = 0;
      return true;
    }
  }


  move(x,y){
    if(this.XsinConstant==0){
      this.XsinConstant = (x-this.x)/this.sinVariable;
      this.YsinConstant = (y-this.y)/this.sinVariable;
    }
    if(this.frameRate<this.moveFrame){
      this.Xspeed = sin(this.frameRate*PI/this.moveFrame)*this.XsinConstant;
      this.x += this.Xspeed;
      this.Yspeed = sin(this.frameRate*PI/this.moveFrame)*this.YsinConstant;
      this.y += this.Yspeed;
      this.frameRate++; //위치이동

      this.Wvar = sin(this.frameRate*PI/this.moveFrame)*100;
      this.Hvar = sin(this.frameRate*PI/this.moveFrame)*86;
    }else{
      this.XsinConstant = 0;
      this.YsinConstant = 0;
      this.frameRate = 0;
      this.Wvar = 0;
      this.Hvar = 0;
      return true;
    }
  }

  show(){
    push(); translate(this.x,this.y); rotate(this.angle);
    imageMode(CENTER);
    if(this.imgN>5) this.imgN = 0;
    image(this.steps[this.step][this.imgN],0,0,this.w+this.Wvar,this.h+this.Hvar);
    pop();
  }
}
