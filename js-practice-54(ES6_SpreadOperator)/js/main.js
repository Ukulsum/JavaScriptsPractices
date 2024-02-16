function addNumber(x,y,z){
    return x + y + z;
}

let number = [1,2,4] 
document.write(addNumber(number[0],number[1],number[2]));

document.write("<h1>Break</h1>")
function addNumbers(x,y,z){
    return x + y + z;
}
let numbers = [2,5,6]
document.write(addNumbers(...numbers));


document.write("<h1>Break</h1>");

let numberArray = [5,6,7, ...numbers]
document.write(numberArray);


document.write("<h1>Break</h1>");

let numArray = [2,12,...numberArray,5,6,8,9]
document.write(numArray);



document.write("<h1>concatanate</h1>");

let numberS1 = [1,2,3]
let numberS2 = [4,5,6]
let numberConcat = [numberS1.concat(numberS2)]
document.write(numberConcat);

document.write("<h1>spread operator with concatanate</h1>");
let num1 = [1,2,3,4,5]
let num2 = [5,6,7,8,9]
let nums = [...num1,...num2]
document.write(nums);


document.write("<h1>object with spread operator</h1>");

let p1 = {
    name : "Umme Kulsum",
    age : 22
}
let p2 = {
    nationality : "Bangladesh",
    occupation : "student"
}

let p = {...p1, ...p2}
console.log(p)