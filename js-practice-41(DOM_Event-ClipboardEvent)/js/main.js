var input = document.querySelector("input");
var text = document.querySelector("p");

input.addEventListener("copy",function(){
    text.innerHTML = "You Have Copied. ";
});

input.addEventListener("cut",function(){
    text.innerHTML = "You Have Cut. ";
});

input.addEventListener("paste",function(){
    text.innerHTML = "You Have Paste. "
});