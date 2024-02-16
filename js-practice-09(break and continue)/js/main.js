//Using Break

document.write("<h1>BREAK</h1>");


for(var i=1; i<=100; i++){
    if(i==10){
        break;
    }
    document.write(i + " ");
}
document.write("<h3>END</h3>");


for(var i=1; i<=100; i++){
    document.write(i + " ");
    if(i==10){
        break;
    }
}
document.write("<h3>END</h3>");

//odd number break
for(var i=1; i<=100; i++){
    if(i%2==0){
        break;
    }
    document.write(i + " ");
}
document.write("<h3>END</h3>");

document.write("<h1>CONTINUE</h1>");

//continue
for(var i=1; i<=100; i++){
    if(i==20){
        continue;
    }
    document.write(i + " ");
}
document.write("<h3>END</h3>");

for(var i=1; i<=100; i++){
    document.write(i + " ");
    if(i==20){
        continue;
    }
}
document.write("<h3>END</h3>");


//odd number continue
for(var i=1; i<=100; i++){
    if(i % 2 == 0){
        continue;
    }
    document.write(i + " ");
}
document.write("<h3>END</h3>");


//even number continue
for(var i=1; i<=100; i++){
    if(i % 2 != 0){
        continue;
    }
    document.write(i + " ");
}
document.write("<h3>END</h3>");

