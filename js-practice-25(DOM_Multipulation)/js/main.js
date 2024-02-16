
var link = document.getElementsByTagName("a")[0]
link.innerHTML = "Hello! Everyone...How are you?"




link.style.textDecoration = "none";
link.style.color = "Green";
link.style.fontSize = "1.5rem";
link.href = "https://ummekulsum.com";



var heading3 = document.createElement("h1");
var text = document.createTextNode("This is a heading THREE.");
heading3.appendChild(text);

var div1 = document.getElementById("my_div");
div1.appendChild(heading3);




var heading4 = document.createElement("h2");
var text = document.createTextNode("This is a heading FOUR.");
heading4.appendChild(text);

var h4 = document.getElementById("my_div");
h4.appendChild(heading4);


var heading5 = document.createElement("h1");
var text = document.createTextNode("This is a heading FIVE.");
heading5.appendChild(text);

var h5 = document.getElementById("my_div");
h5.appendChild(heading5);




var heading6 = document.createElement("h1");
var text =  document.createTextNode("This is a heading SIX.")
heading6.appendChild(text);

var h6 = document.getElementById("my_div");
h6.appendChild(heading6);



var h2 = document.getElementById("my_div");
var hello = document.getElementsByTagName("h1")[1];
h2.removeChild(hello);


var heading5 = document.getElementById("my_div");
var hi = document.getElementsByTagName("h1")[3];
heading5.removeChild(hi);



var welcome = document.createElement("h1");
var text = document.createTextNode("WELCOME TO MY JAVASCRIPT PROJECT");
welcome.appendChild(text);

var myDiv = document.getElementById("my_div");
var header1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(welcome,header1);




var hello = document.createElement("h2");
var text = document.createTextNode("hello everyone...How are you all?");
hello.appendChild(text);

var heading2 = document.getElementById("my_div");
var header1 = document.getElementsByTagName("h1")[1];
heading2.insertBefore(hello,header1);



var para = document.createElement("p");
var text = document.createTextNode("hey..what the hell are you doing under your desk?");
para.appendChild(text);


var myDiv = document.getElementById("my_div");
var head = document.getElementsByTagName("h1")[1];
myDiv.insertBefore(para,head);




document.getElementById("my_div").classList;

document.getElementById("my_div").classList.add("my_class_2");

document.getElementById("my_div").classList.remove("my_class");





