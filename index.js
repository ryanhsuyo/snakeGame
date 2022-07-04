import {update as updateSnake, draw as drawSnake ,snakeSpeed, getSankeHead, snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import {outsideGrid} from "./grid.js"

let lastRenderTime = 1
let gameOver = false
const gameBoard = document.getElementById('game')

function main(currentTime) {
    if(gameOver){
        return alert('u lose')
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondSinceLastRender <  1 / snakeSpeed) return 


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function checkDeath() {
    gameOver = outsideGrid(getSankeHead()) || snakeIntersection()

}

//https://www.youtube.com/watch?v=QTcIXok9wNY&t=229s