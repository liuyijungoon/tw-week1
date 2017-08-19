'use strict';
var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
function find(collection,ch)
{
    for(var yy of collection)
    {
        if(yy==ch)
        {
            return true
        }
    }
    return false
}
function get_intersection(collection_a, collection_b) {
    var collection_c=[]
    for (var xx of collection_b)
    {
        if (find(collection_a,xx))
        {
            collection_c.push(xx)
        }
    }
    return collection_c
}
console.log(get_intersection(collection_a, collection_b))