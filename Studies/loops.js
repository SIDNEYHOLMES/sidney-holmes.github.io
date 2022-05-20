/**
LOOPS   

0) loops in javascript offer a quick and easy way to do something repeatedly


1) loops can be made in a couple of differnet ways 


For Loops
  for loops define a condition and when that condition is false the loop will end.
  the for loop is syntax is made of 3 sections the start,stop and update. 

  for(start; stop; update) {code to run}
 
  the start initializes and or declares variables and executes only once
  the stop is constantly checking each iteration to see if the condition is false.
  if so the for loop is terminated. else the block of code inside the for loop is executed and a new iteration begins.
  the update will update the start value at the start of each iteration. this process continues until the stop condition is false

  Ex:
      var num = 3
      var arr = [1,2,3,6,5]

// counts up from 0
for (var i = 0; i <= num; i++) {
  console.log(i) // logs 0 1 2 3 to the console
}

// counts down to zero
for (var i = num; i >= 0; i--) {
  console.log(i) // logs 3 2 1 0 to the console
}

// iterates through an array
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]) // logs 1 2 3 6 5 to the console
}

// iterates through an array backwards
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]) // logs 5 6 3 2 1 to the console
}


 For In Loop 

 for in statements iterates through the properties of an object

 Ex: 
  var obj = {name: "sid", age: 17}

 for (var key in obj) {
  console.log(key, obj[key]) logs // name sid 
                                  // age 17

 Do While loops

 do while loops repetes until a certin condition evaluates to false
the statment will alwayse be executed at least once

    let i = 0;
do {
  i += 1; // statement
  console.log(i);
} while (i < 5);
// 1
// 2
// 3
// 4
// 5

While loops

A while statement executes its statements as long as a specified condition evaluates to true.

ex:
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
// x = 3 at the end of the while loop

Recursion loop

recursion is a type of loop that uses function to continue calling itself until a specific condition is met

ex:
var recursion = function(arr, output=[]) {
  //base:
  if (arr.length === 0) {
    return output
  }
  //recursive:
  output.push(arr[0] + 1)
  return recursion(arr.slice(1), output)
} 

output now has all the values of arr with 1 digit added to the value

 */




