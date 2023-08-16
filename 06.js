let productDetails = {
    Name: "Apple 2020 Macbook Air Laptop",
    Price: 82000,
    Color: "Gray",
    HardDisk: "256 GB",
}
console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}