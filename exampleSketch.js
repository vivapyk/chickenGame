let customer;
let time;
let stage=-3; //조리중 timer 다 됐을때 stage 리셋 필요
let keypress=0;
let income=0;
let score=20;
let wrPenalty=10;
let timePenalty=10;
let timeLimit = 150;

let fryTime=5;
let btwStageTime=1;
let batterN=15;
let readyGoTimer;

let d;
let clickCount = 0;
let gauge;

// 배경 이미지 변수
let titleScreen;
let startScreen;
let batterScreen;
let fryScreen;
let sauceScreen;
let backScreen;
let successScreen;
let doomScreen; //배경 이미지 저장할 변수
let resultScreen;
const title = 0;
const start = 1;
const batter = 2;
const fry = 3;
const sauce = 4;

// 주문서 변수
let order;
let orderPaper;
let orderX = 100;
let orderY = 100;
let orderSize = 300;

// 반죽 이미지
let batterPlate
let plateX= 595;
let plateY= 400;
let plateSize = 700;

// (반죽 스테이지) 마우스
let batterMouseIn;
let batterMouseOut;
let batterMouseClick;
let mouse;

// 튀김 스테이지 스페이스바 변수
let spaceUp;
let spaceDown;
let spaceToggle = true;
let spaceX = 300;
let spaceY = 530;
let spaceSize = 120;

//버튼, 버튼 이미지 변수
let startButton;
let nextButton;
let restartButton;
let startButtonImg1;
let startButtonImg2;
let nextButtonImg1;
let nextButtonImg2;
let restartButtonImg1;
let restartButtonImg2;
let buttonw = 70;
let buttonh = 50;
let buttonx = 800;
let buttony =  500;


//평판 게이지 이미지 변수
let fameGauge;
let gaugeImg;

//화살표 이미지 변수
let arrow;
let darrow
let cleftArrow;
let crightArrow;
let cupArrow;
let cdownArrow;
let fleftArrow;
let frightArrow;
let fupArrow;
let fdownArrow;
let arrowX = 100;
let arrowY = 500;
let arrowSize = 100;
let arrowCorr = true;

//소스 이미지 변수
let chiliSauce;
let garlicSauce;
let soySauce;
let chiliSauce2;
let garlicSauce2;
let soySauce2;
let chilli;
let garlic;
let soy;

//치킨 이미지 변수
let batter1;
let batter2;
let batter3;
let batter4;
let batter5;
let fry1;
let fry2;
let fry3;
let fry4;
let fry5;
let sauceChilli;
let sauceGarlic;
let sauceSoy;
let potChilli;
let potGarlic;
let potSoy;
let chicken;
let pots;

let fryNet;
let fryNetX = 900;
let fryNetY = 610;
let fryNetSizeX = 650
let fryNetSizeY = 600

//볶기 후라이팬 이미지 변수

let frypanNormal;
let frypanChilli;
let frypanGarlic;
let frypanSoy;
let fryPan;

let clock;
let clock_img;
let hand;
let hand_img;

let readyImg;
let startImg;

let tutorial;

let transparent;
let transparnet2;

let click;
let press;
let clickClick;
let temperature;

let fryGrill;

let cold;
let hot;
let perfect;

let arrowR;
let arrowL;
let arrowU;
let arrowD;
let arrowrR;
let arrowrL;
let arrowrU;
let arrowrD;

let chooseChili;
let chooseGarlic;
let chooseSoy;

let customerHappy;

let great;
let oops;

let digital;
let minecraft;
let retro;

let gameTimer;
let gameTime = 0;
let gameTimer_img;

let incomeBoard;

let halfCustomer;
let bubble;

let song0, song1, song2, song3, song4;

function preload(){
  titleScreen = loadImage('Assets/TitleScreen1.jpg');
  startScreen = loadImage('Assets/StartScreen1.jpg');
  batterScreen = loadImage('Assets/BatterScreen.jpg');
  fryScreen = loadImage('Assets/DeepFryingScreen.jpg');
  sauceScreen = loadImage('Assets/SauceScreen.jpg');
  successScreen = loadImage('Assets/Ending1_ex.png');
  doomScreen  = loadImage('Assets/Ending2_ex.png');
  startButtonImg1 = loadImage('Assets/startB1.png');
  startButtonImg2 = loadImage('Assets/startB2.png');
  howtoButtonImg1 = loadImage('Assets/howtoB1.png');
  howtoButtonImg2 = loadImage('Assets/howtoB2.png');
  nextButtonImg1 = loadImage('Assets/nextB1.png');
  nextButtonImg2 = loadImage('Assets/nextB2.png');
  restartButtonImg1 = loadImage('Assets/restartB1.png');
  restartButtonImg2 = loadImage('Assets/restartB2.png');
  batterPlate = loadImage('Assets/batterPlate.png');
  gaugeImg = loadImage('Assets/Fame Gauge.png');

  batter1 = loadImage('Assets/Batter1.png');
  batter2 = loadImage('Assets/Batter2.png');
  batter3 = loadImage('Assets/Batter3.png');
  batter4 = loadImage('Assets/Batter4.png');
  batter5 = loadImage('Assets/Batter5.png');
  fry1 = loadImage('Assets/DeepFrying1.png');
  fry2 = loadImage('Assets/DeepFrying2.png');
  fry3 = loadImage('Assets/DeepFrying3.png');
  fry4 = loadImage('Assets/DeepFrying4.png');
  fry5 = loadImage('Assets/DeepFrying5.png');
  sauceChilli = loadImage('Assets/FryChilli.png');
  sauceGarlic = loadImage('Assets/FryGarlic.png');
  sauceSoy = loadImage('Assets/FrySoy.png');
  potChilli = loadImage('Assets/potChilli.png');
  potGarlic = loadImage('Assets/potGarlic.png');
  potSoy = loadImage('Assets/potSoy.png');

  clock_img = loadImage('Assets/clock.png');
  hand_img = loadImage('Assets/clockHand.jpg');

  orderPaper = loadImage('Assets/OrderPaper.png');

  darrow = loadImage('Assets/arrowP0.png');
  cleftArrow = loadImage('Assets/arrowP2_T.png');
  crightArrow = loadImage('Assets/arrowP4_T.png');
  cupArrow = loadImage('Assets/arrowP1_T.png');
  cdownArrow = loadImage('Assets/arrowP3_T.png');
  fleftArrow = loadImage('Assets/arrowP2_F.png');
  frightArrow = loadImage('Assets/arrowP4_F.png');
  fupArrow = loadImage('Assets/arrowP1_F.png');
  fdownArrow = loadImage('Assets/arrowP3_F.png');

  arrowU = loadImage('Assets/arrow1.png');
  arrowL = loadImage('Assets/arrow2.png');
  arrowD = loadImage('Assets/arrow3.png');
  arrowR = loadImage('Assets/arrow4.png');

  arrowrR = loadImage('Assets/arrowr4.png');
  arrowrL = loadImage('Assets/arrowr2.png');
  arrowrU = loadImage('Assets/arrowr1.png');
  arrowrD = loadImage('Assets/arrowr3.png');

  tutorial = loadImage('Assets/tutorialRecipe.png');
  transparent = loadImage('Assets/transparent.png');
  transparent2 = loadImage('Assets/transparent2.png');

  batterMouseIn = loadImage('Assets/mouse2.png');
  batterMouseOut = loadImage('Assets/mouse1.png');
  batterMouseClick = loadImage('Assets/clickHere.png');

  spaceUp = loadImage('Assets/spaceUp.png');
  spaceDown = loadImage('Assets/spaceDown.png');

  chiliSauce = loadImage('Assets/Sauce Chilli.png');
  garlicSauce = loadImage('Assets/Sauce Garlic.png');
  soySauce = loadImage('Assets/Sauce Soy.png');

  chiliSauce2 = loadImage('Assets/Sauce Chilli2.png');
  garlicSauce2 = loadImage('Assets/Sauce Garlic2.png');
  soySauce2 = loadImage('Assets/Sauce Soy2.png');

  fryNet = loadImage('Assets/fryNet.png');

  readyImg = loadImage('Assets/ready.png');
  startImg = loadImage('Assets/start.png');

  click = loadImage('Assets/click.png');
  fryGrill = loadImage('Assets/fryGrill.png');

  cold = loadImage('Assets/cold.png');
  hot = loadImage('Assets/hot.png');
  perfect = loadImage('Assets/perfect.png');
  press = loadImage('Assets/press.png');

  chooseChili = loadImage('Assets/chooseChili.png');
  chooseGarlic = loadImage('Assets/chooseGarlic.png');
  chooseSoy = loadImage('Assets/chooseSoy.png');

  clickClick = loadImage('Assets/연타0.png')
  temperature = loadImage('Assets/적정온도.png')

  customerHappy = loadImage('Assets/customerHappy.png');

  frypanNormal = loadImage('Assets/fryPan.png');
  frypanChilli = loadImage('Assets/fryPanChilli.png');
  frypanGarlic = loadImage('Assets/fryPanGarlic.png');
  frypanSoy = loadImage('Assets/fryPanSoy.png');

  great = loadImage('Assets/great.jpg');
  oops = loadImage('Assets/oops.jpg');

  digital = loadFont('Fonts/digital-7.ttf');
  minecraft = loadFont('Fonts/Minecraft.ttf');
  retro = loadFont('Fonts/retro_computer_personal_use.ttf');

  gameTimer_img = loadImage('Assets/gameTimer.jpg');
  incomeBoard = loadImage('Assets/incomeboard.jpg');

  halfCustomer = loadImage('Assets/halfCustomer.png');
  bubble = loadImage('Assets/speechBubble.png');
  // song0 = loadSound('bgm/Good Mood.mp3');
  song1 = loadSound('bgm/Online Shopping.mp3');
  song2 = loadSound('bgm/Action In The City_bgm.mp3');
  cashSound = loadSound('bgm/Cash_Register.mp3');
  song3 = loadSound('bgm/Baby Swing.mp3');
  song4 = loadSound('bgm/Black Comedy.mp3');
  arrowBackground = loadImage('Assets/arrowBackground.png');

}



function setup(){
  createCanvas(1200,730);
  time = millis();
  customer = new Customer(time);
  readyGoTimer=new Timer();
  gauge = new Gauge(240,480,275,480,180,cold,hot,perfect,arrowR, temperature);
  startButton = new Button(width-350,height-170, buttonw+130,buttonh+70);
  nextButton = new Button (width-350,height-170, buttonw+130,buttonh+70);
  restartButton = new Button(width/2-80,height*2/3-30, buttonw+100,buttonh+70);
  backScreen = new Backscreen(titleScreen,startScreen,batterScreen,fryScreen,sauceScreen);
  batter_imgs = [batter1,batter2,batter3,batter4,batter5];
  fry_imgs = [fry1,fry2,fry3,fry4,fry5];
  sauce_imgs = [sauceChilli,sauceGarlic,sauceSoy]
  chicken = new Chicken(batter_imgs,fry_imgs,sauce_imgs,[potChilli,potGarlic,potSoy]);
  fameGauge = new Fame(income,gaugeImg,600,-50,1080,250);
  fryClock = new Clock(clock_img,hand_img,417,161);
  mouse = batterMouseOut;
  ending = new Ending(successScreen,doomScreen);
  arrow = new Arrow([darrow,cleftArrow,cupArrow,crightArrow,cdownArrow],[darrow,fleftArrow,fupArrow,frightArrow,fdownArrow]);
  chilli = new Sauce(chiliSauce,chiliSauce2,422,527,0);
  garlic = new Sauce(garlicSauce,garlicSauce2,628,527,1);
  soy = new Sauce(soySauce,soySauce2,836,527,2);
  pots = new Pots([potChilli,potGarlic,potSoy]);
  fryPan = new Frypan([frypanNormal,frypanChilli,frypanGarlic,frypanSoy],905,535);
  gameTimer = new Timer();
}
let customerX = 0;
let bubbleX = 0;
let musicToggle = true;
let musicToggle2 = true;


function draw(){

  //시간은 150초!!!!
  noCursor();
  backScreen.showBs(); //title: 0; start: 1; batter: 2; fry: 3; sauce: 4
  if(gameTimer.start[0]!=undefined){ //게임 시작 후
    gameTime = gameTimer.showTime(0);
    if(gameTime/1000>timeLimit) gameTime = 150000;
  }

  textSize(25);

  switch(stage){
    // 시작페이지
    case -3:
      imageMode(CORNER);
      image(startButtonImg1, width-350,height-170, buttonw+130,buttonh+70);
      if(startButton.over()){
        imageMode(CORNER);
        image(startButtonImg2,width-350,height-170, buttonw+130,buttonh+70);
      }
      break;

    case -3.5: //리스타트 화면이동
      if(!backScreen.moveBs()){
        imageMode(CORNER);
        image(resultScreen,backScreen.x,0,width,height);
        image(restartButtonImg1,backScreen.x+width/2-30,height*2/3-30, buttonw+100,buttonh+70);
      }else{
        musicToggle = true;
        musicToggle2 = true;
        stage = -2;
        income = 0;
        gameTimer = new Timer();
        gameTime = 0;
        readyGoTimer = new Timer();
        ending = new Ending(successScreen,doomScreen);
        fryPan.reset();
        customerX = 0;
        bubbleX = 0;
      }
      break;

    //튜토리얼
    case -2:
      backScreen.setBs(start);
      imageMode(CENTER);
      image(transparent, width/2,height/2, width,height);
      image(tutorial, width/2, height/2, tutorial.width*4/7, tutorial.height*4/7);
      imageMode(CORNER);
      image(nextButtonImg1, width-300,height-170, buttonw+130,buttonh+70)
      if(nextButton.over()){
        imageMode(CORNER);
        image(nextButtonImg2, width-300,height-170, buttonw+130,buttonh+70);
      }
      break;

    //1. 준비 및 (첫)주문
    case -1:
      backScreen.setBs(batter);
      readyGoTimer.setTimer(0);
      if(!readyGoTimer.finishTimer(0,1)){ //1초간 ready
        imageMode(CENTER);
        image(readyImg ,width/2, height/2);
      }else{
        readyGoTimer.setTimer(1);
        if(!readyGoTimer.finishTimer(1,0.6)){ //0.6초간 go
          imageMode(CENTER);
          image(startImg,width/2, height/2);
          imageMode(CORNER);
        }else{
          gameTimer.setTimer(0); //전체 타이머
          customer.orderChicken();
          order = new Order(orderPaper,orderX,orderY,orderSize); //여기도 한번만
          order.chickenFlavor(customer);

          stage++;
        }
      }
      break;

    //2. 조리
    //2.1. 반죽
    case -0.2: //(새 주문시)화면전환용
      if(backScreen.moveBs()){
        stage=0;
        plateX = 595;
        plateY = 400;
        customer.orderChicken();
        order.friedCount = 0;
        order.chiliCount = 0;
        order.soysauceCount = 0;
        order.chickenFlavor(customer);
        fryPan.reset();
        customerX = 0;
        bubbleX = 0;
        //customer.timer.setTimer(5); //주문서 받는 타이머
      }
      break;

    case -0.1: //(동일주문시)화면전환용: 1.6에서 받기
      //01_26 수정: 동일주문시 처음부터가 아닌 sauce부분 반복하도록 설정
      //따라서 사용하지 않는 부분
      //01_27 수정: 여기로 다시 돌아가기로 함
      //이걸 안지운 내가 레전두
      if(backScreen.moveBs()){
        stage=0;
        plateX = 595;
        plateY = 400;
        keypress -= keypress%7; //여러 치킨 주문의 경우, 성공한 이전 치킨의 keypress는 남기기
        chicken.step = 1;
        chicken.imgN = 4;
        chicken.angle = 0;
        chicken.w = 400;
        chicken.h = 350;
        chicken.j = 0;
        chicken.k = 0;
        arrowCorr = true;
        arrow.reset();
        fryPan.reset();
        customerX = 0;
        bubbleX = 0;
        pots.x = 0;
      }else{
        imageMode(CENTER);
        image(halfCustomer,backScreen.x-width*2+649,95,200,200);
        plateX+=backScreen.speed;
        chicken.x+=backScreen.speed;
        for(pots.l=0; pots.l<pots.pots.length-1; pots.l++){
          imageMode(CENTER);
          image(pots.step[pots.pots[pots.l]],pots.x+896-(pots.pots.length-pots.l)*100,125,150,100);
        }
        pots.x=backScreen.x;
        pots.potsShow();
        imageMode(CENTER);
        image(batterPlate,plateX-(backScreen.current-backScreen.followup)*width,plateY,plateSize,plateSize);
      }
      break;

    case 0:
      //반죽 실행
      backScreen.setNextBs(fry);
      textAlign(LEFT);
      order.display(customer.resultNum);
      customer.timer.setTimer(8);
      if(!customer.timer.finishTimer(8,1)){
        imageMode(CENTER);
        image(halfCustomer,649,95,200,200);
      }else{
        imageMode(CENTER);
        image(halfCustomer,649,95,200,200);
        imageMode(CENTER);
        image(transparent, width/2,height/2,width,height);
        imageMode(CENTER);
        image(click,550, 600,300,300); textAlign(CENTER); textFont(retro);
        textSize(80); text(15-clickCount,756,625);
        image(batterPlate, plateX,plateY,plateSize,plateSize);
        chicken.batter(plateX,plateY,clickCount);
        chicken.show();

        d = (mouseX>plateX-plateSize/2+40 && mouseX<plateX+plateSize/2-40 && mouseY>plateY-plateSize/5 && mouseY<plateY+plateSize/5);
        if(d){
          mouse = batterMouseClick;
          imageMode(CENTER);
        }

        if(clickCount == batterN){
          stage=0.1;
          clickCount = 0;
        }
        //확인용 텍스트
        fill(255,0,0); textSize(30); textAlign(CENTER);textFont(digital);
        text('STAGE 1: batter time',width/2, 100);
       }
      //evaluate로 스테이지가 4로 넘어간 후 stage++가 되면 안되니까, 반드시 evaluate()을 stage++ 다음에 쓸 것!!
      evaluate(customer); //타이머 지났는지 확인하고, 점수반영 및 4스테이지로 이동하는 함수
      break;

    case 0.1: //화면전환용
      plateX+=backScreen.speed;
      imageMode(CENTER);
      image(batterPlate,plateX,plateY,plateSize,plateSize);

      fryClock.x+=backScreen.speed+width;
      imageMode(CENTER);
      image(halfCustomer,backScreen.x+649,95,200,200);
      //fryClock.rewind(fryTime);
      fryClock.show();
      fryClock.x-=width;

      fill(100,100,255,150);
      textAlign(CENTER);
      textSize(100);
      textFont(retro);
      chicken.show();
      text('GREAT!',width/2, height/2+20);

      if(backScreen.moveBs()){
        stage=1;
        plateX = 595;
        plateY = 400;
        fryClock.x = 417;
        gauge.ly = 480;
      }
      chicken.move(563, 351);
      imageMode(CENTER);
      image(transparent,width+width/2+backScreen.speed,height/2,width,height);
      break;

    case 0.5: //실패시 반복용
      stage = 1;
      fryClock.show();
      gauge.ly = 480;
      break;

    //2.2. 튀기기
    case 1:
      backScreen.setNextBs(sauce);

      customer.timer.setTimer(3); // 타이머 3 설정 (튀김타이머 설정)
      order.display(customer.resultNum);
      imageMode(CENTER);
      image(transparent, width/2,height/2, width,height);
      push();translate(-35,50);
      imageMode(CENTER);
      image(fryGrill, width/2, height/2 - 50, width*0.85,height*0.85);
      if(customer.timer.showTime(3)/1000 < 0.3){
        fryNetSizeX-=2; fryNetSizeY-=2
      }else if(customer.timer.showTime(3)/1000>=fryTime-0.3 && customer.timer.showTime(3)/1000<fryTime){
        fryNetSizeX+=2; fryNetSizeY+=2;
      }
      image(fryNet, width/2 + 20, height/2 - 50, fryNetSizeX,fryNetSizeY);
      fryClock.show();
      pop();
      imageMode(CORNER);
      //스페이스바 (수정필요)
      if(spaceToggle == true){
        imageMode(CENTER);
        image(spaceUp, width/2+20, height/2 + 250, spaceUp.width*0.7, spaceUp.height*0.7);
      }else {
        imageMode(CENTER);
        image(spaceDown, width/2+20, height/2 + 250, spaceDown.width*0.7, spaceDown.height*0.7);
      }
      image(clickClick, width/2+350, height/2 + 220, clickClick.width * 0.8, clickClick.height*0.8);

      //튀김 실행
      chicken.fry(customer.timer.showTime(3));

      push();translate(-35,50);
      gauge.makeBox();
      gauge.display();
      pop();
      chicken.show();
      if(!customer.timer.finishTimer(3,fryTime)){
        fryClock.set(fryTime,customer.timer.showTime(3));
        gauge.temperature();
        if(gauge.ly < gauge.bly + gauge.gh) gauge.ly++;
      }else{
        if(gauge.temp){ //튀김 상태: PERFECT
          customer.timer.setTimer(4); // 타이머 4 설정(튀김성공시 메세지 틔우는 시간);
          if(!customer.timer.finishTimer(4,btwStageTime)){

            fill(100,100,255,150);
            textAlign(CENTER);
            textSize(100);
            textFont(retro);
            chicken.show();
            text('GREAT!',width/2, height/2+20);
          }else{
            gauge.ly=gauge.ry;
            customer.timer.start[3]=undefined; //타이머 3 리셋
            customer.timer.start[4]=undefined; //타이머 4 리셋
            if(stage == 1) stage=1.1;
          }
        }else{//튀김 상태: 너무 높음 / 낮음
          customer.timer.setTimer(4); // 타이머 4 설정(튀김실패시 메세지 틔우는 시간);
          fill(255,0,0,150);
          textAlign(CENTER);
          textSize(100);
          textFont(retro);
          chicken.show();
          text('OOOPS!',width/2, height/2+20);
          if(customer.timer.finishTimer(4,btwStageTime)){
            if(stage==1) stage=0.5;
            gauge.ly=gauge.ry;
            customer.timer.start[3]=undefined; //타이머 3 리셋
            customer.timer.start[4]=undefined; //타이머 4 리셋
          }
        }
      }
      //확인용 텍스트
      fill(255,0,0); textAlign(CENTER); textSize(30);textFont(digital);
      text('STAGE 2: fry time',width/2, 100);

      evaluate(customer);
      break;

    case 1.1: //화면전환용
      chicken.move(899,534);
      gauge.display();
      fryClock.x+=backScreen.speed;
      fryClock.show();
      pots.x=backScreen.x+width;
      pots.potsShow();
      if(backScreen.moveBs()){
        stage=2;
        fryClock.x = 417;
        pots.x=0;
      }
      break;

    case 1.5: //실패, 성공시 반복용
      keypress -= keypress%7; //여러 치킨 주문의 경우, 성공한 이전 치킨의 keypress는 남기기
      stage = 2;
      chicken.step = 1;
      chicken.imgN = 4;
      chicken.angle = 0;
      arrowCorr = true;
      arrow.reset();
      break;

    case 1.6: //성공시 반복용, -0.1로 이동하여 리셋
      customer.timer.setTimer(6);
        if(!customer.timer.finishTimer(6,2)){
          fill(100,100,255,150);
          textAlign(CENTER);
          textSize(100);
          textFont(retro);
          chicken.show();
          text('GREAT!',width/2, height/2+20);

          fryPan.show()
          pots.potsShow();
          if(chicken.pot()){
            if(customer.timer.finishTimer(6,0.8)){
              chicken.finishedMove(896,125);
            }
          }
          chicken.show();
          arrow.correct(arrowCorr);
          arrow.show();
          if(arrow.arrowType!=0){
            arrow.show();
          }
        }else{
          pots.potsUpdate(customer.results[customer.resultNum-1][0]);
          stage = -0.1;
          customer.timer.start[6]=undefined;
        }
      break;

    case 1.7: //실패시 반복용, 1.5로 이동하여 리셋
      customer.timer.setTimer(7);
        if(!customer.timer.finishTimer(7,1.5)){
          fill(255,0,0,150);
          textAlign(CENTER);
          textSize(100);
          textFont(retro);
          chicken.show();
          text('OOOPS!',width/2, height/2+20);

          arrow.correct(arrowCorr);
          if(arrow.arrowType!=0&&stage==1.7){
            arrow.show();
            if(arrow.arrowType == 0) fill(0)
            else if(arrowCorr) fill(255,200,0);
            else fill(255,0,0);
            imageMode(CENTER);
            image(arrowBackground, 650,260, arrowBackground.width*0.3, arrowBackground.height*0.3 );
            let arrows = [arrowrL, arrowrU, arrowrR, arrowrD];
            for(let u = 1; u<7; u++){
              print(customer.orders.length);
              let arrowI = customer.orders[int(keypress/7)][u]-37;
              textSize(25);
              textAlign(CENTER);
              image(arrows[arrowI],300+ 100*u,260,arrows[arrowI].width*0.3, arrows[arrowI].height*0.3 );
            }
          }
        }else{
          stage = 1.5;
          customer.timer.start[7]=undefined;
        }
      break;


    //2.3. 소스 결정 //2.4. 볶기
    case 2: case 3:
      backScreen.setNextBs(batter);
      pots.potsShow();
      //치킨은 keypressed함수에서 구현

      order.display(customer.resultNum);
      fryPan.show();
      imageMode(CORNER);
      arrow.correct(arrowCorr);

      if(stage ==2){
        imageMode(CENTER);
        image(transparent2, width/2, height/2, width,height)
        chicken.show();
        chilli.show();
        garlic.show();
        soy.show();
        chilli.on();
        garlic.on();
        soy.on();

        if(customer.orders[customer.resultNum][0] == 0){
          imageMode(CENTER);
          image(chooseChili, width/2 , height/2 - 100, );
        }else if(customer.orders[customer.resultNum][0] == 1){
          imageMode(CENTER);
          image(chooseGarlic,width/2 , height/2 - 100, );
        }else if(customer.orders[customer.resultNum][0] == 2){
          imageMode(CENTER);
          image(chooseSoy,width/2 , height/2 - 100, );
        }
      }

      if(stage == 3){
        arrow.show();
        if(arrow.arrowType == 0) fill(0)
        else if(arrowCorr) fill(255,200,0);
        else fill(255,0,0);
        imageMode(CENTER);
        image(arrowBackground, 650,260, arrowBackground.width*0.3, arrowBackground.height*0.3 );
        if(keypress!=7*customer.orderNum){
          let arrows = [arrowL, arrowU, arrowR, arrowD];
          print(customer.orderNum);
          for(let u = 1; u<7; u++){
            let arrowI = customer.orders[int(keypress/7)][u]-37;
            image(arrows[arrowI],300+ 100*u,260,arrows[arrowI].width*0.3, arrows[arrowI].height*0.3 );
          }
        }
      }

        textSize(12);
      //치킨은 keypressed함수에서 구현
      fill(255,0,0); textAlign(CENTER); textSize(30); textFont(digital);
      text('STAGE 3: sauce and cook',width/2, 100);
      evaluate(customer);

      break;

    //3. 다음 손님
    case 4:
      customer.timer.setTimer(1); //타이머 1 설정(손님사이 간격)
      if(backScreen.current==3) fryClock.show();
      if(backScreen.current==2){
        imageMode(CENTER);
        image(batterPlate,plateX,plateY,plateSize,plateSize);
      chicken.show();
      }
      if(!customer.timer.finishTimer(1,3)){ //3초 동안
        if(customer.status==1){
          fill(100,100,225,150);
          textSize(80);
          textFont(retro); textAlign(CENTER);
          fryPan.show();
          chicken.show();
          pots.potsShow();
          imageMode(CENTER);
          image(transparent, width/2 - 100, height/2, width,height);
          image(customerHappy, width/2, height/2, customerHappy.width*0.5, customerHappy.height*0.5);
          text('ORDER COMPLETED',width/2, height/2-150);
          if(income >= 100||customer.status==2) gameTimer = new Timer();
          if(chicken.pot()){
            if(customer.timer.finishTimer(1,0.8)){
              chicken.finishedMove(896,125);
            }
          }
        }else{
          fill(225,0,0,150);
          textSize(100);
          textFont(retro); textAlign(CENTER);
          fryPan.show();
          chicken.show();
          pots.potsShow();
          text('TIME\'S UP!',width/2, height/2);
          break;
        }
      }else{ //3초 간격 후
        if(income >= 100||customer.status==2){
          stage = 5;
          gameTimer = new Timer();
          break;
        } //리셋용
        // nextscreen은 evaluate에서 batterscreen으로 세팅되어있음
        stage=-0.2;
        keypress=0;
        clickCount=0; //반죽
        time = millis();
        chicken = new Chicken(batter_imgs,fry_imgs,sauce_imgs,[potChilli,potGarlic,potSoy]);
        chicken.x = 899; chicken.y = 534;
        clickCount = 0;
        arrow = new Arrow([darrow,cleftArrow,cupArrow,crightArrow,cdownArrow],[darrow,fleftArrow,fupArrow,frightArrow,fdownArrow]);
        customer = new Customer(time); //손님 리셋
        spaceToggle = true; //튀김 스페이스
        chicken = new Chicken(batter_imgs,fry_imgs,sauce_imgs,[potChilli,potGarlic,potSoy]); //치킨 리셋 (동일 주문 전환에서도 리셋);
        fryClock = new Clock(clock_img,hand_img,417,161); //초시계 리셋
        arrow = new Arrow([darrow,cleftArrow,cupArrow,crightArrow,cdownArrow],[darrow,fleftArrow,fupArrow,frightArrow,fdownArrow]);
        pots = new Pots([potChilli,potGarlic,potSoy]);
      }
      break;

    case 5: //게임 종료
      if(customer.status == 2){
        resultScreen = doomScreen;
        if(ending.doom()){
          song1.stop();
          song2.stop();
          if(musicToggle2){
            song4.play();
            musicToggle2 = false;
          }
          backScreen.setBs(title);
          backScreen.setNextBs(start);
          imageMode(CORNER);
          image(restartButtonImg1,width/2-80,height*2/3-30, buttonw+100,buttonh+70);
          if(restartButton.over())
            image(restartButtonImg2,width/2-80,height*2/3-30, buttonw+100,buttonh+70);
        }
      }
      if(income>=100){
        gameTimer = new Timer;
        resultScreen = successScreen;
        if(ending.success()){
          song1.stop();
          song2.stop();
          if(musicToggle2){
            song3.play();
            musicToggle2 = false;
          }
          backScreen.setBs(title);
          backScreen.setNextBs(start);
          imageMode(CORNER);
          image(restartButtonImg1,width/2-80,height*2/3-30, buttonw+100,buttonh+70);
          if(restartButton.over())
            image(restartButtonImg2,width/2-80,height*2/3-30, buttonw+100,buttonh+70);
        }
      }
      break;

    default: //stage가 범위를 벗어난 오류인 경우
      fill(255,0,0);
      text('DEFAULT ACTIVATED',width/2, height/2);
  }

  //치킨, 평판게이지
  fameGauge.adjustFame(income);
  switch(stage){
  case 0:
    if(!d) mouse = batterMouseIn;
    break;
  case 0.1: case 4: case 1:
    mouse = batterMouseOut;
    break;
  case 0.5:
  case 1.1: case 1.5:
  case 2:
    mouse = batterMouseOut;
    break;
  case 3:
    chicken.show();
    mouse = batterMouseOut;
    break;
  case -1: case -0.1: case -0.2:
    mouse = batterMouseOut;
    break;
  case -2: case -3:
    mouse = batterMouseOut;
    break;
  default:
    break;
  }

  //게임 타이머 & 수입 보드
  if(stage>=-1&&stage<=4){
    imageMode(CORNER);
    image(gameTimer_img,0,0,gameTimer_img.width/2,gameTimer_img.height/2);
    textFont(digital); textAlign(CENTER); textSize(90);
    fill(225);
    if(timeLimit-int(gameTime/1000)<40){
      if(song1.isLooping){
        song1.stop();
        if(musicToggle){
          song2.play();
          musicToggle = false;
        }
      }
      if(frameCount%15*2<15*4/3){
        fill(255,0,0);
      }else{
        fill(255);
      }
    }
    text(int((150-int(gameTime/1000))/60)+':'+nf((150-int(gameTime/1000))%60,2),124,96);

    image(incomeBoard,width-incomeBoard.width*2/3-5-15,5,incomeBoard.width*2/3+5+15,incomeBoard.height*2/3+20);
    fill(0);
    textAlign(RIGHT);
    text(income+'m',1150,100);
    fill(255);
  }

  //커서
  imageMode(CENTER);
  image(mouse,mouseX+10,mouseY+25,mouse.width/15,mouse.height/15);




  //확인용 텍스트들
  // textSize(10);
  // textAlign(LEFT);
  // noStroke();
  // fill(0,255);
  // text('reputation: '+income,500,200);
  //
  // text('total orders: '+customer.orders,50,50); //전체 주문내역
  // text('number of chickens: '+customer.orderNum,50,70); //치킨 개수
  // for(let i=0; i<customer.orderNum; i++){
  //   text(i+'_order: '+customer.orders[i],50,90+20*i); //각 치킨 주문내역
  // }
  // text('total results: '+customer.results,500,50);
  // text('number of chickens: '+customer.resultNum,500,70);
  // for(let i=0; i<customer.resultNum; i++){
  //   text(i+'_result: '+customer.results[i],500,90+20*i);
  // }
  // text('current result: '+customer.result,500,150);
  // text('status: '+ status(customer.status),50,200)
  // text('time: '+(customer.time-int(customer.timer.showTime(0)/1000)),50,220);
  // text('stage: '+stage+'  keypress: '+keypress,50,240);
}



function keyPressed(){
  if(key=='x') noLoop(); //무한반복 방지용 임시버튼(완성시 삭제)
  if(key=='z') loop();
  if(keyCode === 13)
    stage +=1;

  switch(stage){
    case 1: //튀기기
      if(keyCode === 32 && !customer.timer.finishTimer(3,fryTime)){
        spaceToggle = !spaceToggle
        gauge.ly-=15;
        if (gauge.ly < gauge.bly) gauge.ly = gauge.bly;
      }
      break;

    case 2: //소스 선택

      break;

    case 3: //볶기(화살표맞추기)
      arrow.press(keyCode);
      if(!customer.process(keyCode)){
        stage=1.7; //
        arrowCorr = false;
      }else{
        arrowCorr = true;
        keypress++;
      }

      chicken.cook(keypress);

      if(keypress==customer.orderNum*7){
        evaluate(customer);
        income+=score*customer.orderNum;
        cashSound.play();
        stage = 4;
      }
      if(keypress%7==0 && keypress/7!=customer.orderNum && stage==3){ //동일주문 내 리셋은 다 여기 쓰기
        stage = 1.6;
      }
      break;

    default: //keyPressed 필요없을때
      break;
  }
}

function mousePressed() {
  switch(stage){
  case -3:
    if(startButton.over()) stage +=1;
    song1.loop();
    break;

  case -2:
    if(nextButton.over()) stage +=1;
    break;

  case 0:
    if(d){
      mouse = batterMouseClick;
    }
    break;

  case 5:
    if(restartButton.over()){
      song1.loop();
      song3.stop();
      song4.stop();
      stage = -3.5;
      keypress=0;
      clickCount=0; //반죽
      time = millis();
      customer = new Customer(time); //손님 리셋
      pots = new Pots([potChilli,potGarlic,potSoy]);
      spaceToggle = true; //튀김 스페이스
      chicken = new Chicken(batter_imgs,fry_imgs,sauce_imgs,[potChilli,potGarlic,potSoy]); //치킨 리셋 (동일 주문 전환에서도 리셋);
      fryClock = new Clock(clock_img,hand_img,417,161); //초시계 리셋
      arrow = new Arrow([darrow,cleftArrow,cupArrow,crightArrow,cdownArrow],[darrow,fleftArrow,fupArrow,frightArrow,fdownArrow]);

    }
    break;
  }
}

function mouseClicked(){

  switch(stage){
    case 0:
      if(d){
        plateX += random(-30,30);
        plateY += random(-20,20);
        clickCount++;
      }
      break;

    case 2:
      if(chilli.on()){
        if(!customer.process(chilli.value)){
        }else{
          keypress++; //keypress 변수는 arrow 설명 코드에서도 사용되므로 주의!!!
          chicken.sauce(chilli.value); //0: chilli; 1: garlic; 2: soy;
          fryPan.sauce(chilli.value);
          if(stage==2) stage++;
        }
      }else if(garlic.on()){
        if(!customer.process(garlic.value)){
        }else{
          keypress++; //keypress 변수는 arrow 설명 코드에서도 사용되므로 주의!!!
          chicken.sauce(garlic.value); //0: chilli; 1: garlic; 2: soy;
          fryPan.sauce(garlic.value);
          if(stage==2) stage++;
        }
      }else if(soy.on()){
        if(!customer.process(soy.value)){
        }else{
          keypress++; //keypress 변수는 arrow 설명 코드에서도 사용되므로 주의!!!
          chicken.sauce(soy.value); //0: chilli; 1: garlic; 2: soy;
          fryPan.sauce(soy.value);
          if(stage==2) stage++;
        }
      }
      break;

    default:
      break;
  }//0스테이지 관련
}



function evaluate(customer){ //시간 지났는지 확인 및 지난 경우 페널티 부과 & 끝까지 완료한 경우 점수 부여 + 6스테이지로 이동 //삭제금지!!!!
  if(customer.orderNum!=0 && customer.orderNum==customer.resultNum){ //evaluate에
    chicken.cook(7);
    customer.status=1; //입력완료, correct
    backScreen.setNextBs(batter);
  }
  if(gameTime/1000>=timeLimit){
    stage = 4; customer.status=2;
  }
}



function status(stat){ //화면상 스테이터스 확인용 함수(나중에 화면텍스트 삭제시 같이 삭제)
  if(stat==0) return 'normal';
  if(stat==1) return 'good';
  if(stat==2) return 'bad';
}
