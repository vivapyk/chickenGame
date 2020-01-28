class Button {
  constructor(_x,_y,_w,_h){
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.title = "untitle";
  }

  over() {
    let x2 = this.x+this.w;
    let y2 = this.y+this.h;
    if(this.x < mouseX && mouseX <x2 && this.y < mouseY && mouseY < y2){
      return true;
    } else {
      return false;
    }
  }

  show() {
  if(this.over()) fill(255,0,0);
  else fill(255,200,200);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER, CENTER);
    fill(20);
    textSize(20);
    text(this.title, this.x + this.w/2, this.y + this.h/2);
  }

  setTitle(_title) {
  this.title = _title;
  }
}
