const startGameBtn = document.getElementById("start_btn");
const newCardBtn = document.getElementById("newcard-btn");
const p1 = document.getElementById("p1");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector(".card-el");
let firstCard = Math.floor(Math.random() * 10);
let sum = firstCard;
let hasBlackJack = false;
let isAlive = true;
let message = [
  "Do you want to draw a new card?",
  "Woohoo! You got BlackJack.",
  "You are out! Press 'START GAME' to play again.",
];
let allCards = [firstCard];

const name=document.querySelector("#name");
const chips=document.querySelector("#chips");
let player= {
  chipsAssigned: 145,
  "name Assigned": ["Tj", "Martin", "Jane", "Mike"]
}

name.innerText= "Name: " + player["name Assigned"][Math.floor(Math.random() * player["name Assigned"].length)];
chips.innerText= "$ " + player.chipsAssigned; 

startGameBtn.onclick = startGame;
newCardBtn.onclick = newCard;

function startGame() {
  sum = 0;
  allCards.length = 0;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: " + allCards;
  if (sum < 21) {
    p1.innerText = message[0];
  } else if (sum === 21) {
    p1.innerText = message[1];
    hasBlackJack = true;
    startGame();
  } else {
    p1.innerText = message[2];
    startGame();
    isAlive = false;
  }
}

function newCard() {
  specialCards();
}

function specialCards() {
  let card = Math.floor(Math.random() * 14);
  function pusher() {
    sum += card;
    if (sum > 21) {
      cardEl.textContent = "XXXXX";
      sumEl.textContent = "Sum: " + sum;
      p1.innerText = message[2];
    } else {
      renderGame();
    }
  }
  if (card === 1) {
    card = "A";
    allCards.push(card);
    card = 11;
    pusher();
  } else if (card > 10) {
    if (card === 11) {
      card = "K";
      allCards.push(card);
    } else if (card === 12) {
      card = "J";
      allCards.push(card);
    } else {
      card = "Q";
      allCards.push(card);
    }
    card = 10;
    pusher();
  } else {
    card = card;
    allCards.push(card);
    pusher();
  }
}

/*
// example 2:
let age = 22;
if (age >= 21) {
  console.log("Welcome");
} else {
  console.log("You can't enter the club");
}

console.log(hasBlackJack);
// example 3:
let years = 100;

if (age === 100) {
  console.log("Here is your birthday card form the King");
} else if (age > 100) {
  console.log("Not eligible, you have already gotten one.");
} else {
  console.log("Not eligible");
}
*/
