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