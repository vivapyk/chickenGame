class Frypan{
  constructor(imgs,x,y){
    this.imgs = imgs;
    this.x = x;
    this.y = y;
    this.r = 1;
    this.w = imgs[0].width/this.r;
    this.h = imgs[0].height/this.r;

    this.sw = imgs[1].width*(700/1417)/this.r;
    this.sh = imgs[1].height*(700/1417)/this.r

    this.imgN = 0;
  }

  reset(){
    this.imgN = 0;
  }

  sauce(num){
    this.imgN = num+1; //chilli = 1; garlic = 2; soy = 3;
  }

  show(){
    push(); translate(this.x,this.y); rotate(PI);
    imageMode(CORNER);
    if(this.imgN == 0){
      image(this.imgs[this.imgN],-this.w*500/700,-this.h*280/500,this.w,this.h);
    }else{
      image(this.imgs[this.imgN],-this.sw*1010/1417,-this.sh*368/1417-200,this.sw,this.sh)
    }
    pop();

  }
}
