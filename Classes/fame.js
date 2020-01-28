class Fame{
  constructor(init,img,x1,y1,x2,y2){ //init: fame 초기값
    this.currentFame = init;
    this.img = img;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.flickerCycle = 15;
    this.barX1 = this.x1+(this.x2-this.x1)*7/48;
    this.barY1 = this.y1+(this.y2-this.y1)*8/30;
    this.barX2 = this.x1+(this.x2-this.x1)*227/240;
    this.barY2 = this.y1+(this.y2-this.y1)*28/75;
    this.barEnd = map(this.currentFame,0,100,this.barX1,this.barX2);
    this.c = color(255);
  }

  adjustFame(fame){
    this.currentFame = fame;
  }

  display(){
    rectMode(CORNERS);
    fill(this.c);
    noStroke(0);
    if(this.currentFame<0) this.barEnd = this.barX1;
    if(this.currentFame>100) this.barEnd = this.barX2;
    rect(this.barX1,this.barY1,this.barEnd,this.barY2);
    imageMode(CORNERS);
    image(this.img,this.x1,this.y1,this.x2,this.y2);
  }

}
