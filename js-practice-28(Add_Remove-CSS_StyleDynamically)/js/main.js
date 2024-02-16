
 var paraStyle = document.querySelector("#para");
 paraStyle.style.color = "green";
 paraStyle.style.fontSize = "3rem";
 paraStyle.style.fontStyle = "italic";
 paraStyle.style.fontWeight = "bold";


function addStyle(){
    var paraStyle1 = document.querySelector("#Para_id").style.color = "red";
    var paraStyle1 = document.querySelector("#Para_id").style.fontSize = "2rem"; 
    var paraStyle1 = document.querySelector("#Para_id").style.fontWeight = "bold"; 
    var paraStyle1 = document.querySelector("#Para_id").style.fontStyle = "italic"; 

}



function addStyle2(){

    var paraStyle2 = document.querySelector("#Para_id2");
    paraStyle2.style.color = "green";
    paraStyle2.style.fontSize = "3rem";
    paraStyle2.style.fontStyle = "italic";
    paraStyle2.style.fontWeight = "bold";

}



function addStyle3(){
    var paraStyle3 = document.querySelector("#Para_id3");

    paraStyle3.classList.add("Para_id3");

}



function removeStyle3(){

    var paraStyle3 = document.querySelector("#Para_id3");

    paraStyle3.classList.remove("Para_id3")
}





var paraStyle4 = document.querySelector("#Para_id4");


function addStyle4(){

    paraStyle4.classList.add("Para_id3");
}




 function removeStyle4(){

    paraStyle4.classList.remove("Para_id3");
}





