// This imports prompt sync for user input in the terminal
const prompt = require('prompt-sync')();

// Taking inputs from the user
const startingMoney = parseFloat(prompt("How much Taka you took to market: "));
const orangePrice = parseFloat(prompt("Price of 1 kg of oranges and 1 kg of Oranges: "));
const applePrice = parseFloat(prompt("Price of 1 kg of oranges and 1 kg of apples: "));

// Calculate the total cost
let totalCost = orangePrice + applePrice;

// shopkeeper should return thsi much money
let returnMoney = startingMoney - totalCost;

// Print the result
console.log("Shopkeeper will return: " + returnMoney);
