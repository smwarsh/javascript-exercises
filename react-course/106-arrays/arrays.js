// convert the code below to use the array methods instead of for loops
// you'll need to use the filter, reduce, map, and forEach methods

const princesses = [{name: 'Rapunzel', age: 18}, {name: 'Mulan', age: 16},
  {name: 'Anna', age: 18}, {name: 'Moana', age: 16}];

// log the name of each princess, follow by a colon, followed by their age
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));


// create an array of princess names from the existing array
const names = princesses.map(princess => princess.name);
console.log("names: ", names);


// using the `names` array, get only those names that start with an 'M'
const mNames = names.filter(name => name.startsWith('M'));
console.log("m-names: ", mNames);


// get a single value from the data: the average age of all of the princesses
const sum = princesses.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
const average = sum / princesses.length;
console.log("average age: ", average);


// BONUS: get the average age of all princesses whose name includes an 'l'
const lNames = princesses.filter(princess => princess.name.includes('l'));
const lAverage = lNames.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / lNames.length;

console.log("l-names average age: ", lAverage);