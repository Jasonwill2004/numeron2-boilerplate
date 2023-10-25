// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1Box = document.getElementById("number1")
let number2Box = document.getElementById("number2")

let number1 = Math.round(Math.random()*100)
let number2 = Math.round(Math.random()*100)

number1Box.textContent = number1
number2Box.textContent = number2

// Iteration 3: Creating variables required to make the game functional

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let timerBox = document.getElementById("timer")
let score = 0
let intervel;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3")
let number3
// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
     number1 = Math.round(Math.random()*100)
     number2 = Math.round(Math.random()*100)

    let operator = Math.ceil(Math.random()*5)
    
    switch(operator){
        case 1 : number3 = number1 + number2; break;
        case 2 : number3 = number1 - number2; break;
        case 3 : number3 = number1 * number2; break;
        case 4 : number3 = Math.floor(number1 / number2); break;
        case 5 : number3 = number1 % number2; break;
        // default : randomise(); it is used because if the operator is not in the cases it will go into var number1 and gets random number
        
    }
    number3Box.textContent = number3
    number2Box.textContent = number2
    number1Box.textContent = number1
    clearInterval(intervel)
    startTimer()

}
randomise()
// Iteration 6: Making the Operators (button) functional
plus.onclick = ()=>{
    if (number1 + number2==number3){
        score++
        console.log("score:",score)
        randomise()
    }else{
        gameOver()
    }
}
minus.onclick = ()=>{
    if (number1 - number2==number3){
        score++
        console.log("score:",score)
        randomise()
    }else{
        gameOver()
    }
}
mul.onclick = ()=>{
    if (number1 * number2==number3){
        score++
        console.log("score:",score)
        randomise()
    }else{
        gameOver()
    }
}
divide.onclick = ()=>{
    if (number1 / number2==number3){
        score++
        console.log("score:",score)
        randomise()
    }else{
        gameOver()
    }
}
modulus.onclick = ()=>{
    if (number1 % number2==number3){
        score++
        console.log("score:",score)
        randomise()
    }else{
        gameOver()
    }
}
function gameOver(){
    window.location.href = `./gameover.html?score=${score}`
}

// Iteration 7: Making Timer functional
function startTimer(){
    let time =20
    timerBox.textContent = time
    clearInterval(intervel)
    intervel = setInterval(()=>{
        time--
        timerBox.textContent = time
        if(time==0){
            gameOver()
        }
    },1000)
}