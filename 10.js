function wordCounter(input) {
    let result = {};
    let arr = input.split(' ');
    for (let word of arr) {
        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    console.log(result);;
}
wordCounter("Programming is a creative art. Its about expressing your ideas in a way that a computer can understand");