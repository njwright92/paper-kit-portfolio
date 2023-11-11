const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function showGif() {
  const button = document.querySelector("#game-button");
  const gif = document.createElement("img");
  gif.src = require("../assets/img/ripper-snowboarder.gif");
  gif.alt = "Correct";
  button.replaceWith(gif);
}

function gifGame() {
  let guess;
  let numTries = 0;
  let correct = false;
  do {
    guess = prompt(
      `which one is my favorite sport?\n\n${favoriteSport.join(", ")}`
    );
    numTries += 1;
    if (guess === null) {
      alert("game aborted");
      return;
    }
    correct = checkGuess(guess.toLowerCase().trim(), numTries);
  } while (!correct);
}

function checkGuess(guess, numTries) {
  let correct = false;
  switch (guess) {
    case "baseball":
      alert("Incorrect guess again.");
      break;
    case "football":
      alert("Not even close dummy.");
      break;
    case "skateboarding":
      alert("wrong guess again.");
      break;
    default:
      correct = true;
      showGif();
      const message =
        numTries === 1
          ? `Winner! It only took you 1 try!`
          : `Winner! It only took you ${numTries} tries!`;
      alert(message);
      break;
  }
  return correct;
}

export default gifGame;
