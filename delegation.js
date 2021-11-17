// Delegation
function teacherGreeting( teacher ){
    console.log( "Hey there my name is " + teacher.firstName + ". I will be the intructor of the course. Welcome!" );
}

function studentGreeting( student ){
    console.log( "Hello, I am " + student.fName + " " + student.lName + ". Really exited to be here!" );
}

let teacher = {
    firstName : "Roger",
    lastName : "Mendez",
    course : "Web Development"
};

let student = {
    fName : "Alan",
    lName : "Gomez",
    age : 25
};

function globalGreeting( obj, callback ){
    callback( obj );
}

function sayHi( text ){
    console.log( "Hi! " + text );
}

globalGreeting( teacher, teacherGreeting );
globalGreeting( student, studentGreeting );
globalGreeting( "Michael", sayHi );