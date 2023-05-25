//Actividad 2//
/*Alumna: Julieta Lescano*/

//--- coordenadas horizontales sup.
let quadX = 100;
let quadX1 = 115;

let quadX2 = 130;
let quadX3 = 145;

let quadX4 = 160;
let quadX5 = 175;

let quadX6 = 190;
let quadX7 = 205;

let quadX8 = 220;
let quadX9 = 235;

let quadX10 = 250;
let quadX11 = 265;

let quadX12 = 280;
let quadX13 = 295;

let quadX14 = 310;
let quadX15 = 325;

let quadX16 = 340;
let quadX17 = 355;

//--- coordenadas horizontales inf.
let quadZ = 400;
let quadZ1 = 370;

let quadZ2 = 450;
let quadZ3 = 420;

let quadZ4 = 500;
let quadZ5 = 470;

let quadZ6 = 550;
let quadZ7 = 520;

let quadZ8 = 600;
let quadZ9 = 570;

function setup() {
  createCanvas(700, 700);
  frameRate(30);
}

function draw() {
  noStroke(0);
  background(0);

  //--- CUADRILÁTEROS VERTICALES

  /*dcha.*/
  quad(590, 110, 590, 590, 600, 600, 600, 100);
  quad(570, 130, 570, 570, 580, 580, 580, 120);
  quad(550, 150, 550, 550, 560, 560, 560, 140);
  quad(530, 170, 530, 530, 540, 540, 540, 160);
  quad(510, 190, 510, 510, 520, 520, 520, 180);
  quad(490, 210, 490, 490, 500, 500, 500, 200);
  quad(470, 230, 470, 470, 480, 480, 480, 220);
  quad(450, 250, 450, 450, 460, 460, 460, 240);
  quad(430, 270, 430, 430, 440, 440, 440, 260);
  quad(410, 290, 410, 410, 420, 420, 420, 280);
  quad(390, 310, 390, 390, 400, 400, 400, 300);
  quad(370, 330, 370, 370, 380, 380, 380, 320);
  quad(350, 350, 350, 350, 360, 360, 360, 340);

  /*izq.*/

  quad(100, 100, 100, 600, 120, 580, 120, 120);
  quad(140, 140, 140, 560, 160, 540, 160, 160);
  quad(180, 180, 180, 520, 200, 500, 200, 200);
  quad(220, 220, 220, 480, 240, 460, 240, 240);
  quad(260, 260, 260, 440, 280, 420, 280, 280);
  quad(300, 300, 300, 400, 320, 380, 320, 320);
  quad(340, 340, 340, 360, 360, 340, 360, 360);

  //--- CUADRILÁTEROS HORIZONTALES Y FUNCIÓN "REINICIAR"

  /*sup.*/

  //quadX, X1
  quad(quadX, 100, quadX1, 115, 585, 115, 600, 100);
  quadX = quadX + 1;
  quadX1 = quadX1 + 1;
  //quadX2, X3
  quad(quadX2, 130, quadX3, 145, 555, 145, 570, 130);
  quadX2 = quadX2 + 1;
  quadX3 = quadX3 + 1;
  //quadX4, X5
  quad(quadX4, 160, quadX5, 175, 525, 175, 540, 160);
  quadX4 = quadX4 + 1;
  quadX5 = quadX5 + 1;
  //quadX6,X7
  quad(quadX6, 190, quadX7, 205, 495, 205, 510, 190);
  quadX6 = quadX6 + 1;
  quadX7 = quadX7 + 1;
  //quadX8,X9
  quad(quadX8, 220, quadX9, 235, 465, 235, 480, 220);
  quadX8 = quadX8 + 1;
  quadX9 = quadX9 + 1;
  //quadX10, X11
  quad(quadX10, 250, quadX11, 265, 435, 265, 450, 250);
  quadX10 = quadX10 + 1;
  quadX11 = quadX11 + 1;
  //quadX12, X13
  quad(quadX12, 280, quadX13, 295, 405, 295, 420, 280);
  quadX12 = quadX12 + 1;
  quadX13 = quadX13 + 1;
  //quadX14, X15
  quad(quadX14, 310, quadX15, 325, 375, 325, 390, 310);
  quadX14 = quadX14 + 1;
  quadX15 = quadX15 + 1;
  //quadX16,X17
  quad(quadX16, 340, quadX17, 355, 345, 355, 360, 340);
  quadX16 = quadX16 + 1;
  quadX17 = quadX17 + 1;

  /*inf.*/

  //quadZ, Z1
  quad(330, 370, 300, 400, quadZ, 400, quadZ1, 370);
  quadZ = quadZ - 1;
  quadZ1 = quadZ1 - 1;
  //quadZ2, 3
  quad(280, 420, 250, 450, quadZ2, 450, quadZ3, 420);
  quadZ2 = quadZ2 - 1;
  quadZ3 = quadZ3 - 1;
  //quadZ4, Z5
  quad(230, 470, 200, 500, quadZ4, 500, quadZ5, 470);
  quadZ4 = quadZ4 - 1;
  quadZ5 = quadZ5 - 1;
  //quadZ6, Z7
  quad(180, 520, 150, 550, quadZ6, 550, quadZ7, 520);
  quadZ6 = quadZ6 - 1;
  quadZ7 = quadZ7 - 1;
  //quadZ8, Z9
  quad(130, 570, 100, 600, quadZ8, 600, quadZ9, 570);
  quadZ8 = quadZ8 - 1;
  quadZ9 = quadZ9 - 1;

  //--- presione "Barra Espaciadora" para "Reiniciar"
  if (keyIsPressed) {
    if (keyCode == "32") {
      quadX = 100;
      quadX1 = 115;

      quadX2 = 130;
      quadX3 = 145;

      quadX4 = 160;
      quadX5 = 175;

      quadX6 = 190;
      quadX7 = 205;

      quadX8 = 220;
      quadX9 = 235;

      quadX10 = 250;
      quadX11 = 265;

      quadX12 = 280;
      quadX13 = 295;

      quadX14 = 310;
      quadX15 = 325;

      quadX16 = 340;
      quadX17 = 355;

      quadZ = 400;
      quadZ1 = 370;

      quadZ2 = 450;
      quadZ3 = 420;

      quadZ4 = 500;
      quadZ5 = 470;

      quadZ6 = 550;
      quadZ7 = 520;

      quadZ8 = 600;
      quadZ9 = 570;
    }
  }
}
