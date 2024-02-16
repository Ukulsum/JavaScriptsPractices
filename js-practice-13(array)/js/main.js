var names = Array(10);
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
document.write(names[5] + "<br>");
document.write(names[8] + "<br>");
document.write(names[6] + "<br>");
document.write(names[4] + "<br>");
document.write(names[9] + "<br>");


var names = Array(10);
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
document.write(names + "<br>");


var names = Array();
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
document.write(names + "<br>");


var names = Array(10);
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
document.write(names.length  + "<br>");

var names = ["Amena","Ovi","Nila","Shila","Jonny","Mila","Umme","Kulsum","Fatima","Mitu"];
document.write(names + "<br>");
document.write(names[5] + ", ");
document.write(names[8] + ", ");
document.write(names[6] + "<br>");
document.write(names.length + "<br>");

document.write("<h2>Push</h2>");
var names = Array(10);
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
document.write(names.length + "<br>");
names.push("lamia");
document.write(names+"<br>");
document.write(names.length+"<br>");
names.push("lili");
names.push("maria");
document.write(names+"<br>");
document.write(names.length);


document.write("<h2>Pop</h2>");

var names = Array(10);
names[0] = "Amena";
names[1] = "Ovi";
names[2] = "Nila";
names[3] = "Shila";
names[4] = "Jonny";
names[5] = "Mila";
names[6] = "Umme";
names[7] = "Kulsum";
names[8] = "Fatima";
names[9] = "Mitu";
names[10] = "lamia";
names[11] = "lili";
names[12] = "maria";
document.write(names+"<br>");
document.write(names.length+"<br>");
names.pop();
document.write(names+"<br>");
document.write(names.length);
names.pop();
names.pop();
document.write(names+"<br>");
document.write(names.length);



document.write("<h2>Concatenation</h2>");
var country1 = ["Banladesh","India"];
var country2 = ["Pakistan","Japan"];
var country = country1.concat(country2);
document.write(country);

var num1 = [12];
var num2 = [18];
var num = num1.concat(num2);
document.write(num);


