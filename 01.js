let arr = ["Harsh", "Piyush", "Luffy", "Ayush"];
function isUserPresent(name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == name) {
            console.log(`Yes, ${name} is a valid user`);
            break;
        }
        else {
            console.log(`No! ${name} is not a valid user`);
            break;
        }
    }
}

isUserPresent("Harsh");