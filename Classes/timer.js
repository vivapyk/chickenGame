class Timer{
  constructor(){
    this.start=[];
    this.timerN=0; //세팅된 타이머 개수

  }

  setTimer(select){ //처음 실행시시작시간 설정
    if(this.start[select]==undefined){
      this.start[select]=millis();
      this.timerN++;
    }
  }

  finishTimer(select,time){ //time 지났으면 true, 안지났으면 false
    if(this.start[select]!=undefined && millis()>=this.start[select]+(time*1000)){
      return true;
    }
    else return false;
  }
  showTime(select){ //시작시간부터 얼마나 지났는지 확인
    if(this.start[select]==undefined) return 0;
    else return millis()-this.start[select];
  }
}
