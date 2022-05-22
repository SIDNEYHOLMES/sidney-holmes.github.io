/** 
 * 
 * this is a list of all the datatypes in js and what they do / how they work
 * 
 * String
 * var str = "string"
 * strings are used to represent textual data (i.e. sequences of characters).
 * 
 * Number       or
 * var num = -33 || 3.33
 * numbers are used to represent positive or negative numbers with or without decimals
 * 
 * Boolean         or
 * var bool = true || false
 * a boolean is any two values of true or false. boolean values also come as a result of a comparison in a program like in the following example.
 *  if (1 < 10) {return true} else {return false}
 *
 * Object
 * var obj = {Name: "sid", Age: 17}
 * objects are a complex data type that contains properies defined as key-value pair. The property of key (name, age) is always a string while
 * the value property can be any data type (string, number, boolean, array, function, object)
 *
 * Array
 * var arr = ["str", 3.4, false, 33 ]
 *      index:  0     1     2     3
 * arrays are  a type of object used for storing multiple values in a single variable. each value in an array has a index position
 * an index always starts at 0 meaning that "str" in our example array is at the 0 index 
 *
 * Function
 * var func = function () {//do cool thing that works with no bugs}
 * functions are a callable object that executes a block of code. since functions are a type of object it is possible to assign them to a variable 
 *
 * Undefined
 * var und; // this would equal undefined because there is no initilization with this variable
 * undefined is a data type that can only have one value-the special undefined value.
 *
 * Null
 * var nul = null 
 * this is also a special data type that can only have one value-the special null value.
 *
 * NaN
 * var not_number = NaN
 * NaN stands for not a number and is a special numeric value that can be interpreted as a value that is undefined or null
 *
 * infinity
 * console.log(Infinity) // => Infinity
 * console.log(-Infinity) // => -Infinity
 * infinity is also a special numeric value that represents positive infinitys while -Infinity represents negative infinitys
 *
 * Copy by value
 * let a = "sidney";
 * let b = a;
 *
 * when working with primitive data types your variables will be making a copy of the value they're being assigned and represent that specific copy of the value
 * any changes to the orignal data type will not effect the copy that was made and stored in the variable we've created and vice versa. Ex:
 *
 * a = undefined
 * console.log(b) // prints sidney, not effected by a being reassigned
 *
 * Copy by reference
 * let a = {name: "sidney", age: 17} 
 * let b = a;
 *
 * when working with complex data types variables will not make a copy of the value they're being assigned, but instead will make a reference to that data
 * any manipulation of our variable will effect the original data since our variable is just a reference to the original data and vice versa. Ex:
 *
 * b.age = 20
 * console.log(a) // =>  {name: "sidney", age: 20} age is now equal to 20 because b is a reference and changes the orignal value of a
 * console.log(b) // => {name: "sidney", age: 20} age is 20 because this is the initale value we changed
 */