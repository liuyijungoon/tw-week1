'use strict';
function find_min(collection) {
    var min=collection[0]
    for (var xx of collection)
    {
        if(xx<min)
        {
            min=xx;
        }
    }
    return min;
}
function deletea(collection,ch) {
    var result=[];
    for (var ss of collection)
    {
        if (ss!=ch)
        {
            result.push(ss)
        }

    }
    return result;
}
function even_sort(collection){
    const num=collection.length
    var result=[]
    while(result.length<num)
    {
        result.push(find_min(collection))
        collection=deletea(collection,find_min(collection));
    }
    return result;
}
function rank_by_two_large_one_small(collection){
    var result=[];
    var collection1=even_sort(collection);
    var circle=[1,2,0,4,5,3,6,7]
    for (var i=0;i<circle.length;i++)
    {
        result.push(collection1[circle[i]])
    }

    return result;
}

console.log(rank_by_two_large_one_small([2, 8, 1, 9, 6, 4, 3, 10]))