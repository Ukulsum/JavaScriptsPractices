 document.write("<h1>Create & uses object Array</h1>");
   
var studentdetails ={

    name : "Umme Kulsum",
    roll : 1501,
    age : 22,
    cgpa : 3.86,
    language : ["Bangali","Hindi","English","Urdu"]

}

document.write(studentdetails.name+"<br>");
document.write(studentdetails.language+"<br>");
document.write(studentdetails.roll);




document.write("<h1>Create & uses object Array</h1>");

var studentdetails2 ={

    name : "Fatima Akter",
    roll : 1505,
    age : 23,
    cgpa : 3.85,
    language : ["Bangali","English","Urdu"]

}
document.write(studentdetails2.name+"<br>");
document.write(studentdetails2.language+"<br>");
document.write(studentdetails2.cgpa);





document.write("<h1>Create & uses object Array</h1>");

var studentdetails3 ={

    name : "Jonny Islam",
    roll : 1565,
    age : 23.5,
    cgpa : 3.86,
    language : ["Bangali","English","Urdu"]

}
document.write(studentdetails3.name+"<br>");
document.write(studentdetails3.language+"<br>");
document.write(studentdetails3.age);



document.write("<h1>Adding a Constructor using object Array</h1>");

function Student(name,age,roll,cgpa,language){
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.cgpa = cgpa;
    this.language = language;
}

var student1 = new Student("Umme Kulsum",22,1147,3.25,["Bangali","Hindi","English","Urdu"]);
var student2 = new Student("Maria",20,1145,3.63,["Hindi","Urdu","Bangali"]);
var student3 = new Student("Nila",25,1157,3.25,["Urdu","English","English"]);


document.write(student1.name+" , ");
document.write(student2.name+" , ");
document.write(student3.name+"<br>");

document.write(student1.roll+" , ");
document.write(student2.roll+" , ");
document.write(student3.roll+"<br>");

document.write(student1.age + " , ");
document.write(student3.age + " , ");
document.write(student2.age + "<br>");

document.write(student1.cgpa + " , ");
document.write(student3.cgpa + " , ");
document.write(student2.cgpa + "<br>");



 document.write(student1.language + "");
 document.write(student3.language + "");
 document.write(student2.language + "");






document.write("<h1>Adding a Constructor using object Array</h1>");
function Empolee(SI,name,Salary,Another_cost){

    this.si = SI;
    this.name = name;
    this.Salary = Salary;
    this.Another_cost = Another_cost;

}

var Empolee1 = new Empolee(121,"Sajjad",1200,3000);
var Empolee2 = new Empolee(122,"Lima",1200,3000);
var Empolee3 = new Empolee(123,"Mila",1200,3000);
var Empolee4 = new Empolee(124,"Jonny",1200,3000);

document.write(Empolee1.name+"<br>");
document.write(Empolee2.Salary+"<br>");
document.write(Empolee3.si);



// document.write("<h1>Adding function inside a Constructor using object Array</h1>");

// function Student(name,age,roll,cgpa,sub,lang){
//     this.name = name;
//     this.roll = roll;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.sub = sub;
//     this.lang = lang;

//     this.display = function(){
//         document.write(this.name + "," + " ");
//         document.write(this.age + "," + " ");
//         document.write(this.roll + "," + " ");
//         document.write(this.cgpa + "," + " ");
//         document.write(this.sub + "," + " ");
//         document.write(this.lang + "," + " ");
//     }
// }

// var Student1 = new Student("Shakib",22,1107,3.30,["Bangla","English","Math","history"],["Bangali","English","Hindi"]);
// var Student2 = new Student("Kamal",23,1108,3.36,["Bangla","English","Math","Biology","Chemistry"],["Bangali","English","Urdu"]);
// var Student3 = new Student("Jonny",22,1102,3.35,["Bangla","English","Math","Phycs","Biology"],["Bangali","English","Hindi","Urdu"]);
// var Student4 = new Student("Anis",22,1103,3.31,["Bangla","English","Math","Chemistry"],["Bangali","English","Hindi","urdu","purtuges"]);
// var Student5 = new Student("Shihab",22,1109,3.29,["Bangla","English","Math","Accounting"],["Bangali","English","Hindi"]);

// Student1.display();