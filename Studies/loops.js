/**
LOOPS   

0) loops in javascript offer a quick and easy way to do something repeatedly


1) loops can be made in a couple of differnet ways 


For Loops

    for loops reapeat until a specific condition is met. in this case if i is equal to the length of the array
    var arr = [1, 2, 3]
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    // 1
    // 2
    // 3
 
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




