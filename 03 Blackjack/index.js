let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
// let sumEl = document.querySelector('#sum-el')
let messageEl = document.getElementById('message-el')
let player = {
    name: 'Alireza',
    chips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) { 
        randomNum = 10
    } else if (randomNum === 1) {
        randomNum = 11
    }
    return randomNum
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }

    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}