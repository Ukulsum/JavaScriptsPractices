document.write(`<h1>Create a traditional function</h1>`);
function display1(){
    document.write(`Hi! I am Display One.<br>`);
};
display1();
document.write(`<h1>break</h1>`);

function display1(){ document.write(`Hi! I am Display One.`);};
display1();

document.write(`<h1>Create a array function</h1>`);
const display2 = () =>{ document.write(`Hello!I am Umme Kulsum.`);
};
display2();


document.write(`<h1>Create a traditional  function</h1>`);
function message(){
    return "Hi..I want to go home. She wants to play with me.";
}
document.write(message());



document.write(`<h1>break</h1>`)

function message1(){
    return "Hi! I am message 1."
}
const message2 = () => {
    return "Hello! I am message 2."
} 

let message3 = () => "Hello! I am message 3."

document.write(message1() + "<br>");
document.write(message2() + "<br>");
document.write(message3());


document.write("<h1>How to passing a parameter traditional's functions </h1>");

function addNum(num1,num2){
    return num1 + num2;
}
document.write(addNum(10,20));


document.write("<h1>How to passing a another parameter Arrow functions </h1>");
const addnumber = (num1,num2) => {
    return num1 + num2;
}

document.write("20 + 50 = " + addnumber(20,50)+ "<br>");


document.write("<h1>How to passing a  parameter Arrow functions </h1>");

const squareNum = num1 =>{
    return num1 * num1;
}

document.write("10 * 10 = " + squareNum(10) + "<br>");



document.write("<h1>How to passing a  parameter Arrow functions  without return</h1>");

const subsNum = (num1, num2) => num1 - num2;

document.write("100 - 56 = " + subsNum(100,56));