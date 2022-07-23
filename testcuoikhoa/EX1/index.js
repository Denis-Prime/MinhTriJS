// Prints help message to the console
// Returns a string
function adjacentElementsProduct(...inputArray) {
    let multiMax = -99999999999
    for(let i = 0;i<inputArray.length-1;i++){
        let multi = inputArray[i]*inputArray[i+1]
        if(multi > multiMax) multiMax = multi
    }
    return JSON.stringify(multiMax)
}
console.log(adjacentElementsProduct(1,2,3,-4))
