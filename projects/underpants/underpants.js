// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
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

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (array, number) {
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i
        }
    }
    return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value) {
    return array.includes(value) ? true : false
    }

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, action) {
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


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1) {
            arr.push(array[i]);
        }    
    }
        return arr;
   
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function (array, test) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === true){
            arr.push(array[i])
        }
    }
   return arr

} 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function (array, test) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === false){
            arr.push(array[i])
        }
    }
   return arr
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (array, test) {
    var arr = [[], []]
    for (var i = 0; i < array.length; i++) {
        var result = test(array[i], i, array);
        if (result === false) {arr[1].push(array[i])}
        if (result === true) {arr[0].push(array[i])}
    }
    return arr
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collection, test) {
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

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (array, prop) {
    return _.map(array, function(obj) {return obj[prop]})
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collection, test) {
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

    

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collection, test) {
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

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function (array, func, seed) {
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
 
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function (obj1, obj2, obj3) {
    if (obj3 !== undefined) {
        return Object.assign(obj1, obj2, obj3)
    }
    return Object.assign(obj1, obj2)
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
