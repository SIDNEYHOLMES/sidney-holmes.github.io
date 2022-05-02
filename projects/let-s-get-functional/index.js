// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sidney-holmes.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//done
var maleCount = function(array) {
    var male = _.filter(array, function(customers) {
        if (customers.gender === "male") {
            return true;
        } else {return false}
    })
    return male.length
};

//done
var femaleCount = function(array) {
    var female = _.reduce(array, function(accumulator, current, index, collection) {
        if (current.gender === "female") {
            accumulator++
        }
        return accumulator;
    }, 0)
    return female;
};

var oldestCustomer = function(array) {
    var arr = []
    const old = _.reduce(array, function(acc, current, index, customers) {
        var filt = _.filter(array, function(customers) {
            if (current.age !== undefined) {
                arr.push({age: current.age, name: current.name})
            }
            
        })
        return filt
    }, 0)
    const result = _.reduce(arr, acc, current => acc = acc > current.age ? current.name : acc, 0)
    console.log(arr)
    return old
};

var youngestCustomer;

//done
var averageBalance = function(array) {
    // this array will store all of the customers balance strings
    var arr = []
    // if customers balance is not undefined push it to our new array
    var balance = _.filter(array, function(customers) {
         if (customers.balance !== undefined) {
            arr.push(customers.balance)
        }
    })
    // remove the $ from the begining of the string
    var sign_removal = _.map(arr, (s) => {return s.slice(1)});
    // remove the comma in the string
    var comma_removal = _.map(sign_removal, (c) => { return c.replace(/,/g, "")})
    // turn everything into a number 
var number = _.map(comma_removal, (b) => {return Number(b)})

var result = _.reduce(number, (a,b) => (a + b)) / number.length; 
    return result
};
//done
var firstLetterCount = function(array, letter) {
    var count = _.filter(array, function(customers) {
        if (customers.name.charAt(0).toUpperCase() === letter|| customers.name.charAt(0).toLowerCase() === letter) {
            return true
        } else {
            return false
        }
    });
    return count.length
};

//done
var friendFirstLetterCount = function(array, customer, letter) {
    // empty friend array that will store all of the friends of the person we are looking into
    var friend = []
    // if customer is the customer we are looking for push all there friends into friend array
    var filt = _.filter(array, function(customers) {
       if (customers.name === customer) {
          friend = customers.friends
       }
    })
    // if the first character of any of the names in friend is euqal to letter. accumulator ++
    var result = _.reduce(friend, function(accumulator, current, index, collection) {
        if (current.name.charAt(0) === letter.toLowerCase() || current.name.charAt(0) === letter.toUpperCase()) {
            accumulator++
    }
    // return the amount of friends with the letter as the first character in name
    return accumulator
}, 0)
    return result
};

var friendsCount = function(array, name) {
    
};

var topThreeTags;

// done
var genderCount = function (array) {
    var obj = {}

    var nonCount = function() {
        var non = _.filter(array, function(customers) {
        if (customers.gender === "non-binary") {
            return true;
        } else {return false};
    })
    return non.length
    }

    obj.male = maleCount(array);
    obj.female = femaleCount(array);
    obj["non-binary"] = nonCount(array);
    
    return obj
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
