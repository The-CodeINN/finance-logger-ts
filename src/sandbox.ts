let character: string;

character = 'name';

let num: number;
num = 122;

// arrays
let alphabets: string[] = [];
alphabets.push("a")
alphabets.push("b")

// mixed array
let hexadecimal: (string | number)[] = [];
hexadecimal.push("a")
hexadecimal.push(1)

let mine: string | number;
mine = "a"
mine = 1

// objects
let person: object;
person = {
  name: 'David',
  age: 40 ,
  profession: 'developer',
  marital_status: 'single'
}

// object with specific properties
let person2: {
  name: string,
  age: number,
  profession: string,
  marital_status: string
}
person2 = {
  name: 'David',
  age: 40,
  profession: 'developer',
  marital_status: 'single'
}

//  any type
let age: any = 25;
let mixed: any[] = [];
mixed.push(1)
mixed.push("a")

// Function
let greet: Function;
greet = () => {
  console.log('hello world')
}

// Function with specific type
let greet2: (a: string, b: string) => void;
greet2 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greetU = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

// Function Signatures
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action.trim() === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

let logDetail: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

logDetail = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetail({ name: 'David', age: 40 });

// 