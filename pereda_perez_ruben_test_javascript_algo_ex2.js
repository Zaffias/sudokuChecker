// import arr from "./javascript_test_je1.js";
// Checks if the sudoku row is valid; All elements are numbers and the numbers are not repeated.


function areValidNumbers(arr){
    for(let elem of arr){
        if((elem < 1 || elem > arr.length) || isNaN(elem)){
            return false;
        }
    }
    return true
}

 function isValidRow(arrToCheck){
    // I decided to chek if a number repeats by sorting the array and checking if the next number is the same as the one I'm iterating.
    // As we need to sort the array we will make a copy of it so the original array that 'arr' references is not modified.
    if(!arrToCheck) return false;
    const arrCopy = arrToCheck.slice(); // This slice is kind of odd, but what it does is copy the value of arrToCheck and pass it to arrCopy
    // This tries to convert the string in the array to a numeric value, I decided to do this to check than only numbers up to the array length are given;
    arrCopy.forEach((elem, i, arr) => {
        arrCopy[i] = parseInt(elem, 10);
    });
    // Sorts the array on ascendant order
    arrCopy.sort((a , b) => a - b);
    // Now we check that all elements are numbers between 1 and arr lenght and are numbers;
    if(!areValidNumbers(arrCopy)) return false
    // Then we check if no element is repeated, the easiest way to this is convert the array in a set and check if its size correspond to the length of the arr.
    if(new Set(arrCopy).size !== arrCopy.length) return false;
    // Finally returns true if all the constraints are valid
    return true;
}

