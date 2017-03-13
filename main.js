'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    var total = arr.reduce(function(curr, val){
      return curr + val;
    }, base);
    return total;
  },

  someObjsContainProp: (arr, prop) =>{
    return arr.some(function(element, index, arr){
      return element.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    var filtered = arr.map(function(item){
      return {
        "first":item[0],
        "last":item[1]
      };
    });
    return filtered;
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(element, index, arr){
      return element.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    var filtered = arr.filter(function(item){
          return item.includes(str);
        });
        return filtered;
      },
      
};
