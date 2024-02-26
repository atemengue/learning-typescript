const apples = 5;
const speed = 'fast';
const hasName = true;

const nothingMuch = null;
const nothing = undefined;

// build in objects

const now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

class Car {}

const car: Car = new Car();

//  Object literal

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const json = '{"x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
