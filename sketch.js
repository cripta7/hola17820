
var foto;


function preload(){


  foto = loadImage ("libraries/foto.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);


}

function draw() {
  image(foto,mouseX,mouseY,mouseX, mouseY);

}
