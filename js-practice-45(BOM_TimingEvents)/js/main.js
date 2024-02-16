setTimeout(() =>{
 console.log("hello");
}, 1000);

setTimeout(display, 2000)

function display(){
    console.log("display function");
}


let button = document.querySelector("#btn");
let message = document.querySelector("#message");

button.addEventListener("click", saveBtn);

function saveBtn(){
    message.textContent = "User registration successful.";
}

setTimeout(()=>{
    message.textContent = ""
},2000);


let save_button = document.querySelector("#save_btn");
let messageSave = document.querySelector("#message_btn");

save_button.addEventListener("click", saveMessage);

function saveMessage(){
    messageSave.textContent = "User Registration Successful.";
}

setTimeout(()=>{
    messageSave.textContent = "";
}, 3000);


let intervalBtn = document.querySelector("#intervalBtn");
let messageCount = document.querySelector("#message_count");


    intervalBtn.addEventListener("click", message_btn);

count = 0;
function message_btn(){
    messageCount.textContent = count;
} ;

 setInterval(()=>{
    count++;
    messageCount.textContent = count;
},2000);

