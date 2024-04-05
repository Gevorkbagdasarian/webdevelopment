const symbols = ['🍎', '🍌', '🍒', '🥑', '🍉', '🥭', '🍓', '🍋'];
const gridSize = 4;
const board = document.getElementById('board');
let firstCard = null;
let secondCard = null;
let isProcessing = false; // Flag to prevent clicking during processing

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const shuffledSymbols = shuffle([...symbols, ...symbols]);
    shuffledSymbols.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', handleCardClick);
        board.appendChild(card);
    });
}

function handleCardClick() {
    if (isProcessing) return; // Ignore clicks during processing
    if (this === firstCard) return; // Ignore clicking the same card twice

    if (!firstCard) {
        firstCard = this;
        showCard(firstCard);
    } else if (!secondCard) {
        secondCard = this;
        showCard(secondCard);

        if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
            setTimeout(() => {
                disableCards(firstCard, secondCard);
                resetCards();
            }, 1000);
        } else {
            isProcessing = true; // Set processing flag
            setTimeout(() => {
                hideCards(firstCard, secondCard);
                resetCards();
                isProcessing = false; // Reset processing flag
            }, 1000);
        }
    }
}

function showCard(card) {
    card.innerText = card.dataset.symbol;
    card.removeEventListener('click', handleCardClick);
}

function hideCards(card1, card2) {
    card1.innerText = '';
    card2.innerText = '';
    // Reattach event listeners after hiding cards
    board.querySelectorAll('.card').forEach(card => {
        if (card.innerText === '') {
            card.addEventListener('click', handleCardClick);
        }
    });
}

function disableCards(card1, card2) {
    card1.removeEventListener('click', handleCardClick);
    card2.removeEventListener('click', handleCardClick);
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

createBoard();
window.addEventListener("load", initializeGame);
