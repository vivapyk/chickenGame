class Backscreen{
  constructor(img1, img2, img3, img4, img5){
    this.arr = [img1, img2, img3, img4, img5];
    this.current = 0;
    this.followup = 1;
    this.moveFrame = 50;
    this.x=0;
    this.y=0;
    this.cblur = false;
    this.fblur = false;
    this.i = 0;
    this.dir = -1;
    this.moveRate = 0;
    this.speed = 0;
    this.sinConstant = 0;
    this.sinVariable = 0;
    this.j = 0;
    for(this.j=0; this.j<this.moveFrame; this.j++){
      this.sinVariable += sin(this.j*PI/this.moveFrame);
    }  //sinVariable = constant가 없을 경우 이동거리


  }

  setBs(imgN){ //현재 배경화면 세팅(moveBg 후에는 자동실행, )
    this.current = imgN;
    this.x = 0;
    this.y = 0;
  }

  setNextBs(imgN){ //다음 배경화면 세팅(각 스테이지의 처음 실행)
    this.followup = imgN;
  }

  showBs(){ //background 보이기
    imageMode(CORNER);
    for(this.i=0; this.i<5; this.i++){
      image(this.arr[this.i],this.x+(width*(this.i-this.current)),this.y,width,height);
    }
  }

  moveBs(){ //화면전환, 끝나면 true 반환

    if(this.sinConstant==0){
      this.sinConstant = -(this.followup-this.current)*width/this.sinVariable;
    }
    if(this.moveRate<this.moveFrame){
      this.speed = sin(this.moveRate*PI/this.moveFrame)*this.sinConstant;
      this.x += this.speed;
      this.moveRate++;
      return false;
    }else{
      this.setBs(this.followup);
      this.moveRate = 0;
      this.speed = 0;
      this.sinConstant = 0;
      return true;
    }
  }
}
