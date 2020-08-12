// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");
body = document.getElementsByTagName("body");

//   Assigin UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener

// EVENT DELEGATION is used, since play-again is dynamically added class, we cannot directly add event listener to it; listen to parent element and target it

game.addEventListener("mousedown", function (
  e
  // mousedown is used instead of click event, because both mouse up and mouse down register as click event, because of this when we click submit after the game is over, the mouse down is regarded first click and mouse up as second, and the page reloads as soon as we click submit, without even showing play again option
) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  //   console.log(guess);

  // entered value is string by default which is shown in console as white color numbers, when parsed to int, the color changes to purple

  //   Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number Betwwen ${min} and ${max} !`, "red");
  }

  //   Check if won
  else if (guess === winningNum) {
    //   Game over - won

    gameOver(true, `${guess} is true, You won!!`);

    // //   Disable Input
    // guessInput.disabled = true;
    // // change border color
    // guessInput.style.borderColor = "green";
    // //set message
    // setMessage(`${guess} is true, You won!!`, "green");
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //   Game over -lost

      gameOver(
        false,
        `Game Over, You lost!! The correct answer was ${winningNum}.`
      );
      //   Disable Input
      //   guessInput.disabled = true;
      //   // change border color
      //   guessInput.style.borderColor = "red";
      //   //set message
      //   setMessage(
      //     `Game Over, You lost!! The correct answer was ${winningNum}.`,
      //     "red"
      //   );
    } else {
      //   game continues - answer wrong
      // change border color
      guessInput.style.borderColor = "red";

      //clear input
      guessInput.value = "";

      //notify user that answer is wrong
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

// Game over
// made this function to make code more effective and less redundant
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //   Disable Input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  //set message
  setMessage(msg, color);

  //Play Again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
  //appending class name instead of adding
}

// random number for win num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
