const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function showGif() {
    const button = document.getElementById('game-button');
    const gif = document.createElement("img");
    gif.src = require("../assets/img/ripper-snowboarder.gif");
    gif.alt = "Correct";
    button.parentNode.replaceChild(gif, button);
};

function gifGame() {
    let guess;
    let numTries = 0;
    let correct = false;
    do {
        guess = prompt(`which one is my favorite sport?\n\n${favoriteSport.join(", ")}`);
        numTries += 1;
        if (guess === null) {
            alert("game aborted");
            return
        }
        correct = checkGuess(guess.toLowerCase().trim(), numTries);
    } while (!correct);
}

function checkGuess(guess, numTries) {
    let correct = false;
    if (!favoriteSport.includes(guess)) {
        alert("Your guess is not one of the choices.")
    } else if (guess === "baseball") {
        alert("Incorrect guess again.");
    } else if (guess === "football") {
        alert("Not even close dummy.");
    } else if (guess === "skateboarding") {
        alert("wrong guess again.");
    } else {
        correct = true;
        showGif();
        const message = numTries === 1 ? `Winner! It only took you 1 try!` : `Winner! It only took you ${numTries} tries!`;
        alert(message);
    }
    return correct;
}

export default gifGame;
