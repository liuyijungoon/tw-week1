const collectionA = [
    {key: 'a', count: 2},
    {key: 'e', count: 2},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 2},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 2}
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
    

for (xx  of  collectionA)
{
  if (is_or_not_in_list(xx.key,objectB))
  {
      xx.count--
  }
}
console.log(collectionA)