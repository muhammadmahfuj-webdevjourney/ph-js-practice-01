// const startingMoney = 500;
// let orangesPrice = 100;
// let applesPrice = 300;

// let totalCost = orangesPrice + applesPrice;

// let returnMoney = startingMoney - totalCost
// console.log(returnMoney);


// const prompt = require('prompt-sync')();
// this will require to install the prompt-sync dependency | npm install prompt-sync

// const startingMoney = prompt('Enter your starting money: ');
// const orangesPrice = prompt("Enter the cost of 1 kg oranges");
// const applesPrice = prompt("Enter the cost of 1 kg apples");

// const fruitPrice = orangesPrice + applesPrice;

// let returnMoney = fruitPrice - startingMoney;

// console.log(returnMoney);



// // Prompt the user for input
// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });


// // Start by asking for the amount of money the user has
// rl.question('Enter the amount of money you have: ', (startingMoney) => {
//   // Ask for the cost of 1 kg of oranges
//   rl.question('Enter the cost of 1 kg of oranges: ', (orangesPrice) => {
//     // Ask for the cost of 1 kg of apples
//     rl.question('Enter the cost of 1 kg of apples: ', (applesPrice) => {
//       // Convert the inputs to numbers
//       const money = parseFloat(startingMoney);
//       const orangeCost = parseFloat(orangesPrice);
//       const appleCost = parseFloat(applesPrice);

//       // Calculate the total cost of oranges and apples
//       const totalCost = orangeCost + appleCost;

//       // Calculate the amount to be returned
//       const returnMoney = money - totalCost;

//       // Print the result
//       console.log(`The shopkeeper will return: ${returnMoney}`);

//       // Close the readline interface
//       rl.close();
//     });
//   });
// });



// const redline = require('readline');

// const rl = redline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });


// rl.question('Enter the amount of money you have: ', (startingMoney)=> {
//    rl.question('Enter the cost of 1 kg of oranges:', (orangesPrice) =>{
//       rl.question('Enter the cost of 1 kg of apples:', (applesPrice) =>{

//          const money = parseFloat(startingMoney);
//          const orangeCost = parseFloat(orangesPrice);
//          const appleCost = parseFloat(applesPrice);
         
//          const totalCost = orangeCost + appleCost;

//          const returnMoney = money - totalCost;

//          console.log(`The shopkeeper will return: ${returnMoney}`);

//          rl.close();
//       })
//    })
// });

// const num1 = 10;
// const num2 = 20;
// let result;

// if (num1 > num2){
//    result = num1*2;
// }
// else{
//    result = num1+num2;
// }

// console.log(result);

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.length);