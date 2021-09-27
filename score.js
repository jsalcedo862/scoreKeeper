const btnOne = document.querySelector('#pone');
const btnTwo = document.querySelector('#ptwo');
const resetbtn = document.querySelector('#reset');
const h1 = document.querySelector('h1');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let ptsOne = 0;
let ptsTwo = 0;
let winningScore = 5;
let isGameOver = false;

btnOne.addEventListener('click', function () {
    if (!isGameOver) {
        ptsOne++;
        if (ptsOne === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = ptsOne;
    }
})

btnTwo.addEventListener('click', function () {
    if (!isGameOver) {
        ptsTwo++;
        if (ptsTwo === winningScore) {
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
        }
        p2Display.textContent = ptsTwo;
    }
})

resetbtn.addEventListener('click', reset);

// Add play to feature
const winningScoreSelect = document.querySelector('#finalscore');

function reset() {
    isGameOver = false;
    ptsOne = 0;
    ptsTwo = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

