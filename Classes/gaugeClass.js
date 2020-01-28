class Gauge {

  constructor(lx,ly,rx,ry,gh,hot,cold,perf,arrow,temperature) {
    this.hot = hot;
    this.cold = cold;
    this.perf = perf;
    this.arrow = arrow;
    this.lx = lx;
    this.ly = ly;
    this.rx = rx;
    this.ry = ry;
    this.gh = gh;
    this.blx = lx;
    this.bly = ly - this.gh;
    this.brx = rx;
    this.bry = ry;
    this.temp=false;
    this.temper = temperature;
    this.c=color(255);

  }


  display() {
    fill(this.c);
    rectMode(CORNERS);
    rect(this.lx,this.ly,this.rx,this.ry);

  }

  makeBox() {
    fill(0);
    rectMode(CORNERS);
    rect(this.blx-10, this.bly-10, this.brx+10, this.bry+10);
    fill(255);

    rect(this.blx-10, this.bly + this.gh*0.15 + 20, this.brx+10 ,this.bly + this.gh*0.15 + 23);
    image(this.arrow, this.blx-30, this.bly + this.gh*0.15 + 20, 40,40);
    image(this.temper, this.blx-80,this.bly + this.gh*0.15+20, 50,30);
    fill(0);
  }

  temperature() {

    if(this.ly <= this.bly + this.gh*0.15){
      this.c=color(255,0,0);
      this.temp=false;
    }else if (this.ly >= this.bly + this.gh*0.45){
      this.c=color(255,213,0);
      this.temp=false;
    }else if(this.ly >this.bly + this.gh*0.2 && this.ly < this.bly + this.gh*0.4){
      this.c=color(255,104,0);
      this.temp=true;
    }



  }

}
