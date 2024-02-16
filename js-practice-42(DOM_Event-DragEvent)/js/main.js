var div = document.querySelector("#div_id");
var para = document.querySelector("#para");


para.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("world", e.target.id);
});


div.addEventListener("dragover", function(e){
    e.preventDefault();
});


div.addEventListener("drop", function(e){
    let id = e.dataTransfer.getData("world");
    console.log(id);
    div.appendChild(document.querySelector("#para"));
    e.preventDefault();
})

 para.addEventListener("dragstart",function(){
     console.log("dragstart");
 });

 para.addEventListener("drag",function(){
     console.log("grag");
 });

 para.addEventListener("dragend",function(){
     console.log("dragend");
 });

 para.addEventListener("dragenter",function(){
     console.log("dragenter");
 });

 para.addEventListener("dragleave",function(){
     console.log("dragleave");
 });

 para.addEventListener("dragover",function(){
     console.log("dragover");
 });

 para.addEventListener("drop",function(){
     console.log("drop");
 });