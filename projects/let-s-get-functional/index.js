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

var maleCount = function(array) {
    var male = _.filter(array, function(customers) {
        if (customers.gender === "male") {
            return true;
        } else {return false}
    })
    return male.length
};

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
    const old = _.reduce(array, function(acc, current, index, collection) {
        // if current age is higher then accumulator.
        if (current.age > acc) {
            // accumulator is now that age
            acc = current.age
        }
        return acc
    }, 0)
    const name = _.filter(array, function(customers) {
        if (customers.age === old) {
            return customers.name
        }
    })
      return name
};

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
