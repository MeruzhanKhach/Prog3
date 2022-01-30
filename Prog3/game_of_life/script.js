var matrix = [
    [5, 1, 2, 0, 2, 0, 2, 1, 2, 0, 2, 0, 2, 1, 5 ],
    [1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1 ],
    [0, 1, 2, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 1 ],
    [0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0 ],
    [1, 0, 1, 0, 5, 0, 0, 1, 1, 3, 5, 0, 1, 2, 1 ],
    [0, 1, 2, 0, 0, 0, 1, 0,1, 0, 0, 0, 0,  1, 0 ],
    [1, 0, 1, 0, 1, 0, 0, 5, 0, 0, 0, 0, 1, 2, 1 ],
    [0, 1, 2, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 1, 0 ],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 1 ],
    [0, 1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0 ],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1 ],
    [0, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 4, 1, 0 ],
    [1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1 ],
    [5, 1, 2, 0, 2, 0, 2, 1, 2, 0, 2, 0, 2, 1, 5 ],
 ];
// var matrix = [
//   [0, 4, 0],
//   [0,3,0],
//   [3,3,0]


//  ]; //Ընկեր Արտակ էս փոքր մատրիցայով ստուգել եմ  պերսոնաժների աշխատանքը այսինքն թազա պերսանաշ գրելուց հեշտ էր ստուգելը փոքրի վրա 
 
 let img;
function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5WWbv214El750SWPwsdcyV7qJbutQeED-w&usqp=CAU');
  
}
 var side = 30;
 var grassArr =[];
 var grassEaterArr=[];
 var eaterArr =[];
 var molekulArr =[];
 var pashtpanArr = [];
 var antarapahArr = [];


 
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
   
    var Grass1 = new Grass (1,2)
    Grass1.chooseCell(0);
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2){
                var grEat = new GrassEater(x,y);
                grassEaterArr.push(grEat);
     
            }
            else if(matrix[y][x] == 3){
                var et  = new Eater(x,y);
                eaterArr.push(et);
     
            }	
             else if(matrix[y][x] == 4) {
                var q =new Antarapah(x,y);
                antarapahArr.push(q);
            }
            else if(matrix[y][x] == 5) {
                var c =new pashtpan(x,y);
                pashtpanArr.push(c);
            }
            else if(matrix[y][x] == 6) {
                var n =new molekul(x,y);
                molekulArr.push(n);
            }   
           
        }
     }
     console.log(grassArr);
     
 }
 

 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
            //   image(img, x * side, y * side, side, side);
            fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#7a643d");
            }
            else if (matrix[y][x] == 2){
                fill("yellow")
            }
            else if (matrix[y][x] == 3){
                fill("red")
            }
            else if (matrix[y][x] == 4){
                fill("deepskyblue")
            }
            else if (matrix[y][x] == 5){
                fill("#73e8c7");
            }
            else if (matrix[y][x] == 6){
                fill("#fccffc")
            }
         
            ellipse((x+0.52) * side, (y+0.52) * side, side, side);   //shrjan
            // rect(x * side, y * side, side, side);     //qarakusi
   
        }

    }
    for (var i in grassArr){
        grassArr[i].mul();
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }
 for(var i in eaterArr){
         eaterArr[i].eat();
     }
     for (var i in pashtpanArr){
        pashtpanArr[i].mul();
    }
    for (var i in antarapahArr){
        antarapahArr[i].eat();
    }
 }




