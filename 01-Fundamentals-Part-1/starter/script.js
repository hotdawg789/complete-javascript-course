// Linking a JavaScript File
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName)
console.log(firstName)
console.log(firstName)

let jonas_matilda = 'JM';
let $function = 27;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

//
//section2 vid 12 data types
//
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


//
//section2 vid 13 let,const,var
//
let age = 30;
age = 31;

const birthYear = 1991;


//
// section2 vid 14 Basic operators
//

// math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firtName = 'Jonas';
const lastName = 'Dummy';
console.log(firtName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);


//
// section 2 vid 15 operator precedence
//
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);


//
// section 2 vid 17 string and template literals
//

const firstName = 'Crease';
const job = 'teacher';
const birthYear = 1992;
const year = 2037;

const crease = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(crease)

const creaseNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(creaseNew)

console.log(`this
is a
multi
line string`)


//
// section 2 vid 18 taking decisions
//

const age = 15;

if (age >= 18) {
  console.log('Sarah finna start driving 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait ${yearsLeft} years 😊`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)

//
// section 2 vid 20 Type Conversion and Coercion
//

//type conversion
const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18)

console.log(String(23))
// type coercion
console.log('I am ' + 23 + ' years old')


//
// section 2 vid 21 Truthy and falsy
//

// 5 falsy vlaues: 0, '', undefined, null NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('bingo'));
console.log(Boolean(NaN));

let money = 500;

if (money) {
  console.log('Dont spend it all ')
} else {
  console.log('get a job')
}

let height;
if (height) {
  console.log('defined')
} else {
  console.log('NOT defined')
}


//
// section 2 vid 22 Equality Operators: == vs ===
//

const age = '18';
if (age === 18) console.log('you an adult (strict)');
if (age == 18) console.log(' youse an adult (loose)');

const favorite = Number(prompt('what is your fave number?'));
console.log(favorite);
console.log(typeof (favorite));

if (favorite === 23) {
  console.log('23 an amazing age')
} else if (favorite === 7) {
  console.log('7 a cool num')
} else {
  console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('why not 23')


//
// section 2 vid 26 The switch statement
//

const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('second line in monday go to meetup')
    break;
  case 'tuesday':
    console.log('Theory videos prep');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('not valid day');
}

*/

//
// section 2 vid 28 Conditional operator
//

const age = 23;
// age >= 18 ? console.log('i like to smoke 🚬') : console.log('no smoke');

const drink = age >= 18 ? 'wine🍷🍷' : 'water 💧';
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'wine🍷🍷' : 'water 💧'}`)
