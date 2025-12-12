// let fizz = "Fizz";
// let buzz = "Buzz";
// let fizzBuzz = `${fizz} ${buzz}`;

// // Part 1: Fizz Buzz

// for ( let i=1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} ${fizzBuzz}`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} ${buzz}`);
//     } else if (i % 3 === 0  ) {
//         console.log(`${i} ${fizz}`);
//     } else {
//         console.log(i);
//     }

// };

// Part 2: Prime Time

let n = 11
let isPrime = true

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    isPrime = false
    break
  }
}

if (isPrime) {
  console.log(n + ' is prime')
} else {
  console.log(n + ' is NOT prime')
}
