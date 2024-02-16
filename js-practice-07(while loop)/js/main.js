var x = 1;
while(x <= 10){
    document.write(x + " ");
    x++;
}
document.write("<h1>End</h1>");


var x = 10;
while(x >= 1){
    document.write(x + " ");
    x = x - 1;
}
document.write("<h1>End</h1>");


var x = 10;
while(x <= 100){
    document.write(x + " ");
    x = x + 1;
}
document.write("<h1>End</h1>");


var x = 1;
while(x < 100){
    document.write(x + " ");
    x = x + 2;
}
document.write("<h1>End</h1>");


var x = 2;
while(x <= 100){
    document.write(x + " ");
    x = x + 2;
}
document.write("<h1>End</h1>");


//1+2+3+4+5+................+10

var i = 1;
var sum = 0;
while(i <= 10){
    document.write(sum + "+");
    sum = sum + i;
    i = i + 1;   
}
 document.write(sum + "<br>");

 var i = 1;
 var sum = 0;
 while(i <= 10){
    sum = sum + i;
    i = i + 1;
 }
 document.write("sum = " + sum);
 document.write("<h1>End</h1>");


 //2 + 4 + 6 + 8  + ...............+ 100

 var i = 2;
 var sum = 100;
 while(i <= 100){
    sum = sum + i;
    i = i + 2;
 }
 document.write("sum = " + sum);
 document.write("<h1>End</h1>");


 //1 + 3 + 5 + 7 + ............. + 99

 var i = 1;
 var sum = 0;
 while(i <= 99){
    sum = sum + i;
    i = i + 2;
 }
 document.write("sum = " + sum);
 document.write("<h1>End</h1>");


 //3 +  6 + 9 + 11 + ........... + 99

 var i = 3;
 var sum = 0;
 while(i <= 100){
    sum = sum + i;
    i = i + 3;
 }
 document.write("sum = " + sum);
 document.write("<h1>End</h1>");

 var i = 1;
 var sum = 0;
 while(i <= 100){
    if(i%3==0 && i%5==0){
        sum = sum + i;
        document.write(sum + " + ");
    }
    i = i + 1;
 }
 document.write("sum = " + sum);


