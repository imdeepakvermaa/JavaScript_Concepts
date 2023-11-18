// Singleton 

const obj = Object.create(null);
console.log(obj);


const profession = Symbol("Coder")

const myInfo = {
    name: "Deepak Verma",   // string
    course: "Btech", //string
    rollno: 2001331540049, //number
    age: 21,  
    isLoggedIn: true,
    [profession]:"coder",  //symbol
    hobbies: ["Cricket","Videography","Film-making"],   // array

}
// console.log(myInfo);

// console.log(myInfo.course);
// console.log(myInfo["course"]);

myInfo.isLoggedIn = false
Object.freeze(myInfo)
myInfo.isLoggedIn = "true"
// console.log(myInfo);



const greeting = function() {
    console.log("Namaskar!");
}

console.log(myInfo);