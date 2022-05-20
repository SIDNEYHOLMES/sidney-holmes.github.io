/**
in javascript primitive values like "string" are treated like objects for the soul purpose of being able 
to use methods and properties on them. this allows us to manipulate strings in a varity of differnt ways

LENGTH
string.length() ex: (

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let numberOfChar = alphabet.length() // the length method counts the number of characters in the string and outputs that number
console.log(numberOfChar) => 26
)

SLICE
string.slice(start, end) ex: (

let name = "sidney"

let sliced = name.slice(1); // slice will return a copy of the name variable with the first character removed or "sliced"
console.log(sliced) // => "idney"

let slicing = name.slice(3,6) // slice also has the option of taking 2 parameters representing start and end 
console.log(slicing) // => "ney"
)

SUBSTRING
string.substring(start, end) ex: (

let name = "Charlie kelly"

let sub = name.substring(-4, 8) // substring is similar to slice, but the differnece is that start and end values less than 0 are treeted as 0 in substring()
console.log(sub) // => "Charlie"
)

SUBSTR
string.substr(start, length) ex: (
    
 let name = "Dennis Renolds"

 let sub = name.substr(7, 6) // substr is similar to slice, but the differnece is that the secound parameter specifies the length of the extracted part.
 console.log(sub) // => "Renold"
)

REPLACE
string.replace("string1", "string2") ex: (

    let videoGame = "Borderlands 2 2"

    let replaced = videoGame.replace("2", "The PreSequal"); // replace() method only replaces the first specified value with another value in a string
    console.log(replaced) // => "Borderlands The PreSequal 2"
)

TOUPPERCASE
string.toUpperCase() ex: (

    let name = "sidney"

    let caps = name.toUpperCase() // toUpperCase capitalizes the string assigned to it
    console.log(caps) // => "SIDNEY" 
)

TOLOWERCASE
string.toLowerCase() ex: (
    
    let name = "SiDNEy"

    let lower = name.toLowerCase() // toLowerCase lowercases the string assigned to it
    console.log(lower) // => "sidney"
)

CONCAT
string1.concat("inbetween", string2) ex: (

    let firstName = "Sidney"
    let lastName = "Holmes"

    let fullName = firstName.concat("-", lastName); // concat takes 2 strings and combines them together with a optinal string to be in the middle of the 2 string parameters
    console.log(fullname) // => "Sidney-Holmes"
)

CHARAT
string.charAt(index) ex: (

    let greet = "Hello World"

    let char = greet.charAt(0) // charAt takes a string and returns the specified index of that string
    console.log(char) // => "H"
)
 */