const gameBoard = function () {
    const gameBoardRow1 = {
        gameBoardColumm1: "",
        gameBoardColumm2: "",
        gameBoardColumn3: ""   
    }
    const gameBoardRow2 = {
        gameBoardColumm1: "",
        gameBoardColumm2: "",
        gameBoardColumn3: ""
    }
    const gameBoardRow3 = {
        gameBoardColumm1: "",
        gameBoardColumm2: "",
        gameBoardColumn3: ""
    }
    const gameBoardGrid = [gameBoardRow1, gameBoardRow2, gameBoardRow3]
    function takeInput (){
     return gameBoardGrid   
    }
}
const game = function (){
    gameBoard()
}