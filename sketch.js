let img;
var button1;
var button2;
var button3;

function setup() {
  createCanvas(1024, 1600);
  background(70, 88, 107);
  img = loadImage('CogDisCollage.jpg');
  bore =loadImage('Boring.jpg');
  cog =loadImage('Cognitive.jpg')
  shoes =loadImage('shop.jpg')
  
button1=createButton("L E A R N")
button1.position(50,790);

button2=createButton("COGNITIVE DISSONANCE")
button2.position(350,790); 

button3=createButton("S H O P")
button3.position(750,790); 


}

function draw() {
  image(img,0,0);
  button1.mousePressed(learnText);
  button2.mousePressed(CogDis);
  button3.mousePressed(Shopper);

}

function learnText() {
  image(bore,15,820,320, img.height*width/img.width);
}

function CogDis() {
  image(cog,350,820,300,750);

}

function Shopper() {
  image(shoes,660,820,350,800);
  var img = new Image();
  img.src = 'shop.jpg';
  img.onclick = function() {
    alert("WARNING!! Buying this product directly supports the following... Forced labor, pollutants, toxins, detrimental cotton sourcing, unethical financial activities , unethical political activities, corporate lobbying, and animal cruelty")
  };
  document.body.appendChild(img);
  
  var img = new Image();
  img.src = 'shop.jpg';
  img.onclick = function() {
    alert("WARNING!! Buying this product directly supports the following... Forced labor, pollutants, toxins, detrimental cotton sourcing, unethical financial activities , unethical political activities, corporate lobbying, and animal cruelty")
  };
  document.body.appendChild(img);
  var img = new Image();
  img.src = 'shop.jpg';
  img.onclick = function() {
    alert("WARNING!! Buying this product directly supports the following... Forced labor, pollutants, toxins, detrimental cotton sourcing, unethical financial activities , unethical political activities, corporate lobbying, and animal cruelty")
  };
  document.body.appendChild(img);
  }


