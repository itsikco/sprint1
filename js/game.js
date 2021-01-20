const MINE = '🔅';
const SWEEPER = 'imges/sweeper.png';
const DEADSWEEPER = '☠';
const FLAG = '🚩';
const CLEAN = '';
const WINSWEEPER = '😎';

var gField = [...document.querySelectorAll('.cell')];
var gMines = {
    isOn: false,

}

var gGame = {
    score: 0,
    isOn: false
}
var gCell = {
    isClicked: false,

}


function init() {
    console.log('hello')
    gField = buildField()
    createMines(gField);
    printField(gField, '.board-container')
    gGame.isOn = true
    setInterval(function () {
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);
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

            if (gField.length === 4 * 4) {
                field[i][j] = (Math.random() > 0.1) ? MINE : '';
            }
            if (gField.size === 8 * 8) {
                field[i][j] = (Math.random() > 0.5) ? MINE : '';
            }
            if (gField.size === 12 * 12) {
                field[i][j] = (Math.random() > 0.48) ? MINE : '';
            }
        }
    }
    gField.forEach((td, i) => {
        td.innerHTML = `<img src="${suffelImages[i]}" />`;
        field.push(td.innerHTML);
    })

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

function cellClick(elCell, i, j) {
    var cell = gField[i][j];

    if (cell === CLEAN) continue;
    elCell.classList.toggle('selected');
    if (cell === MINE) {
        gameOver()
    }
    if (gElSelectedCell) {
        gElSelectedCell.classList.remove('selected');
    }
    gElSelectedCell = (gElSelectedCell === elCell) ? null : elCell;

    if (gElSelectedCell) {
        var pos = { i: i, j: j }
        showCellDetails(pos)
    } else {
        hideCellDetails()
    }
}

function tableCreate() {
    var tTd = document.getElementsByTagName("cell")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j <= 4; j++) {
        // table row creation
        var row = document.createElement("tr");
        for (var i = 0; i < 4; i++) {
            var cell = document.createElement("td");
            cell.appendChild(cellImg);
            row.appendChild(cell);
        }
    }
}

