// This function creates a two-dimension array and returns it, if not parameters are provided it defaults to 9x9.
// import array from "./javascript_test_je1.js";

//Function that chekcs if the height and width of the array are valid.
function isArrayDimensionValid(height, width){
    if((height <= 0 || width <= 0) || (!Number.isInteger(height) || !Number.isInteger(width))){
        return false;
     } else return true;
}


 function createTwoDimensionalArray(height = 9, width = 9){
    // Checking that the array dimensions are valid.
    if(!isArrayDimensionValid(height, width)){
        return null;
    }

    const baseArr = new Array(width);
    for(let i = 0; i < baseArr.length; i++){
        baseArr[i] = new Array(height);
    }
    return baseArr;
}

//In the exercise case the array contains strings separated by spaces that can be easily converted in a array using split.
 function readOneDimensionalArray(readArray, arrayToFill){
    // The use of arrayToFill in this particular case seems redundant: map already returns an array.
    if(!readArray || !arrayToFill) return null;
    arrayToFill = readArray.map(str => {
        return str.trim().split(' ');
    })
    return arrayToFill;
}

// Creates and html table based on the array given.
function arrayToHTMLTable(arr){
    if(!arr) return null;
    
    const table = document.createElement('table');
    arr.forEach(rowData => {
        let row = document.createElement('tr');
        rowData.forEach(cellData => {
            let cell = document.createElement('td')
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell)
        })
        table.appendChild(row);
    });
    return table
}

// Checks if the sudoku is 9x9
function checkSudokuSize(arr){
    if(arr.length != 9) return false;
    for(let row of arr){
        if(row.length != 9) return false;
    }
    return true;
}
// Appends the created table to the html element. Maybe this sould be a function too.

const arr = readOneDimensionalArray(array_number, createTwoDimensionalArray())
checkSudokuSize(arr) ? document.body.appendChild(arrayToHTMLTable(arr)) 
    : document.body.appendChild(document.createElement('p').appendChild(document.createTextNode('The sudoku is invalid :(')))