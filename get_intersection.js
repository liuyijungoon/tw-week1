'use strict';
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

module.exports = get_intersection;
