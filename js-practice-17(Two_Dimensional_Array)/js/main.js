document.write("<h1>Printing Two Dimensional array</h1>");

var names = [
      ["Rohit", 15],
      ["Rohan", 54],
      ["Umme", 85],
      ["Jonny", 78],
      ["Karim", 35],
      ["Sarmin", 25],
];
document.write(names[0][0]+" ");
document.write(names[3][0]+" ");
document.write(names[1][1]+" ");


document.write("<h1>Printing 2D array using for loop</h1>");

var names = [
    ["Rohit", 15],
    ["Rohan", 54],
    ["Umme", 85],
    ["Jonny", 78],
    ["Karim", 35],
    ["Sarmin", 25],
];

for(var x=0; x<6; x++){
    for(var y=0; y<2; y++){
        document.write(names[x][y]+"<br>");
    }
};



document.write("<h1>Printing 2D array using while loop</h1>");

var names = [

    ["Rohit", 15],
    ["Rohan", 54],
    ["Umme", 85],
    ["Jonny", 78],
    ["Karim", 35],
    ["Sarmin", 25],

];

var x=0;
while(x<6){
    var y=0;
    while(y<2){
        document.write(names[x][y]+" "); 
        y++; 
    }
    x++;
 };



 document.write("<h1>Printing 2D array using while loop</h1>");

 var names = [

    ["Rohit", 15],
    ["Rohan", 54],
    ["Umme", 85],
    ["Jonny", 78],
    ["Karim", 35],
    ["Sarmin", 25],

];

var x = 0;

do{

    var y = 0;
    do{
        document.write(names[x][y]);
        y++;
    }while(y<2);
    x++;
    
}while(x<6);
