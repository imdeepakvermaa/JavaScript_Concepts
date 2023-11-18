

// function add(num1,num2) {

//     num3 = num1 + num2
//     return num3


// }


// console.log(add(4,4))




function loginUserMessage(username = "You!"){
    if(!username){
        console.log("Please enter the username");
        return 
    }
    return `Hey ${username} ThankYou for logging in.`
}

console.log(loginUserMessage())
