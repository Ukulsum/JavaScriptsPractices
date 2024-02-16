// finding the elements
var form = document.querySelector('form');  
// console.log(form);
var nam = form.querySelector("div #name");
//  console.log(nam);
var email = form.querySelector("div #email");
// console.log(email);
var password = form.querySelector("div #password");
// console.log(password);



// adding a addEventListener using internal anonymous function

 form.addEventListener("submit", function(hi){
     hi.preventDefault();
     console.log("submit");
 });




// // adding a addEventListener using external function

 form.addEventListener("submit",hello);
 function hello(e){
     e.preventDefault();
     console.log("submit");
 }




// adding a addEventListener and finding a value using  function

form.addEventListener("submit", helloWorld)
function helloWorld(hello){
    hello.preventDefault();
    console.log(nam.value);
    console.log(email.value);
    console.log(password.value);
};

 
// adding a addEventListener and finding a value using  function object

form.addEventListener("submit", formHandler)

function formHandler(e){
    e.preventDefault();
    const userInfo ={
        name : nam.value,
        E_mail : email.value,
        password : password.value,
    };

    console.log(userInfo);

    nam.value = "";
    email.value = "";
    password.value = "";
}









