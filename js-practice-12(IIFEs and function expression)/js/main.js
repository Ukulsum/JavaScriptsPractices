function display(){
    document.write("hello");
}
display();

document.write("<h4>start</h4>");

(function display(){
    document.write("hello");
})();

document.write("<h4>start</h4>");



function hi(){
    document.write("hello");
}
hi();

document.write("<h4>start</h4>");

function Do(){
    document.write("do or die");
}
Do();

document.write("<h4>start</h4>");


function does(){
    document.write("Early to bed");
}
does();

document.write("<h4>start</h4>");


(function good(){
    document.write("good morning")
})();

document.write("<h4>start</h4>");


(function DoYouKnowMe(){
    document.write("Do You Know Me");
})();

document.write("<h4>start</h4>");


(function hieveryone(){
    document.write("Hi...Every One..Do you Love Me...")
})();

document.write("<h4>start</h4>");


(function day(Message){
    document.write(Message);
})("hello");

document.write("<h4>start</h4>");


(function Doyou(doyouknowme){
    document.write(doyouknowme);
})("Do or Die, Early to bed, Early rising, Jonny Jonny yes papa..");

// var x = 10;
// var y = 20;
// sum = x + y;
// (function add(){
//     document.write();
// })(sum);


document.write("<h4>Function Expression</h4>");

var display2 = function displaymessage (message) {
    document.write(message);
};
display2("I am a message");

var display2 = function displayMessage(msg){
    document.write(msg);
};
display2("I am message");


document.write("<h4>Function Expression</h4>");

var hello = function helloworld(mdg){
    document.write(mdg);
};
hello("HI!Everyone..How are you??");

