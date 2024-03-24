const gameBoard = {
    gameBoard: [],
    createGameBoard() {
        for (i = 0; i < 3; i++) {
            this.gameBoard.push([])
            for (j = 0; j <3; j++) {
                this.gameBoard[i].push("")
            }
        }
        this.displayGameBoard(this.gameBoard)
    },
    updateGameBoard (i, j, userEntry){
        this.gameBoard[i][j] = userEntry
        this.displayGameBoard(this.gameBoard)
    },
    displayGameBoard (board) {
        console.log(board)
    }
}
gameBoard.createGameBoard()
const players = {
    player1: {
        name: "",
        choice: ""
    },
    player2: {
        name: "",
        choice: ""
    }
}
const playGame = {
    first: 0,
    second: 0,
    beginGame (){
        players.player1.name = prompt("player1 name?")
        players.player1.choice = prompt("player 1 choice")
        players.player2.name = prompt("player 2 name")
        players.player2.choice = prompt("player 2 choice")
        this.turns()
    },
    turns () {
        if (this.first == this.second){
            player1TurnRow = parseInt(prompt("row"))
            player1TurnColumn = parseInt(prompt("column"))
            choice = players.player1.choice
            this.turnHandling(player1TurnRow, player1TurnColumn, choice)
        }
        else {
            player2TurnRow = prompt("row")
            player2TurnColumn = prompt("column")
            choice2 = players.player2.choice
            this.turnHandling(player2TurnRow, player2TurnColumn, choice2)
        }
        console.log(this.first)
    },
    turnHandling (row, column, choice){
        if (gameBoard.gameBoard[row][column] != ""){
            alert("You Cannot place a x or o on a spot that has already been marked!")
            this.turns()
        }
        else if (choice == "x"){
            this.first++
            gameBoard.updateGameBoard(row, column, choice)
        }
        else {
            this.second++
            gameBoard.updateGameBoard(row, column, choice)
        }
        setTimeout(1000)
        this.checkWinner(choice)
    },
    checkWinner (choice) {
        for (c = 0; c < 3; c++){
            if (gameBoard.gameBoard[c][0] === choice && gameBoard.gameBoard[c][1] === choice && gameBoard.gameBoard[c][2] === choice){
                console.log("there's  a winner!")  
            }
            else if (gameBoard.gameBoard[0][c] === choice && gameBoard.gameBoard[1][c] === choice && gameBoard.gameBoard[2][c] === choice){
                console.log("there's  a winner!")
            }
        }
        this.turns()
    }
}
playGame.beginGame()