function find(collection,ch)
{
    for (var i=0;i<collection.length;i++ )
    {
        if (ch===collection[i])
        {
            return true
        }
    }
    return false
}
function get_union(collection_a, collection_b)
{
    for (var xx of collection_b)
    {
        if(find(collection_a,xx)==false)
        {
            collection_a.push(xx)
        }
    }
    return collection_a
}
var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
console.log(get_union(collection_a, collection_b))