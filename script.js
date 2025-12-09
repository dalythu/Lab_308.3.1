let fizz = "Fizz";
let buzz = "Buzz";
let fizzBuzz = `${fizz} ${buzz}`;

// for loop iterate from 1 - 100

for ( let i=1; i <= 100; i++) {
    if (i % 3 === 0 ) {
        console.log(`${i} ${fizz}`);
    } else if (i % 5 === 0) {
        console.log(`${i} ${buzz}`);
        } 
};


