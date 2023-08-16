function calculateRemainingDays(eventDate) {
    let currentDate = new Date();
    let eventDate = new Date(eventDate);
    let timeDifference = eventDate - currentDate;
    let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    console.log(daysRemaining);;
}
let eventDate = '2023-09-31'
calculateRemainingDays(eventDate);