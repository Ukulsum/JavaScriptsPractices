document.write(`<h1>Create Dynamic Array Using ForEach</h1>`);
let numbers = [10,20,50,41,25,36,85,64]
let squares =[]
numbers.forEach(function(x){
    squares.push(x*x);
})
document.write(`${numbers} <br>`);
document.write(`${squares}`);


document.write(`<h1>Create Dynamic Array Using Map</h1>`);
let numbers2 = [20,52,11,65,60,48,30,12,25]
let squareNumber = numbers2.map(function(y){
    return y*y;
});
document.write(`${numbers2} <br>`);
document.write(`${squareNumber}`);

document.write(`<h1>Again Map Practices (index+5) adding</h1>`);
let num = [10,20,32,100,2,15,50,22,4,8]
let fiveNumAdd = num.map(function(x,index,arr){
     return arr[index] = x+5;
});
document.write(`${fiveNumAdd}`);
 

document.write(`<h1>Again Map Practices (index+15) adding</h1>`);
let nums = [10,20,25,30,32,14,15,65,26,85]
let addingNum = nums.map(myfunction);
function myfunction(y,add,arra){
    return arra[add] = y+15;
}
document.write(`${nums} <br>`);
document.write(`${addingNum}`);



document.write(`<h1>Create Dynamic Array Using Filter</h1>`);
let numbers3 = [10,20,3,5,6,70,8,9,15]
let newNumbers = numbers3.filter(function(x){
    return x<=10
});
document.write(`${numbers3} <br>`);
document.write(`${newNumbers}`)