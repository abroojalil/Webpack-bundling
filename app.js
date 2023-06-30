// Example JavaScript code
console.log("Hello, World!");

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Generate and display 10 random numbers and check if they are prime
for (let i = 1; i <= 10; i++) {
  const randomNumber = getRandomNumber(1, 100);
  const isNumberPrime = isPrime(randomNumber);

  console.log(`Random Number ${i}: ${randomNumber}`);
  console.log(`Is Prime? ${isNumberPrime}`);
  console.log("-------------------");
}
