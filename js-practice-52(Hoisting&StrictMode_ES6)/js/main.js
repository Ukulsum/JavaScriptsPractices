document.write("<h1>Hoisting</h1>");
x=25;
document.write(`X = ${x} <br>`);
var x;


y = 250;
document.write(`Y = ${y} <br>`);
var y;


"use strict"
p=45;
document.write(p + "<br>");


y2 = 25;
 if(true){
     z=10;
     document.write(`Z = ${z} <br>`);
 }

document.write(`Y = ${y2} <br>`);