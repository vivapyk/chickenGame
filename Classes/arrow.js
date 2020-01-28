class Arrow{
  constructor(corr_arr, wrong_arr){
    //[default,left,up,right,down]
    this.arrowArr = [corr_arr, wrong_arr];

    this.rightWrong = 0; //right = 0, wrong = 1;
    this.arrowType = 0;
  }

  press(keyCode){
    if(keyCode>=37&&keyCode<=40){
      this.arrowType = keyCode-36;
    }
  }

  correct(value){ //true/false
    if(value){
      this.rightWrong = 0;
    }else if(!value){
      this.rightWrong = 1;
    }
  }

  reset(){
    this.rightWrong = 0;
    this.arrowType = 0;
  }

  show(){
    image(this.arrowArr[this.rightWrong][this.arrowType],200,height-200,this.arrowArr[this.rightWrong][this.arrowType].width/2,this.arrowArr[this.rightWrong][this.arrowType].height/2);
  }

}
