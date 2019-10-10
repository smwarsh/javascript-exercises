// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for(var i=1; i<=7; i++) {
  for(var j=0; j<i; j++) {
    console.log('#');
  }
  console.log('\n');
}


let string = '#';
for(let i=0; i<7; i++) {
  console.log(string);
  string = string.concat('#');
}


let string = '';
while(string.length < 7) {
  string = string.concat('#');
  console.log(string);
}


for(let i=1; i<= 100; i++) {
  if(!(i%3)) { // if i % 3 == 0
    console.log("Fizz");
  } else if (!(i%5)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// THE BOOK'S ANSWER:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);




// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers
// divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz"
// instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by
// both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for(let i=1; i<= 100; i++) {
  if (!(i%3) && !(i%5)) {
    console.log("FizzBuzz");
  }
  else if (!(i%3)) { // if i % 3 == 0
    console.log("Fizz");
  } else if (!(i%5)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// THE BOOK'S ANSWER:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}