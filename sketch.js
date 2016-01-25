function table(w,h){
  var x=mouseX
  var y=mouseY
  
  for(var i=0; i<w; i=i+2){
    for (var j=0; j<h; j=j+2){
      fill(100,100,250)
      stroke(100,100,250)
      ellipse(x,y,i,j)
      x=x+32
    }
    y=y+32
    x=mouseX
  }
}
  
function setup() {
  createCanvas (1400,1400)
}

function draw() {
  background(250,250,250)
  table(16,16)
}
