const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

homeScore.textContent = homeCount;
guestScore.textContent = guestCount;

function incrementHome(incValue) {
    homeCount += incValue;
    homeScore.textContent = homeCount;
}

function incrementGuest(incValue) {
    guestCount += incValue;
    guestScore.textContent = guestCount;
}

function clearScores() {
    guestCount = 0;
    homeCount = 0;

    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
}