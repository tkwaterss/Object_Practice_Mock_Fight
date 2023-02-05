//.forEach() - function that will perform a tast for each given element in the array. does not modify array.
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        return callback(array[i]);
    }
}



//.filter() - function will return a new array copy filtered via the callback Function
const filter = (array, callback) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}


//.map() - function will return a new array with each element modified according to the callback function
const map = (array, callback) => {
    let modifiedArray = [];
    for (let i = 0; i < array.length; i++) {
        modifiedArray.push(callback(array[i]));
    }
    return modifiedArray;
}



//.reduce() coded out
const reduce = (array, callback) => {
    
}

