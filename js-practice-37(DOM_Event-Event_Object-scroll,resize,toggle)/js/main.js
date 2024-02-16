window.addEventListener("load", function(){
    console.log("load");
});
  

window.addEventListener("unload", function(){
    console.log("unload");
});



window.addEventListener("scroll", function (){
    console.log("scroll");
});


window.addEventListener("resize", function(){
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height : ${height}, width : ${width}`)

});

const detailsToggle = document.querySelector("details");

detailsToggle.addEventListener("toggle", function(e){
    // console.log("toggle");
    console.log(e.target.open);
})
