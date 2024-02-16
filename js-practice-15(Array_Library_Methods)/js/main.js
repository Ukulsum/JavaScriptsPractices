var names = ["Rima","Nila","alamin","Umme","Lamia"];

document.write("<h1>Default Methods</h1>");
document.write(names + " <br>");


document.write("<h1>Push Methods</h1>");
names.push("Mila");
document.write(names + " ");

document.write("<h1>Unshift Methods</h1>");
names.unshift("Kulsum");
document.write(names+" ");



document.write("<h1>POP Methods</h1>");
names.pop();
document.write(names+" ");

document.write("<h1>Shift Methods</h1>");
names.shift();
document.write(names+" ");



document.write("<h1>SPLICE Methods</h1>");

document.write("<h2>Adding a element with splice Methods</h2>");
var names = ["Rima","Nila","alamin","Umme","Lamia"];
document.write(names+"<br>");

names.splice(1,0,"Lamia","Lima","Tiger");
document.write(names+ "<br>");

names.splice(3,2,"Laboni","Jonny","Ali","Jannat");
document.write(names+"<br>");

document.write("<h2>Remove a element with splice Methods</h2>");
names.splice(1,6);
document.write(names+"<br>");


var names = ["Rima","Nila","alamin","Umme","Lamia"];
document.write(names+"<br>");
names.splice(1,2);
document.write(names+"<br>");



document.write("<h1>SLICE Methods</h1>");


var names = ["Rima","Nila","alamin","Umme","Lamia","Ali","Laboni","Jonny","Jannat"];
var newArray = names.slice(1);
document.write(newArray+"<br>");
document.write(names+"<br>");


var newArray = names.slice(2,6);
document.write(newArray+"<br>");
document.write(names+"<br>");

document.write("<h1>Sort Methods</h1>");

var names = ["Rima","Nila","Alamin","Umme","Lamia","Ali","Laboni","Jonny","Jannat"];
document.write(names+"<br>");
var sortednames = names.sort();
document.write(sortednames+"<br>");

var alphabeSI = ["Cat","Dog","Frog","Rat","Elephant","Tiger","Lion","Ass","Goat","Bat","Horse","Kangaroo","Indigo","Jug","Nut","Owl","Monkey","Rabbit","Sheep","Queen","Umbrella","Window","Yalk","Van","X-ray","Zebra"]
document.write(alphabeSI+"<br>");
var sortedSi = alphabeSI.sort();
document.write(sortedSi);




document.write("<h1>Reverse Methods</h1>");

var names = ["Rima","Nila","Alamin","Umme","Lamia","Ali","Laboni","Jonny","Jannat"];
document.write(names+"<br>");
var sortedval = names.sort();
document.write(sortedval+"<br>")
var sortedval = names.sort();
names.reverse();
document.write(sortedval+"<br><br>");


var alphabeSI = ["Cat","Dog","Frog","Rat","Elephant","Tiger","Lion","Ass","Goat","Bat","Horse","Kangaroo","Indigo","Jug","Nut","Owl","Monkey","Rabbit","Sheep","Queen","Umbrella","Window","Yalk","Van","X-ray","Zebra"]
document.write(alphabeSI+"<br>");
var alphabeSIsorted = alphabeSI.sort();
document.write(alphabeSIsorted+"<br>");


var alphabeSI = ["Cat","Dog","Frog","Rat","Elephant","Tiger","Lion","Ass","Goat","Bat","Horse","Kangaroo","Indigo","Jug","Nut","Owl","Monkey","Rabbit","Sheep","Queen","Umbrella","Window","Yalk","Van","X-ray","Zebra"]
document.write(alphabeSI+"<br>");
var alphabeSIsorted = alphabeSI.sort();
alphabeSI.reverse();
document.write(alphabeSIsorted+"<br>");



document.write("<h1>Number Sort Methods</h1>");
var number = [20,5,32,25,68,75,14,45,46,65,]
number.sort(function(a,b){
    return a-b;
});
document.write(number+ "<br>");

var number = [2,5,32,25,68,75,14,45,46,65,]
number.sort(function(a,b){
    return a-b;
});
document.write(number+"<br>");


var number = [5,5,32,25,68,75,14,45,46,65,]
number.sort(function(a,b){
    return a-b;
});
document.write(number);



document.write("<h1>Number Reverse Methods</h1>");
var number = [2,5,32,25,68,75,14,45,46,65,]
number.sort(function(a,b){
    return b-a;;
});
document.write(number);
document.write("<br>"+"<br>");
















