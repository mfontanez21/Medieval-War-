// Variables \\
let playerDeck = []
let playerPlayZone = []
let computerDeck = []
let computerPlayZone = []
let warzone 
let removedCardPlayer
let removedCardComp
let playerCaptured = []
let computerCaptured = []
let warCaptured = []

let gameDeck = ["d14","d12","d13","d11","d10","d09","d08","d07","d06","d05","d04","d03","d02","h14","h12","h13","h11","h10","h09","h08","h07","h06","h05","h04","h03","h02","c14","c12","c13","c11","c10","c09","c08","c07","c06","c05","c04","c03","c02","s14","s12","s13","s11","s10","s09","s08","s07","s06","s05","s04","s03","s02"]




// Cached element references \\
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')
const resetBtnEl = document.getElementById("resetBtn")

// Event listeners
document.getElementById('btn').addEventListener('click', handleClickPlayer)
resetBtnEl.addEventListener("click", init)


// Functions \\
init()

function init() {
  shuffleDeck(gameDeck)
  splitDeck(gameDeck)
  
}




function shuffleDeck(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
}
return array;
}    

shuffleDeck(gameDeck)
console.log(gameDeck);

function splitDeck(){
  playerDeck = gameDeck.slice(0, 26);
  computerDeck = gameDeck.slice(26, 52);
}
splitDeck(gameDeck)
console.log(playerDeck);
console.log(computerDeck);


function handleClickPlayer() {

  if (playerDeck.length >= 0) {  

		let randIdx = Math.floor(Math.random()*playerDeck.length)
  
	  let cardPicked = playerDeck.splice(randIdx, 1)[0]

		playerPlayZone.push(cardPicked) 

		renderPlayer1(cardPicked)
  if (computerDeck.length >= 0) {  
    
    let randIdx = Math.floor(Math.random()*computerDeck.length)
    
    let compCardPicked = computerDeck.splice(randIdx, 1)[0]

		computerPlayZone.push(compCardPicked) 

	  
		renderPlayer2(compCardPicked)

    if (cardPicked.slice(1) > compCardPicked.slice(1)){
      computerPlayZone.pop(compCardPicked)
      playerCaptured.push(cardPicked)
      playerCaptured.push(compCardPicked)
    } else if (cardPicked.slice(1) < compCardPicked.slice(1)) {
      playerPlayZone.pop(cardPicked)
      computerCaptured.push(compCardPicked)
      computerCaptured.push(cardPicked)
    } else (cardPicked.slice(1) === compCardPicked.slice(1))
    console.log("Go to WAR!!");
  }
}
}

function renderPlayer1(cardPicked) {
  
  if (playerPlayZone.length === 1) {  
    deck2El.classList.remove("outline")
  }

  if (playerDeck.length >= 0) {  
    deck2El.classList.remove(removedCardPlayer)
  }

  removedCardPlayer = cardPicked  
  
  deck2El.classList.add(cardPicked)  

  if (playerDeck.length === 13) {  
    deck2El.classList.add("shadow");
    deck1El.classList.remove("shadow");
  }
  if (playerDeck.length === 0) {  
    deck1El.classList.add("outline");
    deck1El.classList.remove("back-red");

  if (playerPlayZone.length === 0){
    deck2El.classList.add("outline")
  }
}
}

function renderPlayer2(compCardPicked) {
  
  if (computerPlayZone.length === 1) {  
    deck3El.classList.remove("outline")
  }

  if (playerDeck.length >= 0) {  
    deck3El.classList.remove(removedCardComp)
  }

  removedCardComp = compCardPicked  

  deck3El.classList.add(compCardPicked)  

  if (computerDeck.length === 13) {  
    deck3El.classList.add("shadow");
    deck4El.classList.remove("shadow");
  }
	
  if (computerDeck.length === 0) {  
    deck4El.classList.add("outline");
    deck4El.classList.remove("back-blue");
  }
}





// function compareCards(){
//   playerDeck.forEach(convertNumbers)
//   computerDeck.forEach(convertNumbers)
//   if (playerDeck[i] > computerDeck[i]){
//     return console.log("Player Wins");
//   } else 
//   (playerDeck % 15 < computerDeck)
//     console.log("Computer Wins");
//   }

function gamePlay (){
if (cardPicked > compCardPicked){
  playerCaptured.unshift(compCardPicked)
  let capture = playerDeck.pop()
  playerCaptured.unshift(capture)
  computerDeck.pop()
} else if (cardPicked.numb > compCardPicked.numb) {
  computerCaptured.unshift(cardPicked)
  let cCapture = computerDeck.pop
  computerCaptured.unshift(cCapture)
  playerDeck.pop()
  console.log(cardPicked);

  renderPlayer1()
  renderPlayer2()
  }
}