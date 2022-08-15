const cardArray = [
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png',
    },
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png',
    }
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard () {
    for(let i =0; i< cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
 }

 createBoard()

 function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]


    if (optionOneId == optionTwoId){
        alert('You have clicked the same Image')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
       cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    else if (cardChosen[0] == cardChosen[1]){
       alert('You found a match!')
       cards[optionOneId].setAttribute('src', 'images/white.png')
       cards[optionTwoId].setAttribute('src', 'images/white.png')
       cards[optionOneId].removeEventListener('click', flipCard)
       cards[optionTwoId].removeEventListener('click', flipCard)
       
       cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
       cards[optionTwoId].setAttribute('src', 'images/blank.png')
       alert('Sorry try again!')
    
    }

    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations You found them all'
    }
 }

 function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)

    console.log(cardChosen)
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length ===2){
        setTimeout(checkMatch, 500)
    }
 }