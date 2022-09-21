// Adding constants and logic.
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  const playerText = document.querySelector("#player-choice");
  const computerText = document.querySelector("#computer-choice");
  let playerC;


  // Connects the options with the buttons, also loads them to player options and computer options.
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const spokBtn = document.querySelector('.spock');
    const lizardrBtn = document.querySelector('.lizard');
    const playerOptions = [rockBtn,paperBtn,scissorBtn, spokBtn,lizardrBtn];
    const computerOptions = ['rock','paper','scissors','spock','lizard'];
    
    // Function to start playing and, random computer choice form 0 to 4 wich is 5 choices.
    // Also to show each choice on each move 
    playerOptions.forEach(option => {
      option.addEventListener('click',function(){

        playerC = option.textContent;
        playerText.textContent = `Player: ${playerC}`;

      // Increments the moves so that there are 15 in total
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${15-moves}`;
        
      // This gives a random number to the computer and floors it to make a choice
        const choiceNumber = Math.floor(Math.random()*5);
        const computerChoice = computerOptions[choiceNumber];
        
        computerText.textContent = `Computor: ${computerChoice}`;

        // Function to check who wins
        winner(this.innerText,computerChoice);
        
        // Calling gameover function after 15 moves
        if(moves == 15){
          gameOver(playerOptions,movesLeft);
        }
      });
    });
    
  };

  // Function to decide winner
  const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.player-count');
    const computerScoreBoard = document.querySelector('.computer-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

  // Checks the rock option

    if(player === computer){
      result.textContent = 'Draw!';
    }
    else if(player == 'rock'){
      if(computer == 'paper' || computer == 'spock'){
        result.textContent = 'Computer wins!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;

      }else{
        result.textContent = 'Player wins!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }

  // Checks the scissors option

    else if(player == 'scissors'){
      if(computer == 'rock' || computer == 'spock'){
        result.textContent = 'Computer wins!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      }else{
        result.textContent = 'Player wins!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }

  // Checks the paper option

    else if(player == 'paper'){
      if(computer == 'scissors' || computer == 'lizard'){
        result.textContent = 'Computer wins!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      }else{
        result.textContent = 'Player wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }

  // Checks the spock option

    else if(player == 'spock'){
      if(computer == 'paper' || computer == 'lizard'){
        result.textContent = 'Computer wins!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      }else{
        result.textContent = 'Player wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }

  // Checks the lizard option

    else if(player == 'lizard'){
      if(computer == 'scissors' || computer == 'rock'){
        result.textContent = 'Computer wins!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      }else{
        result.textContent = 'Player wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Function to run when game is over and hide options 
  const gameOver = (playerOptions,movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
      option.style.display = 'none';
    });

    // Declearing the winner and also adding some style to the declaration
    chooseMove.innerText = 'Game Over!!';
    movesLeft.style.display = 'none';

    // In case the player won
    if(playerScore > computerScore){
      result.style.fontSize = '2rem';
      result.innerText = 'You Won The Game';
      result.style.color = '#308D46';
    }
    // In case the Computer won
    else if(playerScore < computerScore){
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game';
      result.style.color = 'red';
    }
    // In case the game is a draw 
    else{
      result.style.fontSize = '2rem';
      result.innerText = 'Its a Draw!';
      result.style.color = 'grey';
    }
    // Calling the Restard button 
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click',() => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  playGame();

};

// Calling the game function
game();
  