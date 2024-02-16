 
 document.querySelector("button").addEventListener("click",hi);

 function hi(){
    alert(" hello World");
 }

 document.querySelector("button").addEventListener("click",function (){
   
    alert("hello everyone");
 });



 document.querySelector("h1").addEventListener("mouseover",function(){
    document.querySelector("h1").innerHTML = "hello heading One"; 
    document.querySelector("h1").style.color = "green";   
    document.querySelector("h1").style.textTransform = "uppercase"; 
    document.querySelector("h1").style.fontSize = "3rem";
 });



 var heading = document.querySelector("#heading");
    
 document.querySelector("#heading").addEventListener("mouseover",function(){
   heading.innerHTML = "hello heading two.welcome.";
   heading.classList.add("heading_style");
});


document.querySelector("#heading").addEventListener("mouseout",function(){


   heading.classList.remove("heading_style");
});





document.querySelector("#heading3").addEventListener("mouseover",function(){

   document.querySelector("#heading3").innerHTML = "Hello heading three. Welcome to heading three.";
   document.querySelector("#heading3").classList.add("heading_style");
});




document.querySelector("#heading3").addEventListener("mouseout",function(){


   document.querySelector("#heading3").classList.remove("heading_style");
});