var num = [10,20,30,40,50];

document.write(num[0]+",");
document.write(num[1]+",");
document.write(num[3]+"<br>");

var num = [10,20,30,40,50,60,70];
document.write(num);

document.write("<h2>Loop In Array</h2>");
var num = [10,20,30,40,50,60,70]
for(var i=0; i<6; i++){
    document.write(num[i]+ " ");
}

document.write("<h2>Loop In Array</h2>");
var number = [10,100,12,20,200,30,35]
for(var i=0; i<=6; i++){
    document.write(number[i]+ " ");
}


document.write("<h2>Loop In Array</h2>");
var number = [10,100,12,20,200,30,35]
var i = 0;
while(i<7){
    document.write(number[i]+ " ");
    i++;
}

document.write("<h2>Loop In Array</h2>");
var number = [10,100,12,20,200,30,35]
var i = 0;
do{
    document.write(number[i]+" ");
    i=i+1;
    
}while(i<=6);

document.write("<h2>Loop In Array create add sum with for loop</h2>");
var num = [15,12,18,15,14,10,12,20,30,60]
var sum = 0;
for(var i=0; i<7; i++){
    document.write(num[i]+"<br>");
    sum =sum + num[i];
}
document.write("sum =" + sum +"<br>");


document.write("<h2>Loop In Array create add sum with for while</h2>");
var num = [15,12,18,15,14,10,12,20,30,60]
var i=0;
var sum=0;
while(i<9){
    document.write(num[i]+ " ");
    i++;
    sum = sum + num[i]
}
document.write("sum ="+sum);

document.write("<h2>Loop In Array create add sum with for while</h2>");
var num = [15,12,18,15,14,10,12,20,30,60]
var i=0;
var sum=0;
do{
    document.write(num[i]+ " ");
    i++;
    sum=sum+i;
}while(i<9);

document.write("sum =" + sum);


document.write("<h2>Loop In Array</h2>");
var num = Array;
for(var i=0; i<5; i++){
    num[i ] = parseInt(prompt("Enter a number :"));
    document.write(num[i] + " ");
}
var sum = 0;
for(var i=0; i<5; i++){
    sum = sum + i;
}
document.write("sum =" + sum);



