var photos = ["images/images-01.jpg","images/images-02.jpg","images/images -03.jpg","images/images-04.jpg"];

var imgTag = document.querySelector("img");

var count = 0;
function next(){
    count++;


if(count >= photos.length){
    count = 0;
    imgTag.src = photos[count];
}else{
    imgTag.src = photos[count];
}
    
}



function previ(){
    count--;

   if(count < 0){
    count = photos.length - 1;
    imgTag.src = photos[count];
   }
   else{
    imgTag.src = photos[count];
   }

}