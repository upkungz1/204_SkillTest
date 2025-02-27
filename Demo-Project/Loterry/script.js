// สร้างเลขหวย 6 หลักแบบสุ่ม
const winningNumber = generateWinningNumber();

function generateWinningNumber() {
    let number = '';
    for (let i = 0; i < 6; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultElement = document.getElementById('result');

    if (userGuess.length !== 6 || isNaN(userGuess)) {
        resultElement.textContent = 'Please enter a valid 6-digit number.';
        return;
    }

    if (userGuess === winningNumber) {
        resultElement.textContent = `Congratulations! You guessed the winning number: ${winningNumber}`;
    } else {
        resultElement.textContent = `Sorry, your guess is incorrect. The winning number is: ${winningNumber}`;
    }
}