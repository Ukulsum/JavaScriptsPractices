document.querySelectorAll(".myButton")[0].addEventListener("click",function(){

    
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is click" ;
});



document.querySelectorAll(".myButton")[1].addEventListener("click",function(){


    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is click"
});



document.querySelectorAll(".myButton")[2].addEventListener("click",function(){


    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is click";
});



document.querySelectorAll(".myButton")[3].addEventListener("click",function(){


    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is click";
})





for(var i=0; i<4; i++){

    document.querySelectorAll(".myButton_2")[i].addEventListener("click",function(){


        var text = this.innerHTML;
        document.querySelectorAll("h1")[1].innerHTML = "Hi! I am" + text;
    });

};


var len = document.querySelectorAll(".myButton_3").length;

for(var i=0; i<len; i++){

    document.querySelectorAll(".myButton_3")[i].addEventListener("click",function(){


        var text = this.innerHTML;
        document.querySelectorAll("h1")[2].innerHTML = "Hello .. " + text + " is click";
    });

}




