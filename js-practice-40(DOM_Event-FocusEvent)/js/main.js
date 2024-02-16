var input = document.querySelector("input");

input.addEventListener("blur",function(e){
    console.log("blur is occured");
    console.log(e.target);
    console.log(e.target.value);
});

input.addEventListener("focus",function(){
    console.log("focus is occured");
});

input.addEventListener("focusin",function(){
    console.log("focusin is occured");
});

input.addEventListener("focusout",function(){
    console.log("focusout is occured");
});




var input_css = document.querySelector("#input_css");
var text = document.querySelector("p");

input_css.addEventListener("focus",function(){
    input_css.style.backgroundColor = "orange";
    input_css.style.padding = "2rem"
    text.innerHTML = "Hello! I am <b>FOCUS</b>"
});

input_css.addEventListener("blur",function(e){
    input_css.style.backgroundColor = "transparent";
    input_css.style.padding = "0rem";
    text.innerHTML = "Hello! I am <b>BLUR</b>";
    input_css.value = e.target.value.toUpperCase();
})



