import Product from './Product.mjs';

// Initialize an empty array to hold products
let products = [];

// Add new products
Product.addProduct(products, new Product(1, "Laptop", "Electronics", 1000, 50));
Product.addProduct(products, new Product(2, "Smartphone", "Electronics", 500, 100));
Product.addProduct(products, new Product(3, "Jeans", "Clothing", 40, 200));
console.log("Products after adding:",products);


// Update a product's details
Product.updateProduct(products, 1, { price: 900, stock: 45 });
console.log("\nProducts after updating the Laptop:",products);



// Remove a product
console.log("after removing product")
products = Product.removeProduct(products, 1);

// Search for products by category
const electronics = Product.searchByCategory(products, "Electronics");
console.log("Electronics:", electronics);

// Search for products by price range
const affordableProducts = Product.searchByPriceRange(products, 30, 100);
console.log("Affordable Products:", affordableProducts);

// Manage inventory
const updatedInventory = Product.manageInventory(products, 50);
console.log("Updated Inventory:", updatedInventory);

// Calculate total inventory value
const totalValue = Product.calculateInventoryValue(products);
console.log("Total Inventory Value:", totalValue);




