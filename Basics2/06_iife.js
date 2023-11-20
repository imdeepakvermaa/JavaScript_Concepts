// Immediately Invoked Function Expressions (IIFE)

// what is iife ?

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED SUCCESSFULLY`);
})();



( (name) => {
    // known as unnamed or arrow fn based iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('Deepak Verma');