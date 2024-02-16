 var marks = prompt("Enter your marks : ");

  if(marks > 100 || marks < 0)
    document.write("Invalid marks");
  if(marks >= 80 && marks <=100)
    document.write("A+");
  if(marks >= 70 && marks < 80)
    document.write("A");
  if(marks >= 60 && marks < 70)
    document.write("A-");
  if(marks >= 50 && marks < 60)
    document.write("B");
  if(marks >= 40 && marks < 50)
    document.write("C");
  if(marks >=33 &&  marks < 40)
    document.write("D");
  if(marks < 33 && marks <= 0)
    document.write("Fail");


  var marks = prompt("Enter your marks : ");

  if(marks > 100 || marks < 0)
    document.write("Invaild marks")

  else if(marks > 79)
    document.write("A+");
  else if(marks > 69)
    document.write("A")
  else if(marks > 59)
    document.write("A-");
  else if(marks > 49)
    document.write("B");
  else if(marks > 39)
    document.write("C");
  else
    document.write("Fail");


  var num1 = prompt("Enter num1 : ");
  var num2 = prompt("Enter num2 : ");
  var num3 = prompt("Enter num3 : ");


  if(num1>num2 && num1>num3)
    document.write("Enter a large number : " + num1);

  else if(num2>num1 && num2>num3)
    document.write("Enter a large number : " + num2);

  else
    document.write("Enter a large number : " + num3);


var letter = prompt("Enter a letter : ");

letter = letter.to();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
  console.log("Vowel");

else 
  console.log("Consonant");


