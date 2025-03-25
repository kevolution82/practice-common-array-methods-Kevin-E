// Task 1: Create the Order System
let orders = [
    ["Latte", "Tea", "Espresso"],          // Drinks
    ["Croissant", "Muffin", "Bagel"]       // Pastries
];

// Task 2: Log number of drinks and pastries
console.log("Number of drink orders:", orders[0].length);
console.log("Number of pastry orders:", orders[1].length);

// Task 3: Access orders with hardcoded bracket notation
console.log("\nTask 3 - Hardcoded access:");
console.log("First drink:", orders[0][0]);           // Latte
console.log("Last pastry:", orders[1][2]);           // Bagel
console.log("Second drink:", orders[0][1]);          // Tea

// Task 4: Access orders dynamically using variables
console.log("\nTask 4 - Dynamic access with variables:");
let categoryIndex = 1; // Pastries
let itemIndex = 0;     // First item
console.log("Selected order:", orders[categoryIndex][itemIndex]); // Croissant

// Task 5: Loop through drinks and log each item
console.log("\nTask 5 - Loop through drinks:");
for (let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
}

// Task 6: Add a new drink and track length
orders[0].push("Flat White");
console.log("\nTask 6 - After adding new drink:");
console.log("Updated drinks:", orders[0]);
console.log("Updated number of drinks:", orders[0].length);

// Dynamic access using variables
let drinkIndex = orders[0].length - 1;
let selectedDrink = orders[0][drinkIndex];
console.log("Last drink ordered (dynamically accessed):", selectedDrink);
