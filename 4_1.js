'use strict';

function collect_all_even(collection) {
    var result=[]
    for (var x of collection)
    {
        if (x%2==0)
        {
            result.push(x)
        }
    }
    return result
}

module.exports = collect_all_even;
