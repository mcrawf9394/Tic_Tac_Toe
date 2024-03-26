const gameBoard = {
    gameBoard: [],
    gameBoardContainer: document.getElementById('gameBoardContainer'),
    display: document.getElementById('display'),
    createGameBoard() {
        for (i = 0; i < 3; i++) {
            this.gameBoard.push([])
            for (j = 0; j <3; j++) {
                this.gameBoard[i].push(" ")
            }
        }
        this.displayGameBoard(this.gameBoard)
    },
    updateGameBoard (i, j, userEntry){
        this.gameBoard[i][j] = userEntry
        let board = document.querySelectorAll('.grids')
        board.forEach(cells => {
            let value = cells.value
            let row
            let column
            if (value < 3) {
                row = 0
                column = parseInt(value)
            }
            else if (value < 6 && value >= 3) {
                row = 1
                column = parseInt(value) - 3
            }
            else if (value >= 6){
                row = 2
                column = value - 6
            }
            cells.textContent = this.gameBoard[row][column]
        });
    },
    displayGameBoard (board) {
        const gameBoardContainer = document.getElementById('gameBoardContainer')
        m = 0
        for (k = 0; k < 3; k++){
            for(l = 0; l < 3; l++){
                const newSpace = document.createElement('button')
                newSpace.className = "grids"
                newSpace.textContent = board[k][l]
                newSpace.value = m
                newSpace.addEventListener('click', () => playGame.turns(newSpace.value))
                this.gameBoardContainer.appendChild(newSpace)
                m++
            }
        }
    },
    displayTurn (name){
        this.display.textContent = name + "'s turn"
    },
    displayWin (name) {
        this.display.textContent = name + " has won"
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
        gameBoard.displayTurn (players.player1.name)
    },
    turns (value) {
        let row
        let column
        if (value < 3) {
            row = 0
            column = parseInt(value)
        }
        else if (value < 6 && value >= 3) {
            row = 1
            column = parseInt(value) - 3
        }
        else if (value >= 6){
            row = 2
            column = value - 6
        }
        if (this.first == this.second){
            choice = players.player1.choice
            this.turnHandling(row, column, choice)
        }
        else {
            choice2 = players.player2.choice
            this.turnHandling(row, column, choice2)
        }
    },
    turnHandling (row, column, choice){
        let board = gameBoard.gameBoard
        let name
        if (board[row][column] != " "){
            alert("You Cannot place a x or o on a spot that has already been marked!")

        } 
        else if (choice == players.player1.choice){
            this.first++
            name = players.player1.name
            gameBoard.displayTurn(players.player2.name)
            gameBoard.updateGameBoard(row, column, choice)
            this.checkWinner(choice, name)
        }
        else {
            this.second++
            name = players.player2.name
            gameBoard.displayTurn(players.player1.name)
            gameBoard.updateGameBoard(row, column, choice)
            this.checkWinner(choice, name)
        }
    },
    checkWinner (choice, name) {
        isThereAWinner = false
        for (c = 0; c < 3; c++){
            if (gameBoard.gameBoard[c][0] === choice && gameBoard.gameBoard[c][1] === choice && gameBoard.gameBoard[c][2] === choice){
                isThereAWinner = true
                gameBoard.displayWin(name)
                break
            }
            else if (gameBoard.gameBoard[0][c] === choice && gameBoard.gameBoard[1][c] === choice && gameBoard.gameBoard[2][c] === choice){
                isThereAWinner = true
                gameBoard.displayWin(name)
                break
            }
            else if (gameBoard.gameBoard[0][0] === choice && gameBoard.gameBoard[1][1] === choice && gameBoard.gameBoard[2][2] === choice || gameBoard.gameBoard[0][2] == choice && gameBoard.gameBoard[1][1] === choice && gameBoard.gameBoard[2][0] === choice) {
                isThereAWinner = true
                gameBoard.displayWin(name)
                break
            }
        }
        return
    }
}
playGame.beginGame()