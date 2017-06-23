/**
 * General Utils
**/
// $.inArray(item, array);
// array.indexOf(item);
const utils = module.exports = {
  intersection_destructive (a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else /* they're equal */
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
},

  forEach (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  },
  winningCombos: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
}
