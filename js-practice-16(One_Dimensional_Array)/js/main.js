document.write("<h1>Printing one dimensional(1D)Array using for loop</h1>");

var names = ["Allah","Al Rahman","Rahim","Rajjak","Alamin","Moyna","Pegion"]
for(var x=0; x<5; x++){
    document.write(names[x]+" ");
}



document.write("<h1>Printing one dimensional(1D)Array using while loop</h1>");
var names = ["Tiger","Lion","cat","Dog","Zebra","Elephant","Deer","Magpie"]
var x=0;
while(x<6){
    document.write(names[x]+", ");
    x++;
};




document.write("<h1>Printing one dimensional(1D)Array using do-while loop</h1>");
var names = ["Tiger","Lion","cat","Dog","Zebra","Elephant","Deer","Magpie"]
var x=0;
do{
    document.write(names[x]);
    x++;
}while(x<7);



document.write("<h1>Printing highestScorre</h1>");


function highestScore(Scroes){
    var max = Scores[0];
    for(var x=1; x<Scores.length; x++){
        if(max < Scores[x]){
            max = Scores[x];
        }
    }
    return max;
}

var Scores = [25, 56, 59, 88, 36, 98, 100, 78, 150, 65, 89];
var maxScore = highestScore(Scores);
document.write(maxScore);



document.write("<h1>Printing highestScorre</h1>");

function highestScores(scores)
{
  var max = scores[0];
  for(var x=1; x<scores.length; x++){
    if(max < scores[x]){
        max = scores[x];
    }
  }
  return max;
}

var scores = [25,20,35,58,1445,62,152];
var maxscores = highestScores(scores);
document.write(maxscores);