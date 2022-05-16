'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: function takes in any value and returns that value unchanged
 * @param {value} value: the value can be anything from a string to an object
 * but not matter what it is, it will be returned unchanged

    Example: identity("heat") 
        -> should return "heat"

 */
    function identity(value){
    return value;
};
module.exports.identity = identity



/**
 * typeOf: function will take in a value and return the datatype of that value
 * 
 * @param {value} value: the value can be anything from a string to an object 
 *  and will be checked to see what datatype it is. it will then return the datatype of that value
 *
 * Example: _.typeOf(1) = "number"
 *          _.typeOf("number") = "string"
 */
    function typeOf(value) {
    // if value is string return string
    if (typeof(value) === "string") {
        return "string";
    }
    // if value is number return number
    else if (typeof(value) === "number") {
        return "number";
    }
    // if value is boolean return boolean
    else if (typeof(value) === "boolean") {
        return "boolean"
    }
    // if value is array return array
    else if (Array.isArray(value) === true) {
        return "array"
    }
    // if value is object return object
    else if (Array.isArray(value) === false && typeof(value) === "object" && value != null) {
        return "object"
    }
    // if value is undefined return undefined
    else if (typeof(value) === "undefined") {
        return "undefined"
    }
    // if value is function return function
    else if (typeof(value) === "function") {
        return "function"
    } 
    // if value is null return null
    else if (typeof(value) === "object" && value == null) {
        return "null"
    }


}
module.exports.typeOf = typeOf



/**
 * First: function takes in an array and a number and returns the index of the element based off of the number
    Left to right 
 *
 * @param {array} Array: The array to iterate through to find the element representing the number 
 * @param {number} number: the number will be used to optain the first <number> items of <array>
    
    Example: _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */
    function first (array, number) {
        if (Array.isArray(array) === false) {
            return [];
        }
        else if (number === undefined) {
            return array[0]
        }
        else if (number < 0) {
            return []
        }
        else if (number > array.length) {
            return array
        }
        else {return array.slice(0, number)}
    }
    module.exports.first = first



/**
 * last: function takes in an array and a number and returns the index of the element based off of the number
 *  Right to left
 * @param {array} Array: The array to iterate through to find the element representing the number 
 * @param {number} number: the number will be used to optain the first <number> items of <array>

 Example: _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */
    function last (array, number) {
        if (Array.isArray(array) === false) {
        return [];
    }
    else if (number === undefined) {
        return array[array.length - 1]
    }
    else if (number < 0) {
        return []
    }
    else if (number > array.length) {
        return array
    }
    else {return array.slice(number - 1, array.length)}
    }
    module.exports.last = last



/**
 indexOf: function will return the index of the <value> in the <array?
 * 
 * @param {array} Array: the array that will be looked through to find the value 
 * @param {value} value: the value that (presumably) will be in the array

    Example: _.indexOf(["a","b","c"], "c") -> 2
*           _.indexOf(["a","b","c"], "d") -> -1
 */
    function indexOf (array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return i
            }
        }
        return -1
    }
    module.exports.indexOf = indexOf



/**
 *  contains: function will return true or false based off of weather or not the value is located within the array
 * 
 * @param {array} Array: the array that will be looked through to find the value
 * @param {value} Value: the value that (presumably) will be in the array

    Example: _.contains([1,"two", 3.14], "two") -> true
            _.contains([1,"two", 3.14], "three") -> false
 */         
    function contains(array, value) {
        return array.includes(value) ? true : false
    }
    module.exports.contains = contains



/**
    unique: function will remove all duplicates from the array paramter and return the array
 * 
 * @param {array} Array: the array will contain a list of numbers
 *  
    Example: _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
    function unique(array) {
        var arr = [];
        for (var i = 0; i < array.length; i++) {
            if (arr.indexOf(array[i]) === -1) {
                arr.push(array[i]);
            }
        }
        return arr;
    }
    module.exports.unique = unique



    /**
        filter: function will call the test function on the array and returns the array values that passed the test function
     * 
     * @param {array} Array: an array filled with values that will be tested with the test function
     * @param {test}  Function: the test parameter is a function that will used on each array value

        Example: _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
     */
     function filter(array, test) {
         var arr = []
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === true){
            arr.push(array[i])
        }
    }
   return arr
     }
     module.exports.filter = filter



     /**
        reject: function will call the test function on the array and return all the values in the array that fail the test function
      * 
      * @param {array} array: an array filled with values that will be tested with the test function
      * @param {test} function: test is a function that will be used on each array value and return all values that fail

        Example: _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
      */
      function reject(array, test) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === false){
            arr.push(array[i])
        }
    }
   return arr
    }
module.exports.reject = reject



/**
    Partition: function will return an array of sub arrays one that returned truthy and one that returned falsy
 * 
 * @param {array} Array: an array filled with value that will be tested on with the test function
 * @param {test} Function: test is a function that will be used on each value of the array parameter

    Example: _.partition([1,2,3,4,5], function(element,index,arr){
*               return element % 2 === 0;
*                  }); -> [[2,4],[1,3,5]]
}
 */
 function partition(array, test) {
    var arr = [[], []]
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === false) {arr[1].push(array[i])}
        if (result === true) {arr[0].push(array[i])}
    }
    return arr
}
module.exports.partition = partition



/**
    map: map will call a function on each array element and return that array with each value changed by the test function
 * 
 * @param {collection} array/object: this object/array will be iterated through and each value will be called with the test function
 * @param {test} function: this function will be called on each element in the array

  Example: _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
  function map(collection, test) {
    var arr = [];
    if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
            var result = test(collection[i], i, collection)
            arr.push(result)
        }
    } else {
        for (var key in collection) {
            var result = test(collection[key], key, collection)
            arr.push(result)
            }
        }
    
    return arr
}
module.exports.map = map;



/**
    pluck: function will take an array filled with objects and return the values of the keys that represent prop
 * 
 * @param {array} array: the array is filled with objects
 * @param {prop} key: prop is the name of a object key 

  Example:_.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
function pluck(array, prop) {
    return array.map(function(obj) {return obj[prop]});
}
module.exports.pluck = pluck



/**
    every: if every array/object value passed the test function return true. 
        but if even one fails the test function return false
 * 
 * @param {collection} array/object: a collection that will be iterated through
 * @param {test} function: the function will be called on each array value in the collection

    Example:
     _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
function every(collection, test) {
    if (test === undefined) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else {
            for (var key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (test(collection[i], i, collection) === false) {
                    return false
                }
            }
        }
    }
    return true;
}
module.exports.every = every



/**
    some: function will take an array and function and test each array value on that function.
    if even one value returns true, return true for the entire function. else false
 * 
 * @param {collection} array/object: the array/object that will be iterated through
 * @param {test} function: the function will be called on each array value in the collection

    Example:_.some([1,3,5], function(e){return e % 2 === 0}) -> false
*       _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */
    function some(collection, test) {
    // if test is undefined check if collection is an array or an object
    if (test === undefined) {
            // if it is an array check if any of the values equal truthy. if so return true
        if (_.typeOf(collection) === "array") {
            for (var i = 0; i < collection.length; i++) {
                // else return false
                if (collection[i]) {
                    return true;
                }
            }
        } else {
            // if it is an object check if any values equal truthy. if so return true
            for (var key in collection) {
                // else return false
                if (collection[key]) {
                    return true;
                } 
            }
        }
    }
    // if function dosent equal undefined 
    else {
        if (_.typeOf(collection) === "array") {
            for (var i = 0; i < collection.length; i++) {
                if (test(collection[i], i, collection) === true) {
                    return true
                }
            }
        } else {
            for(var key in collection) {
                if (test(collection[key], key, collection) === true) {
                    return true
                }
            }
        }
    } 
   return false
}
module.exports.some = some



/**
 *  reduce: function iterates through an array and calling the func parameter on each value
    to return a single value

 * @param {array} array: the array that will be iterated through  
 * @param {func} function: the function will be called on each array value
 * @param {seed} seed: the seed is the value that will be returned to complete the reduce function
    
    Example: _.reduce([1,2,3], function(previousSum, currentValue, currentIndex)
            { return previousSum + currentValue }, 0) -> 6
 */
function reduce(array, func, seed) {
    // determin if seed has a value
    if (seed === undefined) {
        // assing seed to the first index in the array
        seed = array[0];
        // loop through the array;
        for (var i = 1; i < array.length; i++) {
            //reassing seed to the result of calling the input function on the current
            //value of seed, current index, and collection
            seed = func(seed, array[i], i, array);
        }
    } else {
        for (var i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i, array)
        }
    }
    return seed;
}
module.exports.reduce = reduce



/**
 * exstend: function will add key value pairs to already exsisting objects
 * 
 * @param {obj1} an object
 * @param {obj2} a key-value pair that will be added to obj1
 * @param {obj3} a key-value pair that may or may not be added depending on if it is assigned
 * 
 * Example: var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
 function extend(obj1, obj2, obj3) {
    if (obj3 !== undefined) {
        return Object.assign(obj1, obj2, obj3)
    }
    return Object.assign(obj1, obj2)
}
    module.exports.extend = extend;



/**
 *
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
    Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
 */
    function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


