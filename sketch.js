var part1,part2,part3;



function setup() {
  createCanvas(800,400);

 part1= createSprite(400, 200, 160, 90);
part2 = createSprite(300,200,50,80);
part3= createSprite(200,100,30,30);
part1.debug=true;
part2.debug= true;

part1.shapeColor=("red");
part2.shapeColor=("blue")

}

function draw() {
  background(0);  

part1.x=mouseX
part1.y=mouseY
if (touch(part1,part3)){
part1.shapeColor="white"
part3.shapeColor="green"
}
else{
part1.shapeColor="red"
part3.shapeColor="blue"
}



if (touch(part1,part2)){
part2.shapeColor="white"
part1.width=100
}
else{part1.width=60
     part2.shapeColor="blue" }


//console.log(part1.width/2+part2.width/2)
console.log(part1.x-part2.x)


  drawSprites();
}