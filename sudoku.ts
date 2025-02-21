function isValidSudoku(board: string[][]): boolean {
let isValid :boolean = true;
    for (let i = 0; i < 9; i++) {
        isValid = isValidCol(i,board);
        if(!isValid)break;
        isValid = isValidRow(i, board);
        if(!isValid)break;
        isValid = i % 3 === 0 ? (isValidSquare(i,0,board) && isValidSquare(i,3,board) && isValidSquare(i,6,board
        )) : isValid  
            if(!isValid)break;
        // isValid = i % 3 === 0 ? isValidSquare(i,i,board) : isValid;
    }
    return isValid
};

function isValidCol (col: number, board: string[][]): boolean {
    let numbers = ['1','2','3','4','5','6','7','8','9'];
    let isValid = true;
    for (let i = 0; i < 9; i++) {
        if(board[i][col] === ".")continue;
        if(!numbers.includes(board[i][col])){
            isValid= false;
            break;
            }
      delete numbers[Number(board[i][col]) - 1]
        isValid = true;
    }
        return isValid;
}

function isValidRow (row: number, board: string[][]): boolean {
    let numbers = ['1','2','3','4','5','6','7','8','9'];
    let isValid = true;
    for (let i = 0; i < 9; i++) {
        if(board[row][i] === ".")continue;
        if(!numbers.includes(board[row][i])){
            isValid= false;
            break;
            }
        delete numbers[Number(board[row][i]) - 1]
        isValid = true;
    }
        return isValid;
}

function isValidSquare (row: number, col: number, board: string[][]): boolean {
    let numbers = ['1','2','3','4','5','6','7','8','9']
    let isValid = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        if(board[row + i][col + j] === ".")continue;
        if(!numbers.includes(board[row + i][col + j])){
            isValid= false;
            break;
            }
       delete numbers[Number(board[row + i][col + j]) - 1]
        isValid = true;
        }
           if(!isValid) break;
    }
    return isValid;
}
