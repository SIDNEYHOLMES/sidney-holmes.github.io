/**
CONTROL FLOW

control flow in javascript is the order in which the computer executes statements in our code

when we run our code the computer reads it in order from first line in the file to the last line.
unless the computer runs across structures that change the control flow like loop and conditionals.

the conditionals that have effects on our control flow are 

IF statement
 if statements are used to specify a block of code to be executed if a condition is true
 Ex:
     \/ conditional
if (a > b) { // \/ code that will be executed if conditional is true
    console.log(a is more then b)
}

ELSE IF statement
else if statement is used to specify a new condition if the first condition is false
Ex:
     \/ conditional
if (a < b) { // \/ code that will be executed if conditional is true
 console.log(a is less then b)
}
         \/ conditional if the if statment is false
else if (a === b) { // code that will be exectuted if the condition is true
    console.log(a is equal to b)
}

ELSE statement
else statement is used to execute a new block of code if the if statement is false 
Ex:
     \/ condition 
if (a < b) { // \/ code that will be executed if conditional is true
    console.log(a is less then b)
}
else {           // \/ code that will be executed if conditional is false
    console.log(a is more then b)
}


SWITCH statement
switch statement is used to perform a varaity of different actions based on different conditions.
Ex:
        \/ the value that we will check based off of the specifications of that value
switch(value) {
    case 1:     \/ code that will be executed if our value is the specific condition we choose, in this case 1
    console.log(value is equal to one)
    break;
    case 2:      \/   code that will be executed if our value is the specific condition we choose, in this case 2
    console.log(value is equal to two)
    break
    case 3:    \/   code that will be executed if our value is the specific condition we choose, in this case 3
    console.log(value is equal to three)
    break;
    default:       \/  code that will be executed in the default case.
    console.log(value is equal to zero)
}

for example windows operation systems are constantly running on a loop. in this loop is a conditional that
checks if the user has selected shutdown/restart. if so that is when a shutdown function runs which would close all unesential programs and end itself
shutting down windows for the computer and ending the control flow

that is to put it very simply but control flow in javascript can be changed constently depending on how the program is created
within the scope of loops and conditinals
 */