function table(w,h){
  var x=50
  var y=50
  
  for(var i=0; i<w; i=i+3){
    for (var j=0; j<h; j=j+3){
      fill(mouseX,mouseY,mouseX+mouseY)
      noStroke()
      ellipse(x,y,i,j)
      x=x+40
    }
    y=y+40
    x=+50
  }
}
  
function setup() {
  createCanvas (500,500)
}

function draw() {
  background(240,240,240)
  table(25,25)
}
