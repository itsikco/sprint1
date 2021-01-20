const MINE = '🔅';
const SWEEPER = '😟';
const DEADSWEEPER = '☠';
const FLAG = '🚩';
const CLEAN = '';
const WINSWEEPER = '😎';

var gField = {
    size:4*4,  
}

var gMines = 0;
    
var gGame = {
    score: 0,
    isOn: false
}


function init() {
    console.log('hello')
    gField = buildField()
    createMines(gField);

    printField(gField, '.board-container')
    gGame.isOn = true
}

function createMines(field) {
    var mine = {
        location: {
            i: 3,
            j: 3
        },
        currCellContent: MINE
    }
    gMines.push(mine)
    board[mine.location.i][mine.location.j] = MINE
}
function createField(field) {
    var field = [];
    for (var i = 0; i < gField.size; i++) {
        field.push([]);
        for (var j = 0; j < gField.size; j++) {
            if(gField.size=== 4*4){
                field[i][j] = (Math.random() > 0.1) ? MINE : '';
            }
            if(gField.size=== 8*8){
                field[i][j] = (Math.random() > 0.5) ? MINE : '';  
            }
            if(gField.size=== 12*12){
                field[i][j] = (Math.random() > 0.48) ? MINE : '';   
            }
        }
    }
    return field;
}

function setMinesNegsCount()


function updateScore(diff) {
    gGame.score += diff;
    var elScore = document.querySelector('h2 span');
    elScore.innerText = gGame.score;
}

function gameOver() {
    console.log('Game Over');
    renderCell(gMine.location, CLEAN)
    gGame.isOn = false;
    clearInterval(gIntervalSweeper);
    gIntervalSweeper = null;
}
function createMines(field) {
    gMines = [];
    createMines(field);

}



