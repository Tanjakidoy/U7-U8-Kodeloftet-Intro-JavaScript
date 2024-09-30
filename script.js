
// A JavaScript Boolean represents one of two values: true or false //

let x = 10;
let y = 20;
let isEqual = x === y;

console.log('is the numbers equal');
console.log(isEqual);

let nameA = 'Lars';
let nameB = 'Tanja';
let isNamesEqual = nameA === nameB;

console.log('is the names equal');
console.log(isNamesEqual);

let thisIsUndefined;
console.log('This is undefined');
console.log(thisIsUndefined);

let doesNotYetHaveValue = null;
console.log('The following does not yet have a value:');
console.log(doesNotYetHaveValue);

// A JavaScript array is a special variable, which can hold more than one value //

let arrayA = ['Per', 'Pål', 'Espens', 'Martha'];

console.log('This is a array (list)');
console.log(arrayA);

console.log('Accessing a single entry');
console.log(arrayA[1]);

let personA = {
  name: 'Espen',
  proffesion: 'Adventurer',
  age: 18,
  eyeColor: 'blue',
};
console.log('This is a collection of variables (Object)');
console.log(personA);

console.log('Accessing a single entry in an object');
console.log(personA['proffesion']);
console.log(personA.eyeColor);

console.log(console);
console.error('This is a error');
