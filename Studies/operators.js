/*
OPERATORS

0) Operators in javascript performs some type of operation on a single or multiple operands (data values)
 and produces a result from it. for example we can use the the + arithmetic operator to add 
 data values like strings and numbers together.

1) there are multiple differnet types of operators that work in differing ways

    Arithmetic operators

 operator | description  | example
     + | addition  | ex: 1 + 1 = 2
     - | subtraction | ex: 1 - 1 = 0
     * | multiplication | ex: 2 * 2 = 4
    ** | exponention | ex: 2 ** 3 = 8
     / | division | ex: 4 / 2 = 2
     % | modulus | ex: 12 % 5 = 2
    ++ | increment | let v = 1;  v++ = 2
    -- | decrement | let v = 2; v-- = 1



    Assignment Operators

 operator | example 
    = | a = b
    += | a += b (same as a = a + b)
    -= | a -= b (same as a = a - b)
    *= | a *= b (same as a = a * b)
    /= | a \= b (same as a = a / b)
    %= | a %= b (same as a = a % b)
    **= | a **= b (same as a = a ** b)



    Comparison Operators

    operator | description
    == | equal to
    === | strictly equal to meaning equal value and equal type
    != | not equal to
    !== | strictly not equal meaning not equal value or not equal type
    > | greater than
    < | less than
    >= | greater or equal to
    <= | less than or equal to
    ? | ternery operator (example: a < b ? a : b)
                  // if a is less than b return a else return b


    Logical Operator

    operator | description | example

                    // if num1 is equal to value AND num 2 is equal to amount return true
    && | logical and | if (num1 === value && num2 === amount) {return true}

                    //if num1 OR num2 is equal to value return true
    || | logical or | if (num1 === value || num2 === value) {return true}

                    // if value is false console.log the thing into the console
    ! | logical not | if (!value) {console.log("will only run if value is false")}



    Type Operator

    operator | description
    typeof | returns the type of a variable
    instanceof | returns true if an object is an instance of an object type
 */