"use strict";
let character;
character = 'name';
let num;
num = 122;
// arrays
let alphabets = [];
alphabets.push("a");
alphabets.push("b");
// mixed array
let hexadecimal = [];
hexadecimal.push("a");
hexadecimal.push(1);
let mine;
mine = "a";
mine = 1;
// objects
let person;
person = {
    name: 'David',
    age: 40,
    profession: 'developer',
    marital_status: 'single'
};
// object with specific properties
let person2;
person2 = {
    name: 'David',
    age: 40,
    profession: 'developer',
    marital_status: 'single'
};
//  any type
let age = 25;
let mixed = [];
mixed.push(1);
mixed.push("a");
// Function
let greet;
greet = () => {
    console.log('hello world');
};
// Function with specific type
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetU = (user) => {
    console.log(`${user.name} says hello`);
};
// Function Signatures
let calc;
calc = (numOne, numTwo, action) => {
    if (action.trim() === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetail({ name: 'David', age: 40 });
