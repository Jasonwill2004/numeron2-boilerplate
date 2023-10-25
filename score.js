// Iteration 8: Making scoreboard functional
document.getElementById("play-again-button").onclick = ()=>{
    location.href = "game.html"
}

console.log(window.location.search)

let params = new URLSearchParams(window.location.search)
let score = params.get("score")
console.log("score:",score)

let scoreboard = document.getElementById("score-board")
scoreboard.textContent = score