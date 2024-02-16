document.write(`<h1>JavaScript practices using For</h1>`);
let numbers = [10,25,14,263,56]
for(let x = 0; x<=numbers.length; x++){
    document.write(numbers[x] + "<br>");
}

document.write(`<h1>JavaScript practices using ForEach</h1>`);

let numbers2 = [15,25,35,48,70,69,58]
numbers2.forEach(myfunction)
function myfunction(x){
    document.write(`${x} `);
};


document.write(`<h1>JavaScript practices using ForEach anonymous </h1>`);

let numbers3 = [15,25,35,48,70,69,58]
numbers3.forEach(function(x){
    document.write(`${x} <br>`)
});

document.write(`<h1>JavaScript practices using ForEach anonymous </h1>`);

let numbers4 = [25,78,54,15,36,42,19,36];
document.write(`${numbers4} <br>`)
let squaresNum = [];
numbers4.forEach(function(y){
    squaresNum.push(y*y);
});

document.write(`${squaresNum} <br>`);


document.write(`<h1>JavaScript practices using ForEach anonymous </h1>`);

let num = [21,10,25,62,57,87,96];
document.write(`${num} <br>`);
num.forEach(function(x,y,arr){
   arr[y] = x+5;
});
document.write(`${num} `);



