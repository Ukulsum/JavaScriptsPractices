const studentSub = ["bangla", "english", "math", "science"]
for(let subject of studentSub){
    document.write(subject + "<br>");
};

const studentInform = {
    name : "Umme Kulsum",
    Roll : 1011,
    subject : "Bangla"
}
for(let information in studentInform){
    document.write(`${information} : ${studentInform[information]} <br>`);
}