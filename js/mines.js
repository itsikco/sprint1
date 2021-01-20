

// Count mines around each cell
// and set the cell's
// minesAroundCount.

function setMinesNegsCount(field){
    createField(field);
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++){
        if (i < 0 || i > mat.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            var currCell = mat[i][j];
            if (currCell === '🔅') count++
        }
    }    
}

function minesAroundCount(field,i,j){ 
  
}

function minesAroundCount(){
    var count = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            var currCell = mat[i][j]
            if (currCell === '🔅') count++
        }
    }
    console.log('Count:', count);
    return count;
}
function getMineHTML(MINE) {
    if(gMine.isOn){
        return `<span style= "color:blue">${GHOST}</span>`;
    }

