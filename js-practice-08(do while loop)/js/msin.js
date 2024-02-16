//1-100 nuwmaric
var i = 1;
do{
    document.write(i + " ");
    i++;
}while(i <= 100);

document.write("<h1> END </h1>");

//1-99 odd number
var i = 1;
do{
     document.write(i + " ");
     i = i + 2
}while(i <= 99)

document.write("<h1> END </h1>");

//2-100 even number
var i = 2;
do{
    document.write(i + " ");
    i = i + 2;
}while(i <= 100);
document.write("<h1> END </h1>");

//lessthan number
var i = 20;
do{
    document.write(i + " ");
    i = i - 1;
}while(i >= 1);
document.write("<h1> END </h1>");


//1+2+3+4+5+.............+20
var i = 1;
var sum = 0;
do{
    document.write(sum + "+");
    sum = sum + i;
    i = i + 2;
}while(i <= 100);
document.write("<h1> END </h1>");

var i = 1;
var sum = 0;
do{
    sum = sum + i;
    i = i + 2;
}
while(i <= 100);
document.write("sum = " + sum + " ");
document.write("<h1> END </h1>");


//10+20+30+40+..........+100
var i = 10;
var sum = 0;
do{
    sum = sum + i;
    i = i + 10;
}while(i <= 100);
document.write(sum + " ");
document.write("<h1> END </h1>");

var i = 1;
do{
    if(i%3==0 && i%5==0)
    document.write(i + " ");
    i = i + 1;
}while(i <= 100);
document.write("<h1> END </h1>");

var i = 1;
var sum = 0
do{
    if(i%3==0 && i%5==0)
    sum = sum + i;
    i = i + 1;
}while(i <= 100);
document.write(sum);