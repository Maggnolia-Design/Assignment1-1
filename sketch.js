/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/

function table(w,h){
  var x=50
  var y=50
  
  for(var i=0; i<w; i=i+2){
    for (var j=0; j<h; j=j+2){
      ellipse(x,y,i,j)
      x=x+32
    }
    y=y+32
    x=50
  }
}
  
function setup() {
  createCanvas (1400,1400)
}

function draw() {
  table(16,16)
}
