let num = 1
let bigNum = 4543213546464556464
let name = "Deepak Verma"
let noOfG = null
let isF = false
let location;
let sym1 = Symbol('123')
let sym2 = Symbol('123')


// ---------------------------------- Primitive types [stack storage copy] -----------------------------------

// console.log(typeof num);                 //number
// console.log(typeof bigNum);               //bigInt
// console.log(typeof name);                    //string
// console.log(typeof noOfG);                   //null
// console.log(typeof isF);                          //boolean
// console.log(typeof location);                    //undefined
// console.log(typeof sym1);                                  // symbol
// console.log(typeof sym2);






// -------------------------------- Non-primitive/reference [heap reference] --------------------------------

let myInfo = ["Deepak",21,true,null]
let  myInfo2 = {

    name:"Deepak",
    year: 2024

}

let greeting = function(){
    console.log("ThankYou!");
}

// console.log(typeof myInfo);
// console.log(typeof myInfo2);
// console.log(typeof greeting);