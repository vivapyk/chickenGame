//customer 변수 선언 후 타이머 시작지점에 customer.timer.setTimer() 반드시 해야 함

//order(): 처음 실행시 무작위 주문(draw에서 반복되어도 첫 실행시에만 주문됨)
//process(code): time이 지나지 않았고 orderNum!=resultNum일 때 code를 입력하면 순서대로 order와 같은 array에 쌓아줌
//statusCheck(): time이 지나면 status를 2(bad)로 전환, time과 상관없이 status 반환. status 초기값은 0(normal) 상시 실행하여 1(good)이나 2(bad)가 반환되면 조리과정 종료 및 평판 반영, 새 customer 변수 선언 필요
//evaluate(): 실행하면 주문과 process(code)에서 입력한 정보 비교 후 같으면 status=1 및 true 반환, 틀리면 status=2 및 false 반환

//제안: 게임 종료 페이지에 지금까지 주문받은 치킨 / 완성한 치킨 볼 수 있게 하는 것은?

class Customer{
  constructor(time){
    this.orders=[]; //치킨 하나를 order array하나로 치고, orders에 order 저장
    this.order=[]; //[0]sauce(0~2) [1]~[6]arrow keyCode(37~40)
    this.orderNum=int(random(1,4));//int(random(1,4)); //order 개수(1~3)
    this.results=[];
    this.result=[];
    this.resultNum=0; //완성된 치킨 개수
    this.status=0; //status: 0-normal 1-good 2-bad
    this.time=30*this.orderNum; //시간: 치킨당 30초
    this.timer=new Timer(); //조리화면 넘어가면 this.timer.setTimer()
    this.i=0;
    this.j=0;
    this.k=0;
    this.l=0;
  }

  orderChicken(){
    if(this.orders.length==0){
      for(this.i; this.i<this.orderNum; this.i++){
        this.order[0]=int(random(3)); //소스
        for(this.j=1; this.j<7; this.j++){
          this.order[this.j]=int(random(37,41)); //화살표
        }
        this.orders[this.i]=this.order;
        this.order=[];
      }
    }
  }

  process(code){ //소스 선택은 draw에서, 볶는 중 화살표맞추기는 keyPressed에서 실행
    if(this.resultNum!=this.orderNum){
      if(this.k<6){
        this.result[this.k]=code;
        if(this.orders[this.resultNum][this.k]!=code){
          this.result=[];
          this.k=0;
          return false;
        }
        this.k++;
        return true;
      }else if(this.k==6){
        this.result[this.k]=code;
        if(this.orders[this.resultNum][this.k]!=code){
          this.result=[];
          this.k=0;
          return false;
        }
        this.results.push(this.result);
        this.resultNum++;
        this.result=[];
        this.k=0;
        return true;
      }
    }

  }

  statusCheck(){ //status: 0-normal 1-good 2-bad
    if(this.timer.finishTimer(0,this.time)){ //처음 세팅된 타이머
      this.timer.start[0]=undefined;
    }
    return this.status;
  }

  // evaluate(){ //마지막 진행
  //     for(this.l; this.l<this.orderNum; this.l++){
  //       if(!compareArr(this.orders[this.l], this.results[this.l])){
  //         this.status=2;
  //         return false;
  //       }
  //     }
  //     this.status=1; return true;
  //   } //다른 변수 input
  // }




}

function compareArr(arr1,arr2){
  if(this.status==2) return false;
  if(arr1.length!=arr2.length) return false;
  for(let ai=0;ai<arr1.length;ai++){
    if(arr1[ai]!=arr2[ai]) return false;
  }
  return true;
}

// 시작은 status normal로 시작
// 조리중 시간 지나면 or evaluate()==false면 status bad--> draw에 status() 확인해서 bad면 조리중단 및 화면 넘기기;
// 일단 과정 중 하나라도 틀릴 경우 evaluate false (맞춘 비율로 계산?)
// 평판 +-는 orderNum에 비례
