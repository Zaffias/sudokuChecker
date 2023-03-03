// import { isValidRow } from "./pereda_perez_ruben_test_javascript_algo_ex2.js";
// import { readOneDimensionalArray, createTwoDimensionalArray } from "./pereda_perez_ruben_test_javascript_algo_ex1.js";
// import array from './javascript_test_je1.js';

// If there's an error every check function will return an array consisisting on the index of the line and what the line is, else it will return 0an empty array
function checkRows(arrToCheck){
    if(!arrToCheck) return null;
    for(let [i, row] of arrToCheck.entries()){
        // If there is an error we return false and the index of the row where the error is
        if(!isValidRow(row)) return [i, row];
    }
    return [];
}

function checkColumns(arrToCheck){
    if(!arrToCheck) return null;
    for(let i = 0; i < arrToCheck.length; i++){
        let temp = []
        for(let j = 0; j < arrToCheck.length; j++){
            temp.push(arrToCheck[j][i]);
        }
        if(!isValidRow(temp)) return [i, temp];
    }
    return [];
}


function checkRegions(arrToCheck){
    if(!arrToCheck) return null;
    // TODO: I could use the createTable function of ex1.
    let temp = [[], [], [], [], [], [], [], [], []];
    // Loop to create an array containing the sub-boxes, each index correspond with the "region" from 0 to 8
    for(let i = 0; i < arrToCheck.length; i++){
        for(let j = 0; j < arrToCheck.length; j++){
            // This formula variates between 0 and 8 baed on the j and i and places the number in his correct box
            let subBoxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
            temp[subBoxIndex].push(arrToCheck[i][j])
        }
    }
    // We check the new created array with the sub-boxes inside
    for(let [i, row] of temp.entries()){
        if(!isValidRow(row)) return [i, row];
    }
    return [];
}

// These are arrays that I used for testing purposes
// const invalidBoard = [
//     [ 5, 3, 4,  6, 7, 9,  8, 1, 2 ],
//     [ 6, 7, 2,  1, 9, 5,  3, 4, 7 ], 
//     [ 6, 9, 8,  3, 4, 2,  7, 6, 5 ],
  
//     [ 8, 5, 9,  7, 6, 1,  4, 2, 1 ],
//     [ 4, 2, 6,  8, 5, 3,  7, 8, 1 ],
//     [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
//     [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
//     [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
//     [ 3, 4, 5,  2, 8, 6,  1, 8, 8 ],
//   ];

//   const validBoard = [
//     [ 5, 3, 4,  6, 7, 8,  9, 1, 2 ],
//     [ 6, 7, 2,  1, 9, 5,  3, 4, 8 ],
//     [ 1, 9, 8,  3, 4, 2,  5, 6, 7 ],
  
//     [ 8, 5, 9,  7, 6, 1,  4, 2, 3 ],
//     [ 4, 2, 6,  8, 5, 3,  7, 9, 1 ],
//     [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
//     [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
//     [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
//     [ 3, 4, 5,  2, 8, 6,  1, 7, 9 ],
//   ];


// This last part if a bit rushed 
function createErrorTable(arr){
    // saves the comprobations in variables
    const rows = checkRows(arr);
    const regions = checkRegions(arr);
    const columns = checkColumns(arr);
    const table = document.createElement('table');
    // Checks is there an error. The array length will be greater than 0 if that happens.
    if(rows.length || columns.length || table.length){
        // Handles every comprobation independently, creates a table with the index error
        if(rows.length){
            const [index, row] = rows;
            const rowError = document.createElement('tr');
            const indexError = document.createElement('td').appendChild(document.createTextNode(`Error found on row ${index + 1}`));
            rowError.appendChild(indexError);
            for (const cell of row) {
                let elem = document.createElement('td')
                elem.appendChild(document.createTextNode(cell));
                rowError.appendChild(elem);
            }
            table.appendChild(rowError);
        }
        if(regions.length){
            const [index, region] = regions;
            const rowError = document.createElement('tr');
            const indexError = document.createElement('td').appendChild(document.createTextNode(`Error found on region ${index + 1}`));
            rowError.appendChild(indexError);
            for (const cell of region) {
                let elem = document.createElement('td')
                elem.appendChild(document.createTextNode(cell));
                rowError.appendChild(elem);
            }
            table.appendChild(rowError);
        }
        if(columns.length){
            const [index, column] = columns;
            const rowError = document.createElement('tr');
            const indexError = document.createElement('td').appendChild(document.createTextNode(`Error found on column ${index + 1}`));
            rowError.appendChild(indexError);
            for (const cell of column) {
                let elem = document.createElement('td')
                elem.appendChild(document.createTextNode(cell));
                rowError.appendChild(elem);
            }
            table.appendChild(rowError);
        }
        // Returns the created table with the errors
        return table;
    } 
    //Finally if there are not error returns a Yay!! :)
    return document.createElement('p').appendChild(document.createTextNode('Yay!! The sudoku has no errors'))
}

const arr = readOneDimensionalArray(array, createTwoDimensionalArray())
document.body.appendChild(createErrorTable(arr))