var locationDiv = document.querySelector(".location_div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.pathname;

var p4 = locationDiv.children[4];
p4.textContent = location.hostname;


var button = document.querySelector("#visit_button");

button.addEventListener("click", function(){
    location.assign("https:www.studywithanis.com");
});

//location 
console.log(location);

//href
console.log(location.href);

//protocol
console.log(location.protocol);

//host
console.log(location.host);

//hostName
console.log(location.hostname);

//port 
console.log(location.port);

//pathname
console.log(location.pathname);