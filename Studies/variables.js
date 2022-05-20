/**
 * VARIABLES
 * 
 * 0. Variables hold things in memory to be used later in the life-cycle of the program.
 * variables are named identifiers that can point to values of particular type, 
 * like numbers, strings, booleans, arrays, objects or another data-type.
 * variables are called so because once created we can change the value to anyother data-type. 
 * 
 * 1. to create a variable we can use the 3 diffrent types of keywords. 
 * var, let, and const. then we assing a name after the keyword. then we assign the variable to our data-type of choice
 * the differnece between these 3 keywords is that let and const are block scoped while var is global/function scoped.
 * this will be elobarated on later
 * 
 * 2. there are 2 phases of using variables: declaration and initialization (or assignment)
 * 
 * declaration is when we create a variable without any initialization.
 *  ex: var name; 
 * console.log(name) // prints => undefined
 * 
 * initilization is when we give a variable a data-type to store.
 *  ex: var name = "sidney"; 
 * console.log(name) // prints => "sidney"
 * 
 *
 * in javascript there is re-assignment and updating
 * re-assingment is when we try to make a new variable out of a old one. 
 example: var greet = "hi"; 
         var greet = "hello" 

 * while updating is changing the already exsisting variable into a new datatype. 
 example: var greet = "hi";
    greet = "hello"

 * var and let can be updated but var is the only keyword that can be re-declared. while const cannot be updated or re-declared at all 
    
    Ex: 
    var legs = 2
    let arms = 2
    const head = 1

var legs = 5 // console.log(legs) => 5
    legs = 4 // console.log(legs) => 4

let arms = 3 // console.log(arms) => SyntaxError: Identifier 'arms' has already been declared
    arms = 1 // console.log(arms) => 1

const head = 3 // console.log(head) => SyntaxError: Identifier 'head' has already been declared 
    head = 4 // console.log(head) => TypeError: Assignment to constant variable 
    

    3. Var let and const are all keywords used to declare and assign variables but they each work a bit differntly when it comes to the scope of the keyword and hoisting.
        scope is where these variables are available for use in our code. Hoisting is where a variable or function declaration is moved to the top of our scope before code execution

        Var:
        when var is declared outside a function the scope of the variable is global. That means the variable is available for use in the global window object
        when var is declared inside a function. we can only acsess it within the blockscope of that function 
        
        Ex:
        var greeting = "hello world"

        function greet () {
            var hey = "hey"
        }

        console.log(greeting) => "hello world"
        console.log(hey) => ReferenceError: hey is not defined

        here greeting is globally scoped because its initialized outside of a function allowing us to call the value anywhere.
        while hey is initialized inside the function scope meaning we cannot access the variable outside of the function

        hoisting is when the computer "hoists" a varaible or function to the top of their scope before code execution.
        in this case with var if we do this:

        console.log(greet)
        var greet = "hello world"

        the computer interpretes it as this:

        var greet;
        console.log(greet)
        greet = "hello world"

        so var variables are hoisted to the top of their scope and initialized with a value of undefined
        and gets declaired later where it gets the datavalue of our choice.

        The Problem With Var

        the main problem with var is that when we have large workspaces of code we can sometimes accedentily declair a variable twice. 
        this can create confusion when we get a output we wernt expecting but also bugs in our code that would take hours to fix.
        this is why let and const are necessary


        Let
        let is blockscoped. meaning the variable declared in a block ({} < this is a block) with let is only available for use within that block.

        Ex:

        let greet = "greetings world";
        let num = 4;

        if (num > 3) {
            let hello = "hello world"
            console.log(hello) // => "hello world"
        } 
        console.log(hello) // => hello is not deifned
        console.log(greet) // => "greetings world"

        with this example you can see that if we try to log hello outside of the conditional scope we get undefined.
        this is becuase let is block scoped. but we can still log greet because it is assigned to the global block scope.
        but what makes let better than var is when we use these scopes to our advantage when we declare a variable names. 

        Ex:

        let greet = "greetings world";
        let num = 4;

        if (num > 3) {
            let greet = "hello world"
            console.log(greet) // => "hello world"
        } 
        console.log(greet) // => "greetings world"

        this doesent produce any error even though we have 2 variable initializations with the same name. that is because due to the fact that let is block scoped
        we can use the same name as many times as we want as long as its in its own scope.

        hoisting let is similar to var. let declarations are hoisted to the top, but unlike var which is initialized as undefined the let keyword is not initialized at all.
        so if you try to use a let variable before declaration, youll get a reference error.
         

        Const 
        const is a blockscoped variable that cant be updated or re-declared. 

        Ex:

        const greet = "greetings world";
        let num = 4;

        if (num > 3) {
            const greet = "hello world"
            console.log(greet) // => "hello world"
        } 
        
        console.log(greet) // => "greetings world"

        just like let we can create 2 const declarations with the same name but the difference is that thoese 2 consts must remain the same value
        this can be very helpful if we have a object that we want to keep the values Constant

        hoisting with const is similar to let in that it is hoisted but not initialized

        
 */