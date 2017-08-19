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

function odd_sort(collection) {
    var result=[]
    var collection1=even_sort(collection)
    for(var count=collection1.length-1;count>=0;count--)
    {
        result.push(collection1[count]);
    }
    return result;
}
function even_asc_odd_desc (collection) {
    var result=[];
    var even_collection=[];
    var odd_collection=[];
    for (var xx of collection)
    {
        if(xx%2==0)
        {
            even_collection.push(xx);
        }else
        {
            odd_collection.push(xx);
        }
        even_collection=even_sort(even_collection);
        odd_collection=odd_sort(odd_collection);
        result=even_collection+','+odd_collection;
    }
    return result;
}
console.log(even_asc_odd_desc([2,1,6,3,8,10,5,4]))
