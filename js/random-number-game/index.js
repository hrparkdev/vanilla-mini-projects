const form = document.querySelector("#number-form");
const rangeInput = document.querySelector("#range-input");
const guessInput = document.querySelector("#guess-input");
const chose = document.querySelector("#chose");
const result = document.querySelector("#result");

function onNumberGuessSubmit(event) {
  event.preventDefault();
  const rangeNum = parseInt(rangeInput.value);
  const guessNum = parseInt(guessInput.value);
  const randomNum = Math.ceil(Math.random() * rangeNum);
  chose.innerText = `You chose: ${guessNum}, the machine chose: ${randomNum}.`;
  if (guessNum === randomNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

form.addEventListener("submit", onNumberGuessSubmit);