class Sauce{
  constructor(img1,img2, x, y, value){
    this.img1 = img1;
    this.img2 = img2;
    this.x = x;
    this.y = y;
    this.r = 5/2; //비율
    this.w = 160/this.r;
    this.h = 300/this.r;
    this.img_w = this.img1.width/this.r;
    this.img_h = this.img1.height/this.r;
    this.img_x = this.x-this.img_w*181/500;
    this.img_y = this.y-this.img_h*166/500;

    this.value = value;
  }

  on(){
    if(mouseX>this.x && mouseX<this.x+this.w && mouseY>this.y && mouseY<this.y+this.h){
      imageMode(CENTER);
      push();translate(this.x+this.w/2,this.y+this.h/2);
      image(this.img2,0,-30,this.img_w*5/4,this.img_h*5/4);
      pop();
      return true;
    }
  }

  show(){
    imageMode(CORNER);
    image(this.img1,this.img_x,this.img_y,this.img_w,this.img_h);
  }

}
