var num = 5;
var result = num * num;
document.write("Result = " + result + "<br>");

var num = 5;
var result = num * num;
document.write("Result = " + result + "<br>");

document.write("<h1>Creating a Function</h1>");
//Creating a result
function square(){
    var num = 5;
    var result = num * num;
    document.write("Result =" + result + "<br>");
}


//calling a function
square();
square();
square();


//create a parametter function

document.write("<h1>Parametter Function</h1>");

function real(num){
    var result = num * num;
    document.write("Result =" + result + "<br>")
}
real(6);
real(9);
real(10);

//creating a multiple function

document.write("<h1>Multiple Function</h1>");

function multi(num1,num2){
    var result = num1 * num2;
    document.write("Result =" + result + "<br>");
}
multi(5,6);
multi(10,6);
multi(10,6);


document.write("<h1>Multiple Function</h1>");

function multiple(num1,num2,num3){
    var result = (num1+num2)*num3;
    document.write("Result = " + result + "<br>");
}
multiple(5,3,5);
multiple(5,2,5);
multiple(5,9,5);

document.write("<h1>Multiple Function</h1>");

function early(num1,num2,num3,num4,num5){
    var result = (num1*num2/num3+num4-num5);
    document.write("Result ="+result+"<br>");
}
early(5,3,3,4,2);
early(10,5,2,4,3);
early(8,6,4,3,2);

document.write("<h1>Return Function</h1>");

function hello(num1,num2){
    var result = num1 * num2;
    return result;
}
document.write("Result = " + hello(5,2));


document.write("<h1>Return Function</h1>");

function world(num1,num2){
    var result = num1*num2;
    return result;
}
    var x = world(5,2);
document.write("Result =" + x);

//add function

document.write("<h1>Add Function</h1>");

function add(num1,num2){
    var result = num1 + num2;
    return result;
}
var x = add(2,3);
document.write("Result = " + x);


//Sub function

document.write("<h1>Sub Function</h1>");
function sub(num1,num2){
    var result = num1 - num2;
    return result;
}
var x = sub(5,3);
document.write("Result = " + x);


//multiple function
document.write("<h1>Multiple Function</h1>");
function nul(num1,num2){
    var result = num1 * num2;
    return result;
}
var x = nul(5,3);
document.write("Result = " + x);


//Divition function

document.write("<h1>Divition Function</h1>");
function div(num1,num2){
    var result = num1 / num2;
    return result;
}
var x = div(15,3);
document.write("Result =" + x)
