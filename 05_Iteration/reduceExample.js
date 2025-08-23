const ShoppingCart = [
  { item: "Book", price: 200, quantity: 2 },  
    { item: "Pen", price: 10, quantity: 5 },
    { item: "Notebook", price: 50, quantity: 3 },
];
const totalAmount = ShoppingCart.reduce((total, product) => total + product.price, 0);
console.log(totalAmount); // Output: 260