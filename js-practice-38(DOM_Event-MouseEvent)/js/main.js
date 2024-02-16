// //finding a element
 var div = document.querySelector("div");

// //Click MouseEvent create using addEventListener
// div.addEventListener("click", function(e){
//     console.log("Click mouse is occured");
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className)
//     console.log(e.target.innerHTML);
//     console.log(e.target.textContent);
//     console.log(e.target.innerText);
// });

// //Double Click MouseEvent create using addEventListener
//  div.addEventListener("dblclick", function(){
//      console.log("Double click mouse is occured")
//  });

// //MouseDown Event create using addEventListener
//  div.addEventListener("mousedown",function(){
//      console.log("mousedown is occured")
//  });

// //MouseUp Event create using addEventListener
//  div.addEventListener("mouseup",function(){
//      console.log("mouseup is occured")
//  });

// //MouseEnter Event create using addEventListener
//   div.addEventListener("mouseenter",function(){
//      console.log("mouseenter is occured")
//   })
// //MouseLeave Event create using addEventListener
//  div.addEventListener("mouseleave",function(){
//      console.log("mouseleave is occured")
//  })
// //MouseMove Event create using addEventListener
//  div.addEventListener("mousemove", function(e){
//      // console.log("mousemove is occured")
//      // console.log("clientX ="+e.clientX , "clientY ="+e.clientY);
//      console.log("offsetX ="+e.offsetX , "offsetY ="+e.offsetY)
//  });

// //MouseOver Event create using addEventListener
//  div.addEventListener("mouseover",function(){
//      console.log("mouseover is occured")
//  })
// //MouseOut Event create using addEventListener
//  div.addEventListener("mouseout",function(){
//      console.log("mouseout is occured")
//  });



  var buttons = document.querySelectorAll(".btn");
//   console.log(buttons);

Array.from(buttons).map((buttons) => {
    buttons.addEventListener("click",function(e){
        console.log("clicked");
        console.log(e.target);
        console.log(e.target.innerText);
    })
})