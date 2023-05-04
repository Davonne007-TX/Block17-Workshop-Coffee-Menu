//Connecting coffee_data.js to this file index.js

const coffeeMenu = require("./coffee_data.js");
console.log(coffeeMenu);

//Console.table Coffee Menu to check
console.table(coffeeMenu);

//Print an array of all the drinks on the menu
const allDrinks = coffeeMenu.map(drink => drink.name);


//Print an array of drinks that cost 5 and under
const cheaperDrinks = coffeeMenu.filter(drink => drink.price <= 5);
const drinkNameAndPrices = cheaperDrinks.map(drink => {
    return { name: drink.name, price: drink.price };
});


//Print an array of drinks that are priced at an even number
const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);


//Print the total if you were to order one of every drink
const totalPrice = coffeeMenu.reduce((total, drink) => {
    return total + drink.price;
}, 0);


// Print an array with all the drinks that are seasonal
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal).map(drink => drink.name);


//Print all the seasonal drinks with the words "with imported beans" after the item name
  //For example: "affogato with imported beans"
const importedBeans = coffeeMenu.filter(drink => drink.seasonal);

importedBeans.forEach(drink => {
    console.log(drink.name + " with imported beans!");
});