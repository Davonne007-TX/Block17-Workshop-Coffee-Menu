//Block 17 Workshop: Coffee Menu


// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas separating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false
    },
    {
        name: "latte",
        price: 5,
        seasonal: false
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false
    },
    {
        name: "americano",
        price: 7,
        seasonal: false
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true
    }
];

//Connect the coffee_data.js file to the index.js file
module.exports = coffeeMenu

//Console.table Coffee Menu to check
console.table(coffeeMenu);

//Print an array of all the drinks on the menu
const allDrinks = coffeeMenu.map(drink => drink.name);
console.log(allDrinks);


//Print an array of drinks that cost 5 and under
const cheaperDrinks = coffeeMenu.filter(drink => drink.price <= 5);
const drinkNameAndPrices = cheaperDrinks.map(drink => {
    return { name: drink.name, price: drink.price };
});

console.log(drinkNameAndPrices);


//Print an array of drinks that are priced at an even number
const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);


//Print the total if you were to order one of every drink
const totalPrice = coffeeMenu.reduce((total, drink) => {
    return total + drink.price;
}, 0);

console.log(totalPrice);


// Print an array with all the drinks that are seasonal
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal).map(drink => drink.name);
console.log(seasonalDrinks);


//Print all the seasonal drinks with the words "with imported beans" after the item name
  //For example: "affogato with imported beans"
const importedBeans = coffeeMenu.filter(drink => drink.seasonal);

importedBeans.forEach(drink => {
    console.log(drink.name + " with imported beans!");
});




