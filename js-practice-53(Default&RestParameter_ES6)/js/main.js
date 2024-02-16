document.write("<h1>Default parameter </h1>");
function message(){
    document.write("welcome <br>");
}
message();

function message2(text){
    document.write(`${text}`);
}
message2("welcome to join ES6 <br>");

function message3(text = "This is default parameter. "){
    document.write(`${text}`);
}
message3()
message3("Welcome. This is ES6. <br>");

"use strict"
function message4(){
    document.write("welcome <br>");
}
message4();

function message5(text){
    document.write(`${text}`);
}
message5("welcome to join ES6 <br>");

function message6(text = "This is default parameter. "){
    document.write(`${text}`);
}
message6()
message6("Welcome. This is ES6. ");


document.write("<h1>Rest parameter </h1>");
function  hello(x,y){
    document.write(`x=${x},<br> y=${y} <br>`);
}
hello(20,30);

function  hello(x,y,...z){
    document.write(`x=${x}, <br> y=${y}, <br> z=${z}`);
}
hello(20,30,50,60,68,62,700);



let x =