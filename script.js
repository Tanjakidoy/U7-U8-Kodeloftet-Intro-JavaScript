// INTRO JAVASCRIPT - THE LET KEYWORD - PART 1 //

let greeting = 'God Morgen Kodeloftet';

// "let" er ett nøkkelord for å lage en ny variabel //
// "greeting" er et vavlgfritt navn //
// "=" lagrer verdien på høyre side i navnet på venstre
// 'God Morgen Kodeloftet' er verdien som blir lagret

// INTRO JAVASCRIPT - THE LOG() METHOD //

console.log(greeting);

// Skriver innholdet i "greeting" variablen til konsollen
// log() method writes (logs) a message to the console //

// INTRO JAVASCRIPT - THE LET KEYWORD - PART 2 //

let numberA = 10;
let numberB = 32;

console.log('Tall A:');
console.log(numberA);

console.log('Tall B:');
console.log(numberB);

// INTRO JAVASCRIPT - THE LET KEYWORD - PART 3 //

let numberC = numberA / numberB + numberA - numberB;

console.log('Tall C:');
console.log(numberC);

// INTRO JAVASCRIPT - STRINGS ( TEXT) //

let stringA = 'Hello';
let stringB = 'World';
let stringC = `!!!`;

let stringD = " Lets 'Go'!";

// A JavaScript string is zero or more characters written inside quotes //

console.log(stringD);

// INTRO JAVASCRIPT - THE LET KEYWORD - PART 4 //

let newLine = 'Hello\n\n\nWorld';
console.log(newLine);
let multiLine = `
Testing
testing
testing
`;
console.log(multiLine);

let a = 10;

// INTRO JAVASCRIPT - BOLEANS //

let boolTrue = true;
let boolFalse = false;

let isPasswordValid = false;

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

// INTRO JAVASCRIPT - ARRAYS //

let arrayA = ['Per', 'Pål', 'Espens', 'Martha'];

// A JavaScript array is a special variable, which can hold more than one value //

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
