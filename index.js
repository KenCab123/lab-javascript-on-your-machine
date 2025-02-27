/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let myArray = process.argv.slice(2);
    let total = 0;
    let numArr = myArray.slice(1);

    if(myArray.length === 0) {
        return `No operation provided...`;
     } else if(numArr.length === 0) {
        return `No numbers provided...`;
     } 
     
     if (!myArray.includes('plus') && !myArray.includes('minus')) {
         return 'Invalid operation: modulo';
     }


     if(myArray.includes('plus')) {
        for(let num of numArr) {
            total += +num;
        }
    }
    
    if(myArray.includes('minus')) {
        total = numArr.reduce((total, num) => total - num);
    }
    return total
}
const showMe = calculator();
console.log(showMe);

// Don't change anything below this line.
module.exports = calculator;

