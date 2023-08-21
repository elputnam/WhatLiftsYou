//Failure to load: Imagining wings

//photos
let base;
let wingsCU;
let pigeons;
let line1;
let line2;
let wings;
let text;

let alp1 = 0;
let alp2 = 100;
let alp3 = 100;

let x;
let y;
let inc = 20;
let colour = 180;

function preload(){
  base = loadImage('assets/WhatLiftsYou_base.png');
  wingsCU = loadImage('assets/WhatLiftsYou_wingCU.png');
  pigeons = loadImage('assets/WhatLiftsYou_pigeons.png');
  line1 = loadImage('assets/WhatLiftsYou_line1.png');
  line2 = loadImage('assets/WhatLiftsYou_line2.png');
  wings = loadImage('assets/WhatLiftsYou_wings.png');
  text = loadImage('assets/WhatLiftsYou_text.png')
}
function setup() {
  createCanvas(base.width*.75, base.height*.75);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  frameRate(7);
  x = 100;
  y = height - 200;
}

function draw() {
  background(colour, 100, 100);

  //base
  push();
  tint(255, random(70,100));
  image(base, 0, 0, width, height);
  pop();

  //wing Overlay
  blend(wingsCU, 0, 0, wingsCU.width, wingsCU.height, 0, 0, width, height, DIFFERENCE);


  //lines
  blend(line2, 0, 0, line2.width, line2.height, random(-10, 10), random(-10, 10), width, height, DARKEST);


   //pigeons
   fill(colour+180, 100, 100, alp1);
   rect(0, 0, width, height);
   push();
   tint(255, random(alp1));
   image(pigeons, random(-10, 10), random(-10, 10), width, height);
   pigeons.filter(INVERT);
   pop();
   push();
   tint(255, random(alp1));
   image(pigeons, random(-10, 10), random(-10, 10), width, height);
   //pigeons.filter(INVERT);
   pop();

   line1.filter(GRAY);
   blend(line1, 0, 0, line1.width, line1.height, random(-10, 10), random(-10, 10), width, height, DARKEST);
   


   

  //wings
  push();
  tint(random(alp2), random(60,100));
  wings.filter(INVERT);
  image(wings, random(-10, 10), random(-10, 10), width, height);
  pop();

  //text

  push();
  tint(colour, 100, 100);
  text.filter(GRAY);
  image(text, x+random(-5,5), y, width, height)  
  pop();

  // text.filter(INVERT);
  // blend(text, 0, 0, text.width, text.height, x+random(-5,5), y, width, height, DIFFERENCE);
  if (frameCount%int(random(20))==0){
    colour = random(180);
    if (alp1 == 0){
      alp1 = 100;
      alp2 = 0
      // alp3 = 0;
    } else {
        alp1 = 0;
        alp2 = 100;
        // alp3 = 50;
      }
    }

  y-= inc;

  if (y <= 10 || y >= height - 200 ){
    inc *= -1;
  }

}
