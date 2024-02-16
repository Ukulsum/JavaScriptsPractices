//Ternary Operator
 var number = Number(prompt("Enter a number :"));
 if(number>0){
     document.write("Position");
 }
 else{
     document.write("Negative");
 }
 var number = Number(prompt("Enter a number :"));
 var result = number > 0 ? "Positive" : "Negative"
 document.write("<br>" + result);
 var number = Number(prompt("Enter a number :"));
 number >0 ? document.write("<br>" + "Positive") : document.write("<br>" + "Negative");

 var number = Number(prompt("Enter a number :"));
 if(number>0){
     document.write("<br>" + "Positive");
 }
 else if(number<0){
     document.write("<br>" + "Negative");
 }
 else{
     document.write("<br>" + "Zero");
 }


 var number = Number(prompt("Enter a number :"));
var result = number>0 ? "Positive" : number<0 ? "Negative" : "Zero";
 document.write("<br> " + result);

