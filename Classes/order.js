class Order {

  constructor(img, orderX, orderY,orderSize) {
    this.img = img;
    this.orderS = orderSize;
    this.orderX = orderX;
    this.orderY = orderY;
    this.friedCount = 0;
    this.chiliCount = 0;
    this.soysauceCount = 0;
    this.heightCount = 0;
    this.friedToggle = true;
    this.chiliToggle = true;
    this.soyToggle = true;
    // this.conj1 = ['', ',' , '랑', '...', '!', '!!'][int(random(6))];
    // this.conj2 = ['', ',' , '랑', ', 그리고', '...', '!', '!!'][int(random(7))];
    // this.conj3 = ['.', '이요.', '이요!', ' 주세요.', ' 주세요!!', ' 먹을래요!', ' 주문할게요.', '...!!'][int(random(8))];
    // this.conjN = 0;
    // this.conjOrder = [];
  }

  chickenFlavor(customer) {

    for(let i=0; i<customer.orderNum; i++){
      if(customer.orders[i][0] == 0) this.friedCount++;
      else if(customer.orders[i][0] == 1) this.chiliCount++;
      else if(customer.orders[i][0] == 2) this.soysauceCount++;
    }

    // this.conjN = (this.friedCount>0)+(this.chiliCount>0)+(this.soysauceCount>0);
    // if(this.conjN == 1) this.conjOrder = [this.conj3];
    // if(this.conjN == 2) this.conjOrder = [this.conj1,this.conj3];
    // if(this.conjN == 3) this.conjOrder = [this.conj1,this.conj2,this.conj3];

  }

  //move(){

  //}

  display(resultNum) {
    textAlign(LEFT);
    imageMode(CORNER);
    textSize(15); fill(0);
    image(this.img, this.orderX,this.orderY,this.orderS,this.orderS+20);
    for(let i=0; i<customer.orderNum; i++){
      if(customer.orders[i][0] == 0 && this.friedToggle == true){
        this.heightCount += 20;
        if(resultNum==i) fill(255,0,0);
        text('CHILLI CHICKEN', this.orderX+100, this.orderY+ 130 + this.heightCount);
        fill(0);
      }
      if(customer.orders[i][0] == 1 && this.chiliToggle == true){
        this.heightCount += 20;
        if(resultNum==i) fill(255,0,0);
        text('GARLIC CHICKEN', this.orderX+100, this.orderY+130 + this.heightCount);
        fill(0);
      }
      if(customer.orders[i][0] == 2 && this.soyToggle == true) {
        this.heightCount += 20;
        if(resultNum==i) fill(255,0,0);
        text('SOY CHICKEN', this.orderX+100, this.orderY+130 + this.heightCount);
        fill(0);

      }
    }

    this.heightCount = 0;
  }

}
