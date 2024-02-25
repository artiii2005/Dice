var randomNumber1 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber1)

var dice = document.getElementById("dice")

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var img6 = document.getElementById("img6")

function firstDice() {
    if (randomNumber1 === 1) {
        dice.innerHTML = img1.innerHTML = `<img src="dice1.png">`
    }
    
    if (randomNumber1 === 2) {
        dice.innerHTML = img2.innerHTML = `<img src="dice2.png">`
    }
    
    if (randomNumber1 === 3) {
        dice.innerHTML = img3.innerHTML = `<img src="dice3.png">`
    }
    
    if (randomNumber1 === 4) {
        dice.innerHTML = img4.innerHTML = `<img src="dice4.png">`
    }
    
    if (randomNumber1 === 5) {
        dice.innerHTML = img5.innerHTML = `<img src="dice5.png">`
    }

    if (randomNumber1 === 6) {
        dice.innerHTML = img6.innerHTML = `<img src="dice6.png">`
    }
}

firstDice()

var randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber2)

var secondDice = document.getElementById("second-dice")

var secondImg1 = document.getElementById("second-img1")
var secondImg2 = document.getElementById("second-img2")
var secondImg3 = document.getElementById("second-img3")
var secondImg4 = document.getElementById("second-img4")
var secondImg5 = document.getElementById("second-img5")
var secondImg6 = document.getElementById("second-img6")

function diceSecond() {
    if (randomNumber2 === 1) {
        secondDice.innerHTML = secondImg1.innerHTML = `<img src="dice1.png">`
    }

    if (randomNumber2 === 2) {
        secondDice.innerHTML = secondImg2.innerHTML = `<img src="dice2.png">`
    }

    if (randomNumber2 === 3) {
        secondDice.innerHTML = secondImg3.innerHTML = `<img src="dice3.png">`
    }

    if (randomNumber2 === 4) {
        secondDice.innerHTML = secondImg4.innerHTML = `<img src="dice4.png">`
    }

    if (randomNumber2 === 5) {
        secondDice.innerHTML = secondImg5.innerHTML = `<img src="dice5.png">`
    }

    if (randomNumber2 === 6) {
        secondDice.innerHTML = secondImg6.innerHTML = `<img src="dice6.png">`
    }
}

diceSecond()