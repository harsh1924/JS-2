let maximumAmount = 0;
let minimumAmount = 10000000000;
let products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];
function minmax() {
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > maximumAmount) {
            maximumAmount = products[i].price;
            maximumAmountProduct = products[i].name;
        }
        if (products[i].price < minimumAmount) {
            minimumAmount = products[i].price;
            minimumAmountProduct = products[i].name;
        }
    }
    console.log(`The Product with Maximum Amount is ${maximumAmountProduct} which is priced at ${maximumAmount}`);
    console.log(`The Product with Minimum Amount is ${minimumAmountProduct} which is priced at ${minimumAmount}`);
};
minmax();