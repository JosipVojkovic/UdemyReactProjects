export {};
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parametars

// Primitives

let age: number;
age = 12;

let name: string;
name = "Max";

let isInstructor: boolean = false;
isInstructor = true;

// More complex types

let hobbies: string[]; // this means that we expect to have an array of strings.

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person; // this means that we expect an object with this type of values

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true
// }

let people: Person[]; // this means that we expect an array of this type of objects

// Type inference

let course: string | number = "React - The complete guide";
course = 12345;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
stringArray[0].split("");
