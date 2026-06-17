//scoreboard
        //this takes an object from local storage OR generates new object (for first game)
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

      //compares moves to get result
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
          .innerHTML = `You <img class="move-icon" src="../images/${playerMove}-emoji.png">
          <img class="move-icon" src="../images/${computerMove}-emoji.png">Computer`;

        document.querySelector('.js-result')
          .innerHTML = `${result}`;
      }

      function updateScoreElement() {
        document.querySelector(".js-score")
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
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