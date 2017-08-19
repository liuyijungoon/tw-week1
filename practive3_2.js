const collectionA = [
    {key: 'a', count: 3},
    {key: 'e', count: 7},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 9},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 5}
];
const objectB = {value: ['a', 'd', 'e', 'f']}
function is_or_not_in_list(x,list)
{
    for (var i=0;i< list.value.length;i++)
    {
        if (x==list.value[i])
        {
            return true;
        }
    }
}


for (var xx  of collectionA)
{
    if (is_or_not_in_list(xx.key,objectB))
    {
        xx.count-=(parseInt(xx.count/3))
    }
}
console.log(collectionA)