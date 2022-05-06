/**
 * 
 * 0. Functions in javascript are like procedures that take in an input and based
 * on that input outputs something diffrent that we use to make our code more effective and efficent.
 * 
 * 1. to create a function we start with our function definition then the name of our function.
 * followed by the parameters and code block. ex: function name () {//does a cool thing}.
 * the parameters
 * 
 * 2. we can also use a variable initalization for our functions assignment. so instead of having function name () {}
 * we can declare our variable first then assign it to our function like so. var name = function () {} 
 * using arrow functions is also an option. instead of using the function definition we define it as such (() => {})()
 * this would also be a IIFE or Imediatly Invoked Function Expression due to the () at the end of our (() => {})
 * 
 * 3. recursion is when we call a function within a function casuing it to act like a loop.
    we use a base and a recursive case in these functions.

    ex:

    var arr = [1, 2, 3, 4, 5] 

    function log_nums (arr) {
        // this is the base case it will check if there is 1 element in the array and then end the function by returning that last element
        base:
        if (arr.length === 1) {
            return console.log(arr[0])
        }
        // this is the recursive case it will log the first element in the array and then call the function again with the first element removed
        console.log(arr[0])
        return log_nums(arr.slice(1))
    }
    
    this will cause the function to constintly loop through the inputed array and log each number indevidualy
 */