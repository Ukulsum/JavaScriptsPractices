document.write("<h1>variable declare using var</h1>");
var y=6;
if(true){
    var y = 5;
}
document.write(y);

document.write("<h1>variable declare using let</h1>");

let x = 6;
for(let x=1; x<=10; x++){
    document.write(x + "<br>");
}
document.write("<br>" + x);

document.write("<h1>Normal String Concatenate </h1>");

var num1 = 36;
var num2 = 25;
var sum = num1+num2;
document.write("sum = "+sum + "<br>");


var num1 = 36;
var num2 = 25;
var multi = num1 * num2;
document.write("multipication = " + multi);

document.write("<h1>Create String Concatenate using ES6</h1>");

let num3 = 60;
let num4 = 22;
let sum2 = num3+num4;
document.write(`The sum ${sum2} is positive number <br>`);


let num5 = 3;
let num6 = 25;
let multi2 = num5 * num6;
document.write(`The multipication ${multi2} is positive number.<br>`);

let num7 = 25;
let num8 = 26;
document.write(`The sum number is ${num7 + num8} <br>`);

let num9 = 25;
let num10 = 26;
document.write(`The multiple num is ${num9 * num10} <br>`)

let name = "Umme Kulsum";
let message = `Hi! I am ${name} . I am learning a JavaScript.`

document.write(message);

document.write("<h1>Create a normal function</h1>");

function add(x,y){
    var sum = x+y;
    document.write("sum = " + sum + "<br>");
}
add(20,25);

function addition(){
    var x = 25;
    var y = 65;
    var sum = x+y;
    document.write("sum = " + sum);
}
addition();

document.write("<h1>Create a function using ES6</h1>");

const adding = (x,y) =>{
    let sum = x + y;
    document.write("sum = " + sum + "<br>");
}
adding(25,69);

// const multi = (p,q) => {
//     // let x = 52;
//     // let y = 48;
//     let multiple = p * q;
//     document.write("The multiple number is = " + multiple + "<br>");
// }
// multi(20,5);

const mul = (n1,n2) =>{
    let multi = n1 * n2;
    document.write("multi = " + multi + "<br>");
};
mul(25,2);

const mul2 = () =>{
    let number1 = 5;
    let number2 = 5;
    let multi2 = number1 * number2;
    document.write("Multiple = " + multi2 + "<br>");
}
mul2();

const multiNumber = () =>{
    let number3 = 25;
    let number4 = 4;
    // let multiNumber = number1 * number2;
    document.write("Multiple = " + number3 * number4 + "<br>");
}
multiNumber();

