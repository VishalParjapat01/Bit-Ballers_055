import { WelcomeMessage } from './helpers.mjs';
// To display the welcome message

WelcomeMessage() 


class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }

    // Method to add a new product
    static addProduct(products, newProduct) {
        products.push(newProduct);
        console.log(`Product added: ${newProduct.name}`);
    }

    // Method to update product details
    static updateProduct(products, id, updatedDetails) {
        const product = products.find(prod => prod.id === id);
        if (product) {
            Object.assign(product, updatedDetails);
            console.log(`Product updated: ${product.name}`);
        } else {
            console.log('Product not found');
        }
    }

    // Method to remove a product
    static removeProduct(products, id) {
        const updatedProducts = products.filter(prod => prod.id !== id);
        console.log(`Product with ID ${id} removed`);
        return updatedProducts;
    }

    // Method to search products by category
    static searchByCategory(products, category) {
        return products.filter(prod => prod.category === category);
    }

    // Method to search products by price range
    static searchByPriceRange(products, minPrice, maxPrice) {
        return products.filter(prod => prod.price >= minPrice && prod.price <= maxPrice);
    }

    // Method to manage inventory and restock
    static manageInventory(products, threshold) {
        return products.map(prod => {
            if (prod.stock < threshold) {
                console.log(`Product ${prod.name} needs restocking`);
                prod.stock += 10; // example restocking logic
            }
            return prod;
        });
    }

    // Method to calculate total inventory value
    static calculateInventoryValue(products) {
        return products.reduce((total, prod) => total + (prod.price * prod.stock), 0);
    }
}

export default Product;


