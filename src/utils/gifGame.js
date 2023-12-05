const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function showGif() {
  const button = document.querySelector("#game-button");

  // Create video element
  const video = document.createElement("video");
  video.setAttribute("loop", true);
  video.setAttribute("autoplay", true);
  video.setAttribute("muted", true);
  video.setAttribute("playsinline", true);

  // Apply any additional styles you need
  video.style.maxWidth = "100%";
  video.style.height = "auto";

  // Create source element
  const source = document.createElement("source");
  source.src = require("../assets/img/ripper-snowboarder.mp4"); // Keep the gif file name
  source.type = "video/mp4"; // Set the correct MIME type for a video file

  // Append source to video
  video.appendChild(source);

  // Set alt text equivalent for video (for accessibility, although not standard)
  video.setAttribute("title", "Correct");

  // Replace button with video
  button.replaceWith(video);
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
