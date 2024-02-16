var input1 = document.querySelector('input');
 console.log(input1);
input1.addEventListener("change", changeHandler);

function changeHandler(e){
    console.log("changed");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
} ;




var input2 = document.querySelector("input[type=email]");
console.log(input2);
input2.addEventListener("change", function(e){
    console.log("change");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
});





var input3 = document.querySelector("input[name=number]");
console.log(input3);
input3.addEventListener("change", function(e){
    console.log("change");
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.value);
});




var programs = document.querySelectorAll("input[name=Program]");
// console.log(programs);


Array.form(programs).map((Programs) => {
    program.addEventListener("change",programHandler);
})

function programHandler(e) {
    console.log("checked")
}