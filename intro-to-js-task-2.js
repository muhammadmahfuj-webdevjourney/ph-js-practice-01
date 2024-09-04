// This imports prompt sync for user input in the terminal
const prompt = require('prompt-sync')();

const mathematics = parseFloat(prompt("Mathematics Marks: "));
const biology = parseFloat(prompt("Biology Marks: "));
const chemistry = parseFloat(prompt("Chemistry Marks: "));
const physics = parseFloat(prompt("Physics Marks: "));
const bangla = parseFloat(prompt("Bangla Marks: "));

let totalMarks = mathematics + biology + chemistry + physics + bangla;
let avgMarks = totalMarks/5;

console.log("The Avarage Mark is: ", avgMarks.toFixed(2));