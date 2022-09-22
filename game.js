const tictac = document.getElementsByClassName("c1")
let nextMove = "X"
let gameOver = false
resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", Reset)
let scoreX = 0
let scoreO = 0

for(let i = 0 ; i < tictac.length; i++){
    tictac[i].movePlaced = false
    tictac[i].addEventListener("mouseover", ShadowIn, false)
    tictac[i].addEventListener("mouseout", ShadowOut, false)
    tictac[i].addEventListener("click", Place, false)
}

function ShadowIn(){
    if(!this.movePlaced && !gameOver){
        this.innerHTML = nextMove
    }
}

function ShadowOut(){
    if(!this.movePlaced && !gameOver){
        this.innerHTML = ""
    }
}

function Place(){
    if(!this.movePlaced && !gameOver){
        this.innerHTML = nextMove
        this.movePlaced = true
        if(nextMove == "X"){
            this.style.color = "blue"
        }
        else if(nextMove == "O"){
            this.style.color = "red"
        }
    }

    if(nextMove == "X"){
        nextMove = "O"
    }
    else if(nextMove == "O"){
        nextMove = "X"
    }

    VictoryCheck()
}

function VictoryCheck(){
    victory = false
    for(let i = 0; i < 3; i++){
        if((tictac[i].innerHTML == tictac[i+3].innerHTML) && (tictac[i].innerHTML == tictac[i+6].innerHTML) && (tictac[i+6].innerHTML == tictac[i+3].innerHTML) && (tictac[i].innerHTML == "X" || tictac[i].innerHTML == "O")){
            victory = true
            WhoWin(tictac[i].innerHTML)
        }
    }
    for(let i = 0; i < 8; i+=3){
        if((tictac[i].innerHTML == tictac[i+1].innerHTML) && (tictac[i+2].innerHTML == tictac[i+1].innerHTML) && (tictac[i].innerHTML == tictac[i+2].innerHTML) && (tictac[i].innerHTML == "X" || tictac[i].innerHTML == "O")){
            victory = true
            WhoWin(tictac[i].innerHTML)
        }
    }
    if((tictac[0].innerHTML == tictac[4].innerHTML) && (tictac[8].innerHTML == tictac[4].innerHTML) && (tictac[0].innerHTML == tictac[8].innerHTML) && (tictac[0].innerHTML == "X" || tictac[0].innerHTML == "O")){
        victory = true
        WhoWin(tictac[0].innerHTML)
    }
    if((tictac[2].innerHTML == tictac[4].innerHTML) && (tictac[6].innerHTML == tictac[4].innerHTML) && (tictac[2].innerHTML == tictac[6].innerHTML) && (tictac[2].innerHTML == "X" || tictac[2].innerHTML == "O")){
        victory = true
        WhoWin(tictac[2].innerHTML)
    }

    if(victory){
        gameOver = true
        document.getElementById("ggez").innerHTML = "GAME OVER!"
        document.getElementById("Xscore").innerHTML = `X:${scoreX}`
        document.getElementById("Oscore").innerHTML = `O:${scoreO}`
    }
}

function Reset(){
    for(let i = 0 ; i < tictac.length; i++){
        tictac[i].innerHTML = ""
        tictac[i].movePlaced = false
        tictac[i].style.color = "gray"
    }
    nextMove = "X"
    victory = false
    gameOver = false
    document.getElementById("ggez").innerHTML = ""
}

function WhoWin(a){
    if(a == "X"){
        scoreX += 1
    }
    else if(a == "O"){
        scoreO += 1
    }
}