let fizz = 'Fizz'
let buzz = 'Buzz'
let fizzBuzz = `${fizz} ${buzz}`

// Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} ${fizzBuzz}`)
  } else if (i % 5 === 0) {
    console.log(`${i} ${buzz}`)
  } else if (i % 3 === 0) {
    console.log(`${i} ${fizz}`)
  } else {
    console.log(i)
  }
}

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

// Part 3: Prime Time

let CSV =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let count = 1

let cell1 = ''
let cell2 = ''
let cell3 = ''
let cell4 = ''

for (let i = 0; i < CSV.length; i++) {
  if (CSV.charAt(i) === ',') {
    count++
  } else if (CSV.charAt(i) === '\n') {
    console.log(cell1, cell2, cell3, cell4)

    count = 1
    cell1 = ''
    cell2 = ''
    cell3 = ''
    cell4 = ''
  } else {
    if (count === 1) {
      cell1 += CSV.charAt(i)
    } else if (count === 2) {
      cell2 += CSV.charAt(i)
    } else if (count === 3) {
      cell3 += CSV.charAt(i)
    } else if (count === 4) {
      cell4 += CSV.charAt(i)
    }
  }
}