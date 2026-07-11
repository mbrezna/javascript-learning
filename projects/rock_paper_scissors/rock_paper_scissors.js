let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  //computer randomly selects a move
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  })

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  })

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  })

//KEY-PRESSING SHORTCUTS
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors')
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    displayConfirmationMessage();
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "Computer wins.";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "It's a tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "It's a tie.";
    } else if (computerMove === "scissors") {
      result = "Computer wins.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "It's a tie.";
    } else if (computerMove === "paper") {
      result = "Computer wins.";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  }

  //updates scoreboard
  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "Computer wins.") {
    score.losses += 1;
  } else if (result === "It's a tie.") {
    score.ties += 1;
  }

  //LOCAL STORAGE
  //saved an item
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-moves')
    .innerHTML = `You <img class="move-icon" src="../../images/${playerMove}-emoji.png">
    <img class="move-icon" src="../../images/${computerMove}-emoji.png">Computer`;

  document.querySelector('.js-result')
    .innerHTML = `${result}`;
}

function updateScoreElement() {
  document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//SCORE RESET
const resetBtnElem = document.querySelector('.js-reset-button');
//confirmation message
resetBtnElem.addEventListener('click', () => {
  displayConfirmationMessage();
});

function displayConfirmationMessage() {
  const confirmationMeassageElem = document.querySelector('.js-confirmation-message');
  confirmationMeassageElem.innerHTML = `Are you sure you want to reset the score?
    <button class="js-yes-confirm-btn yes-confirmation-button">Yes</button>
    <button class="js-no-confirm-btn no-confirmation-button">No</button>`;
  const yesConfirmBtnElem = document.querySelector('.js-yes-confirm-btn');
  yesConfirmBtnElem.addEventListener('click', () => {
    resetScore();
    confirmationMeassageElem.innerHTML = '';
  });
  const noConfirmBtnElem = document.querySelector('.js-no-confirm-btn');
  noConfirmBtnElem.addEventListener('click', () => {
    confirmationMeassageElem.innerHTML = '';
  })
}
  
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  updateScoreElement();

  document.querySelector('.js-moves')
    .innerHTML = '';
  document.querySelector('.js-result')
    .innerHTML = 'Pick your move';
}

//AUTO-PLAYING
let isAutoPlaying = false;
let intervalID;

const autoPlayBtnElem = document.querySelector('.js-auto-play-button');
autoPlayBtnElem.addEventListener('click', autoPlay);

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 500);
    isAutoPlaying = true;

    //button change
    autoPlayBtnElem.innerHTML = 'Stop playing';
    autoPlayBtnElem.classList.add('stop-playing-button');

  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;

    autoPlayBtnElem.innerHTML = 'Auto Play';
    autoPlayBtnElem.classList.remove('stop-playing-button');
  }
}