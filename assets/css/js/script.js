const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices =  document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "scissors"
  }
  if (randomNumber === 3) {
    computerChoice = "paper"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!"
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You win!"
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You lost!"
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You win!"
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You lose!"
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You win!"
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You lose!"
  }
  resultDisplay.innerHTML = result
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}