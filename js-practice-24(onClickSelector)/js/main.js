function myMessage1(){
    alert("I am button ONE.");
}


function myMessage2(){
    alert("I am button TWO.");
}


function myMessage3(){
    alert("I am Paragraph.")
}





function myBtn1(){
    document.querySelector("#para").innerHTML = "You have click on Button <b>ONE</b>";
}

function myBtn2(){
    document.querySelector("#para").innerHTML = "You have click on Button <b>TWO</b>";
}



var helloWorld = document.querySelector("#para2");

function hello1(){
    helloWorld.innerHTML = "You have click on Button ONE.";
}

function hello2(){
    helloWorld.innerHTML = "You have click on Button TWO.";
}


function clickimg1(){
    var clickImg1 = document.querySelector("img")
    clickImg1.src = "images/images uk-02.jpg";

}

function clickimg2(){
    var clickImg2 = document.querySelector("img")
    clickImg2.src = "images/images uk.jpg";
}