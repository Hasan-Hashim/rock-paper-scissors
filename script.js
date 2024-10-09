let playerThrow = '';
let computerThrow = '';
let wins = 0;
let losses = 0;
let ties = 0;

function playerChoice(choice) {
    console.log('Player clicked on:', choice); // Log player's choice
    playerThrow = choice;

    highlightPlayerChoice(choice);
    startComputerTurn();
}

function highlightPlayerChoice(choice) {
    console.log('Highlighting player choice:', choice); // Log highlight action
    document.querySelectorAll('.choice').forEach(img => {
        img.style.border = '3px solid transparent';
    });
    document.getElementById(choice).style.border = '3px solid red';
}

function startComputerTurn() {
    const choices = ['rock', 'paper', 'scissors'];
    let counter = 0;
    console.log('Computer is starting its turn...');

    const intervalId = setInterval(() => {
        counter++;
        const randomChoice = choices[Math.floor(Math.random() * 3)];

        // Set the computer's throw image to a random choice
        document.getElementById('computer-choice').src = randomChoice + '.png';

        if (counter >= 6) { // Stop shuffling after 3 seconds (500ms * 6 = 3000ms)
            clearInterval(intervalId);
            computerThrow = randomChoice;
            console.log('Computer chose:', randomChoice); // Log final computer choice
            determineWinner();
        }
    }, 500); 
}

function determineWinner() {
    let result = '';
    console.log('Player throw:', playerThrow, 'Computer throw:', computerThrow); // Log throws

    if (playerThrow === computerThrow) {
        result = "It's a tie!";
        ties++;
    } else if (
        (playerThrow === 'rock' && computerThrow === 'scissors') ||
        (playerThrow === 'paper' && computerThrow === 'rock') ||
        (playerThrow === 'scissors' && computerThrow === 'paper')
    ) {
        result = 'You win!';
        wins++;
    } else {
        result = 'Computer wins!';
        losses++;
    }

    updateScoreboard();
    document.getElementById('result').innerText = `Results: ${result}`;
}

function updateScoreboard() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}

function resetGame() {
    console.log('Game reset.');
    playerThrow = '';
    computerThrow = '';
    document.querySelectorAll('.choice').forEach(img => {
        img.style.border = '3px solid transparent';
    });
    document.getElementById('computer-choice').src = 'question-mark.png';
    document.getElementById('result').innerText = 'Results: ';
}
