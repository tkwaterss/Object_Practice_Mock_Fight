//.forEach() - function that will perform a tast for each given element in the array. does not modify array.
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        return callback(array[i]);
    }
}



//.filter() - function will return a new array copy filtered via the callback Function
const filter = (array, callback) => {
    let filteredArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}


//.map() -
const map = (array, callback) => {

}



//.reduce() coded out
const reduce = (array, callback) => {
    
}

