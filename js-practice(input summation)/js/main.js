
function summation(){
   var user_value = document.querySelector(".user_input").value;
   var result = document.querySelector(".show_result");


    var sum = 0;
    for(var i = 1; i<=user_value; i++){
    sum = sum + i;
}


result.innerHTML=sum;



}