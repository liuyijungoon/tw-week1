'use strict';

function get_union(collection_a, collection_b)
 {
      for (var i = 0; i<collection_b.length; i++)
      {
            if (containnn(collection_a,collection_b[i]))
            {
              collection_a.push(collection_b[i]);
            }          
      }
      return collection_a
}

function containnn(arr, obj)
{
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return false;
    }
  }
  return true;
}

module.exports = get_union;

