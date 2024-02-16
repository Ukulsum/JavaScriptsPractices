var textArea = document.querySelector("textarea");
 textArea.addEventListener("keydown", function(){
     console.log("keydown");
 });
 

 textArea.addEventListener("keypress",function()
 {
     console.log("keypress");
 });


 textArea.addEventListener("keyup", function(){
     console.log("keyup");
 });



textArea.addEventListener("keydown",function(e){
      console.log(e.key);
      console.log(e.code);
      console.log(e.shiftKey);
      console.log(e.repeat);
      console.log(e.ctlkey)

});

textArea.addEventListener("keypress",function(e){
     console.log(e.key);
     console.log(e.code);
      console.log(e.shiftKey);
     console.log(e.ctrlKey);
})
textArea.addEventListener("keyup",function(e){
      console.log(e.key);
      console.log(e.code);
      console.log(e.shiftKey);
      console.log(e.ctrlKey);
   
})