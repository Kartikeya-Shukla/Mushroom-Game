//Kartikeya Shukla
//May 21th 2024
//Carnival Game
//Mushroom Shooter

// Welcome to Mushroom Shooter The carnival's most popular game!
// Each player has to take turns using the arrow keys to hit the mushroom target
//Use the arrow keys to move the cursor around the screen
// The Mushroom Head is 2 points 
// The Mushroom Stem is 1 point
// Your goal is to get exactly 5 points so you have to play strategically
//If you get more than 5 point your shot is gone 
// If any player gets 5 points exactly they win
//Have fun playing  :)

let x1, y1;
let x2, y2;
let score1 = 0;
let score2 = 0; 
let mushroomX1, mushroomY1; // Variables for first mushroom
let mushroomX2, mushroomY2; // Variables for second mushroom
let mushroomSpeed1 = 4;
let mushroomSpeed2 = 2; // Different speed for second mushroom
let mushroomDirection1 = 1;
let mushroomDirection2 = -1; // Opposite direction for second mushroom
let mushroomWidth = 100; // restriction for both mushrooms
let projectileSpeed = 0;
let projectile1 = false;
let projectile2 = false;
let crosshairX, crosshairY;
const crosshairSize = 40;


function setup() {
  createCanvas(600, 600);
  mushroomX1 = width / 3;
  mushroomY1 = height / 3;
  mushroomX2 = 2 * width / 3;
  mushroomY2 = 2 * height / 3;
  crosshairX = width / 2;
  crosshairY = height / 2;
}

function Mushroom(x, y) {
  // Mushroom Target Head
  strokeWeight(5);
  fill(0, 0, 255);
  circle(x, y, 125);
  strokeWeight(0);
  fill(255);
  circle(x, y - 5, 55);
  fill(255);

  beginShape();
  vertex(x + 58, y - 25);
  vertex(x + 47, y - 10);
  vertex(x + 60, y + 20);
  vertex(x + 62, y + 10);
  vertex(x + 62, y - 5);
  endShape();

  beginShape();
  vertex(x - 55, y - 26);
  vertex(x - 48, y - 10);
  vertex(x - 58, y + 20);
  vertex(x - 60, y + 9);
  endShape();

  // Mushroom target stem
  strokeWeight(3);
  fill(255, 235, 205);
  beginShape();
  curveVertex(x - 43, y + 35);
  curveVertex(x - 43, y + 35);
  curveVertex(x + 35, y + 35);
  curveVertex(x + 35, y + 65);
  curveVertex(x - 35, y + 65);
  curveVertex(x - 43, y + 35);
  curveVertex(x - 43, y + 35);
  endShape();

  // Mushroom target eyes
  strokeWeight(6);
  fill(255);
  ellipse(x - 21, y + 50, 10, 17); // Left eye
  ellipse(x + 20, y + 50, 10, 17); // Right eye
}
 
function Coin(x, y) {
  // Draw a gold coin
  strokeWeight(1);
  fill(255, 215, 0); 
  ellipse(x, y, 35, 35); 

  // Draw details on the coin
  fill(255, 255, 0);
  ellipse(x, y, 25, 25);
  fill(255, 215, 0);
  rect(x -3.5, y - 8, 7, 15);

}

function Mushroom1 (x, y) {
  // Mushroom Target Head
  strokeWeight(3);
  fill(0, 0, 255);
  circle(x, y, 60);
  strokeWeight(0);
  fill(255);
  circle(x, y - 5, 20);
  fill(255);

  beginShape();
  vertex(x + 23, y - 15);
  vertex(x + 21, y - 6);  
  vertex(x + 26, y + 12);
  vertex(x + 30, y + 6); 
  vertex(x + 30, y - 3); 
  endShape();
  
  beginShape();
  vertex(x - 26, y - 16); 
  vertex(x - 22, y - 6); 
  vertex(x - 28, y + 12); 
  vertex(x - 29, y + 5);  
  endShape();
  
  // Mushroom target stem
  strokeWeight(2);
  fill(255, 235, 205);
  beginShape();
  curveVertex(x - 22, y + 16);    
  curveVertex(x - 22, y + 16);   
  curveVertex(x + 20, y + 16);   
  curveVertex(x + 20, y + 33);   
  curveVertex(x - 22, y + 33);  
  curveVertex(x - 22, y + 26);     
  endShape();

  // Mushroom target eyes
  strokeWeight(4);
  fill(255);
  ellipse(x - 13, y + 26, 7, 9); // Left eye
  ellipse(x + 13, y + 26, 7, 9); // Right eye

}

  function Coin1(x, y) {
    // Draw a gold coin
    strokeWeight(1);
    fill(255, 215, 0); 
    ellipse(x, y, 35, 35); 
  
    // Draw details on the coin
    fill(255, 255, 0);
    ellipse(x, y, 25, 25);
    fill(255, 215, 0);
  
  }

  function Cloud(x, y) {
    strokeWeight(0);
    fill(255),
    ellipse(x + 250, y + 100, 120, 60);
    ellipse(x + 320, y + 90, 120, 70);

  }

   

  function draw() {
    background(0);

  // Range for targeting
  stroke(0);
  fill(0,191,255);
  strokeWeight(5);
  rect(0, 0, 600, 510);
  Cloud(-180,100);
  Cloud(180,50);
  stroke(4);
  strokeWeight(4);
  fill(204, 102, 0);
  rect(400, 295, 150, 150);
  fill(0,255,0);
  arc(425,297,50,60,0,PI)
  arc(475,297,50,60,0,PI)
  arc(525,297,50,60,0,PI)
  Coin1(475,260);
  strokeWeight(4);
  fill(204, 102, 0);
  rect(50, 345, 100, 100);
  fill(0,255,0);
  arc(75,347,50,60,0,PI)
  arc(125,347,50,60,0,PI)
  Coin1(100,317);
  strokeWeight(4);
  fill(50,205,50);
  rect(250, 325, 50, 120);
  rect(235, 305, 80, 50);
  Coin1(273,275)
  stroke(0);
  strokeWeight(4);
  fill(204, 102, 0);
  rect(3, 445, 595, 100);
  strokeWeight(3);
  fill(0,255,0);
  arc(49,447,70,60,0,PI)
  arc(119,447,70,60,0,PI)
  arc(189,447,70,60,0,PI)
  arc(259,447,70,60,0,PI)
  arc(329,447,70,60,0,PI)
  arc(399,447,70,60,0,PI)
  arc(469,447,70,60,0,PI)
  arc(539,447,70,60,0,PI)
  stroke(0)
  strokeWeight(5);  
  fill(0, 0, 255);
  rect(0, 0, 600, 80);
  fill(255);
  strokeWeight(0)
  textSize(20);
  text("Mushroom Shooter", 310, 45);
  Mushroom1(50,40);
  Mushroom1(150,40);
  Mushroom1(446,40);
  Mushroom1(546,40);

  strokeWeight(5);
  // Shooting Section
  fill(0, 0, 255);
  rect(0, 500, 600, 100);

  // Shooting button for player 1
  fill(255);
  stroke(255);
  strokeWeight(1); 
  rect(40, 566, 105, 25, 10);
  noStroke();
  fill(30, 144, 255);
  rect(43, 568, 100, 20, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Player 1 Button", 93, 579);
  noStroke();
  stroke(0);

  // Shooting Button for player 2
  fill(255);
  stroke(255);
  strokeWeight(1); 
  rect(420, 566, 105, 25, 10);
  noStroke();
  fill(30, 144, 255);
  rect(423, 568, 100, 20, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Player 2 Button", 473, 579);
  noStroke();
  stroke(0);

  //Player Scores
  Coin(85,540)
  Coin(465,540)
  fill(255);
  textSize(20);
  text(+ score1, 120, 543);
  text( + score2, 500, 543);


  //Winner Page 
if (score1 === 5) {
  fill(0,191,255);
  strokeWeight(4);
  rect(0,0,600,600);
  strokeWeight(1);
  fill(255)
  textSize(30);
  text("Player 1 Wins!",300,305);
  Mushroom(-50,45)
  Mushroom(120,45)
  Mushroom(290,45)
  Mushroom(460,45)
  Mushroom(630,45)
  Mushroom(-50,205)
  Mushroom(120,205)
  Mushroom(290,205)
  Mushroom(460,205)
  Mushroom(630,205)
  Mushroom(-50,395)
  Mushroom(120,395)
  Mushroom(290,395)
  Mushroom(460,395)
  Mushroom(630,395)
  Mushroom(-50,545)
  Mushroom(120,545)
  Mushroom(290,545)
  Mushroom(460,545)
  Mushroom(630,545)
  mushroomSpeed1 = 0 (0);
} else if (score2 === 5) {
  fill(0,191,255);
  strokeWeight(4);
  rect(0,0,600,600);
  strokeWeight(1);
  fill(255)
  textSize(30);
  text("Player 2 Wins!", 300,305);
  Mushroom(-50,45)
  Mushroom(120,45)
  Mushroom(290,45)
  Mushroom(460,45)
  Mushroom(630,45)
  Mushroom(-50,205)
  Mushroom(120,205)
  Mushroom(290,205)
  Mushroom(460,205)
  Mushroom(630,205)
  Mushroom(-50,395)
  Mushroom(120,395)
  Mushroom(290,395)
  Mushroom(460,395)
  Mushroom(630,395)
  Mushroom(-50,545)
  Mushroom(120,545)
  Mushroom(290,545)
  Mushroom(460,545)
  Mushroom(630,545)
  mushroomSpeed1 = 0 (0);
}


// Mushroom position 1

mushroomX1 += mushroomSpeed1 * mushroomDirection1;
if (mushroomX1 < mushroomWidth / 2) {
  mushroomX1 = mushroomWidth / 2;
  mushroomDirection1 *= -1;
} else if (mushroomX1 > width - mushroomWidth / 2) {
  mushroomX1 = width - mushroomWidth / 2;
  mushroomDirection1 *= -1;
}


// Mushroom position 2
mushroomX2 += mushroomSpeed2 * mushroomDirection2;
if (mushroomX2 < mushroomWidth / 2) {
  mushroomX2 = mushroomWidth / 2;
  mushroomDirection2 *= -1;
} else if (mushroomX2 > width - mushroomWidth / 2) {
  mushroomX2 = width - mushroomWidth / 2;
  mushroomDirection2 *= -1;
}

  Mushroom(mushroomX1, mushroomY1);
  Mushroom(mushroomX2, mushroomY2);
  

// Projectiles for Player 1

 if (projectile1) {
  strokeWeight(3);
  fill(255, 0, 0);
  ellipse(x1, y1, 10, 10);
  y1 -= projectileSpeed;
  if (y1 < 0) {
    projectile1 = false;
  }
  if (dist(x1, y1, mushroomX1, mushroomY1) < 60) {
    if (dist(x1, y1, mushroomX1, mushroomY1 - 20) < 55) {
      score1 += 2; // Score for hitting the head
    } else {
      score1 += 1; // Score for hitting the stem
    }
    projectile1 = false;
  }
  if (dist(x1, y1, mushroomX2, mushroomY2) < 60) {
    if (dist(x1, y1, mushroomX2, mushroomY2 - 20) < 55) {
      score1 += 2; // Score for hitting the head
    } else {
      score1 += 1; // Score for hitting the stem
    }
    projectile1 = false;
  }
}

// Projectiles for Player 2
if (projectile2) {
  strokeWeight(3);
  fill(0, 255, 0);
  ellipse(x2, y2, 10, 10);
  y2 -= projectileSpeed;
  if (y2 < 0) {
    projectile2 = false;
  }
  if (dist(x2, y2, mushroomX1, mushroomY1) < 60) {
    if (dist(x2, y2, mushroomX1, mushroomY1 - 20) < 55) {
      score2 += 2; // Score for hitting the head
    } else {
      score2 += 1; // Score for hitting the stem
    }
    projectile2 = false;
  }
  if (dist(x2, y2, mushroomX2, mushroomY2) < 60) {
    if (dist(x2, y2, mushroomX2, mushroomY2 - 20) < 55) {
      score2 += 2; // Score for hitting the head
    } else {
      score2 += 1; // Score for hitting the stem
    }
    projectile2 = false;
  }
}

mushroomX1 += mushroomSpeed1 * mushroomDirection1;
if (mushroomX1 > width - mushroomWidth || mushroomX1 < mushroomWidth) {
  mushroomDirection1 *= -1;
}

mushroomX2 += mushroomSpeed2 * mushroomDirection2;
if (mushroomX2 > width - mushroomWidth || mushroomX2 < mushroomWidth) {
  mushroomDirection2 *= -1;
}

// Draw crosshair
stroke(255,50,100);
strokeWeight(4);
line(crosshairX - crosshairSize / 2,  crosshairY, crosshairX + crosshairSize / 2,  crosshairY); // Horizontal line
line(crosshairX,  crosshairY - crosshairSize / 2, crosshairX,  crosshairY + crosshairSize / 2); // Vertical line

//Restrition

crosshairX = constrain(crosshairX, 0, 595);
crosshairY = constrain(crosshairY, 80, 500);

// Adjust position based on arrow keys

if (keyIsDown(LEFT_ARROW)) {
crosshairX -= 5;
}
if (keyIsDown(RIGHT_ARROW)) {
crosshairX += 5;
}
if (keyIsDown(UP_ARROW)) {
crosshairY -= 5;
}
if (keyIsDown(DOWN_ARROW)) {
crosshairY += 5;
}

}

function mousePressed() {
if (mouseX > 43 && mouseX < 143 && mouseY > 568 && mouseY < 588) {
  x1 = crosshairX;
  y1 = crosshairY;
  projectile1 = true;
}

if (mouseX > 458 && mouseX < 558 && mouseY > 568 && mouseY < 588) {
  x2 = crosshairX;
  y2 = crosshairY;
  projectile2 = true;
}
}
