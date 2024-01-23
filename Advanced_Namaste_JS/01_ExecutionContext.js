const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter your age: ', (enterAge) => {
    const age = parseInt(enterAge);
    if (age >= 18) {
      console.log('You are eligible to vote');
    } else {
      console.log('You are not eligible to vote');
    }
    console.log(typeof age)
  
    rl.close();
  });