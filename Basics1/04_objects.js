// const userInfo = new Object()
// console.log(userInfo);

// const userInfo = {}

// userInfo.name = "deepak"
// userInfo.age = 21
// userInfo.isLoggedIn = true

// console.log(userInfo.isLoggedIn);

const tinderId = {
    userid: "123466",
    name:{
        fullname: {
            firstname: "Deepak",
            lastname: "Verma"
        }
    }

}

// console.log(tinderId.name);
// console.log(tinderId.name.fullname);
// console.log(tinderId.name.fullname.firstname);

// const obj1 = {0:"a" , 1:"b" , 2:"c"}
// const obj2 = {0:"a" , 1:"b" , 2:"c"}

// const obj3 = { obj1 , obj2 }
// console.log(obj3);
// console.log(...obj1 , ...obj2);

// const obj4 = Object.assign({} , obj1 , obj2)
// console.log(obj4);



// console.log(Object.keys(tinderId));
// console.log(Object.values(tinderId));

console.log(tinderId.hasOwnProperty("name"));
console.log(tinderId.hasOwnProperty("name2"));