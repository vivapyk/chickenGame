class Pots{
  constructor(pot_imgs,x){
    this.pots = [];
    this.l = 0;
    this.step = pot_imgs;
    this.x = 0;
  }

  potsUpdate(num){
    this.pots.push(num);
  }

  potsShow(){
    //w150,h100
    for(this.l=0; this.l<this.pots.length; this.l++){
      imageMode(CENTER);
      image(this.step[this.pots[this.l]],this.x+896-(this.pots.length-this.l)*100,125,150,100);
    }
  }


  potsMove(x,y){
    for(this.l=0; this.l<this.pots.length; this.l++){
    }
  }


}
