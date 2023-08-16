function calculateTotalCartValue(...numbers) {
    let sum = numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    console.log(`The Total Cart Value is ${sum}`);;
}
calculateTotalCartValue(120, 10, 21, 308);