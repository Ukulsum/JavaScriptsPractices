// alert
alert("helloWorld");

//confirm
// confirm("DO you want to delete");
function confirmItem(){
   let value =  confirm("Do you want to Delete Items.");
    if(value){
       document.write('deleted');
    }
    else{
        document.write('not deleted');
    }
}
confirmItem();



function HelloPrompt (){

    let h1 = document.createElement("h1");
    let text;

    var promptValue = prompt("Please Enter a Text");
    if(Name == null || Name == ""){
        text = "no name founded";
    }
    else{
        text = "Welcome" + Name;
    }

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);   

}

HelloPrompt();
