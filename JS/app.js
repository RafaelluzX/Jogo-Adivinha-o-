//variaveis
let ramdomNumber = Math.round(Math.random()*10)
let xAttempts = 1
const playAgain = document.querySelector("#playAgain")
const btnTry = document.querySelector("#btnTry")
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
document.addEventListener('keydown',function(e){
    if(e.key   == 'Enter' && screen1.classList.contains('hide')){
        restartGame()
    }
})

function restartGame(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    inputNumber.value = ""
    xAttempts = 1
}

function tryGame (){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber").value

    if(Number(inputNumber) == ramdomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        document.querySelector('h2').textContent = (`acertou em ${xAttempts} tentativas`)
        console.log (`acertou em ${xAttempts}`)
        ramdomNumber = Math.round(Math.random()*10)
    }

    xAttempts++  
}

playAgain.addEventListener('click',restartGame)

btnTry.addEventListener('click', tryGame)
