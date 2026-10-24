const cart = [
    {name: "Jeans", price: 40, quantity: 2},
    {name: "Shirt", price: 30, quantity: 1},
    {name: "Shoes", price: 80, quantity: 1},
    {name: "T-shirt", price: 10, quantity: 4}
];

const subTotal = cart
  .map(n => n.price * n.quantity)
  .reduce((sum, price) => sum + price, 0);

cart.sort((a, b) => b.price - a.price);
console.log ("Store Bill\n");
console.log (`Name      |   Price    |  Quantity`);
cart.forEach(item => {
    console.log (`${item.name.padEnd(8)}  |   ${item.price.toFixed(2)}    |     ${item.quantity}`); 
});


console.log(`\nThe Total Price is : ${subTotal.toFixed(2)}`);
if(subTotal > 100) {
    const total = subTotal * .9;
    console.log (`With the added Discount of 10% : ${total.toFixed(2)}`);
}
const largeQuantity = cart.filter(n => n.quantity > 1);
console.log ("\nBig quantities of Items in your order:- ")
largeQuantity.forEach(item => {
    console.log (`${item.quantity} ${item.name.padEnd(8)} `); 
});