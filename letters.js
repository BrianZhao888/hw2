function setup() {
  createCanvas(600, 600);
}
  
function printA(x,y){
    line(x,y,x+30,y-60);
    line(x,y,x,y+60);
    line(x+30,y-60,x+60,y);
    line(x,y+5,x+60,y+5);
    line(x+60,y,x+60,y+60);
}
function printB(x,y){
  line(x,y-60,x,y+60);
  line(x,y-60,x+60,y-20);
  line(x,y+10,x+60,y-20);
  line(x,y,x+60,y+20);
  line(x,y+60,x+60,y+20);
}  

function printC(x,y){
  line(x,y,x+40,y-60);
  line(x,y,x+40,y+60);
}


function printD(x,y){
  line(x,y-60,x,y+60);
  line(x,y-60,x+60,y);
  line(x,y+60,x+60,y);
}

function printE(x,y){
  line(x,y,x+60,y-60);
  line(x,y,x+60,y+60);
  line(x,y,x+55,y);
}

function printF(x,y){
  line(x,y,x+60,y-60);
  line(x,y,x+55,y);
  line(x,y,x,y+60);
}

function printG(x,y){
  line(x,y,x+60,y-60);
  line(x,y,x+60,y+60);
  line(x+60,y+60,x+80,y+10);
  line(x+80,y+10,x+40,y+10);
}
  
function printH(x,y){
  line(x,y+10,x+20,y-30);
  line(x,y+10,x+20,y+60);
  line(x+60,y+10,x+40,y-30);
  line(x+60,y+10,x+40,y+60);
  line(x,y+10,x+60,y+10);
}

function printI(x,y){
  line(x,y-30,x,y+60);
line(x,y-30,x+15,y-10);
}
   
function printJ(x,y){
  line(x,y-30,x,y+60);
  line(x,y+60,x-30,y+25);
  line(x,y-30,x+10,y-30);
}

function printK(x,y){
  line(x,y-30,x-10,y+60);
  line(x-5,y+30,x+40,y-10);
  line(x-5,y+30,x+40,y+60);
}

function printL(x,y){
  line(x,y-30,x-5,y+60);
  line(x-5,y+60,x+40,y+60);
}
 
function printM(x,y){
  line(x,y-30,x-20,y+60);
  line(x+30,y+60,x,y-30);
  line(x+30,y-30,x+10,y+60);
  line(x+60,y+60,x+30,y-30);
}
 
function printN(x,y){
    line(x,y-30,x,y+60);
  line(x+50,y+60,x,y-30);
  line(x+50,y-30,x+50,y+60);
}

function printO(x,y){
  line(x,y+20,x+30,y-30);
  line(x+60,y+20,x+30,y-30);
  line(x,y+20,x+30,y+60);
  line(x+60,y+20,x+30,y+60);

}

function printP(x,y){
  line(x,y-20,x,y+60);
  line(x,y-20,x+50,y);
  line(x,y+20,x+50,y);
}
  
function printQ(x,y){
   line(x,y+20,x+30,y-30);
  line(x+60,y+20,x+30,y-30);
  line(x,y+20,x+30,y+60);
  line(x+60,y+20,x+30,y+60);
  line(x+30,y+20,x+50,y+60);
}

function printR(x,y){
  line(x,y-20,x,y+60);
  line(x,y-20,x+50,y);
  line(x,y+20,x+50,y);
  line(x,y,x+50,y+60);
} 

function printS(x,y){
  line(x,y,x+40,y-20);
  line(x,y,x+40,y+40);
  line(x+40,y+40,x,y+60);
}

function printT(x,y){
  line(x,y-10,x+60,y-10);
  line(x+30,y-10,x+30,y+60);
}
  
function printU(x,y){
  line(x,y-10,x,y+50);
  line(x+60,y-10,x+60,y+50);
  line(x,y+50,x+30,y+70);
  line(x+60,y+50,x+30,y+70);
}

function printV(x,y){
  line(x,y-30,x+30,y+50);
  line(x+60,y-30,x+30,y+50);
}

function printW(x,y){
  line(x+50,y+60,x+70,y-30);
  line(x+20,y-30,x+50,y+60);
  line(x+20,y+60,x+40,y-30);
  line(x-10,y-30,x+20,y+60);
}

function printX(x,y){
  line(x,y-30,x+60,y+60);
  line(x+60,y-30,x,y+60);
}

function printY(x,y){
  line(x,y-30,x+30,y+20);
  line(x+60,y-30,x+30,y+20);
  line(x+30,y+20,x+30,y+60);
}

function printZ(x,y){
  line(x,y-30,x+60,y-30);
  line(x+60,y-30,x,y+60);
  line(x,y+60,x+60,y+60);
  
}



  function draw() {
  background(200);
    printA(20,100);
    printB(100,100);
    printC(180,100);
    printD(260,100);
    printE(340,100);
    printF(420,100);
    printG(490,100);
    printH(20,200);
    printI(100,200);
    printJ(180,200);
    printK(260,200);
    printL(340,200);
    printM(420,200);
    printN(500,200);
    printO(20,300);
    printP(100,300);
    printQ(180,300);
    printR(260,300);
    printS(340,300);
    printT(420,300);
    printU(500,300);
    printV(20,400);
    printW(100,400);
    printX(180,400);
    printY(260,400);
    printZ(340,400);
  }
