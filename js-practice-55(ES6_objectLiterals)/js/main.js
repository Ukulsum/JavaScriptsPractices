function studentInfo1(name,age){
    return{
        name : name,
        age : age
    }
}

console.log(studentInfo1("Umme Kulsum", 22));

function studentInfo2(name,roll){
    return{
        name,
        roll
    }
}
console.log(studentInfo2("Umme Kulsum", 1011))


let message = {
    body : function(){
        return 'Hi! I am Umme Kulsum.'
    }
}

console.log(message.body());
let message2 = {
    body(){
        return `Hi. How are you?`
    }
}
console.log(message2.body());


let message3 = {
    'body name'(){
        return `Hello! Everyone..how are you?`
    }
}
console.log(message3['body name']());


function teacherInfo(name,age,salary){
    return{
        name : name,
        age : age,
        salary : salary
    }
}
console.log(teacherInfo("Halima", 35, 25000));



function teacherInfo2(name,age,salary){
    return{
        name,
        age,
        salary
    }
}
console.log(teacherInfo2("Rabeya", 40, 60000));


let teacherMessage = {
    massage : function(){
        return `Hello Halima! Are you English Teacher?`
    }
}
console.log(teacherMessage.massage());


let teacherMessage2 = {
    'message info'(){
        return `Hello Rabeya!  What are you doing now.`
    }
}
console.log(teacherMessage2['message info']())