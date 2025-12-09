function greet(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

greet("Yaslam");

function sum(a, b) {
  return a + b;
}


console.log(sum(5, 7));  

const square = (num) => num * num;
console.log(square(6));  


let language = "JavaScript";  

function showLanguage() {
  let language = "Python";  
  console.log("Inside function:", language);
}

showLanguage();
console.log("Outside function:", language);


function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(9));
console.log(checkEvenOdd(21));
