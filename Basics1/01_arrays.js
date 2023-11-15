


// const arr = ["Deepak",21,"B.Tech.","Computer Science"]
// console.log(arr);



// const arr2 = new Array("Deepak",21,"B.Tech.","Computer Science")
// console.log(arr2);


const fruits = [];
fruits.push("banana", "apple", "peach");  //push
// console.log(fruits.length);   //length
// console.log(fruits);


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);    //concatenate
// console.log(array3); 

// console.log(...array1,...array2);




const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
// Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));



const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));
// Expected output: -1