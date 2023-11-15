// const arr = ["Deepak",21,"B.Tech.","Computer Science"]
// console.log(arr);

// const arr2 = new Array("Deepak",21,"B.Tech.","Computer Science")
// console.log(arr2);

// const fruits = [];
// fruits.push("banana", "apple", "peach");  //push
// console.log(fruits.length);   //length
// console.log(fruits);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);    //concatenate
// console.log(array3);

// console.log(...array1,...array2);

const array1 = ["a", "b", "c", "d", "e"];
// console.log(array1.copyWithin(0, 3, 4));
// Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));

const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('bison', 2));

// console.log(beasts.indexOf('giraffe'));
// Expected output: -1

const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());

// const fruits = ["Banana", "Mango"];
// const newLength = fruits.unshift("Strawberry");
// console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
// console.log(newLength);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));