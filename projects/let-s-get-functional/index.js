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
    var name = ""
    const old = _.reduce(array, function(acc, current, index, collection) {
        if (current.age > acc) {
            acc = current.age
        }
        
    }, 0)
        return old
};

var youngestCustomer;

var averageBalance = function(array) {
    var result = _.filter(array, function(customers) {
        if (customers.balance >=  1) {
            return true
        } else {return false}
    })
    return result / result.length
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

var friendFirstLetterCount = function(array, customer, letter) {
    
};

var friendsCount = function(array, name) {
        var friend = _.map(array, function(customer){
            if(customer.friends.name === name) {
                return customer.name
            } 
        })
        return friend.name;
        
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
