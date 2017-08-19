const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
];


const objectB = {value: ['a', 'd', 'e', 'f']};

var result=[];
var count=[];
var key=[collection[0]];
var counter=1;
for (var i=1;i<collection.length;i++)
{
    if(i==(collection.length-1))
    {

        counter++;
        count.push(counter);
    }
    else if(collection[i]==collection[i-1])
    {
        counter++;
    }
    else
    {
        count.push(counter);
        counter=1;
        key.push(collection[i]);
    }

}

for (var j=0;j<count.length;j++)
{
    var rr={}
    rr['key']=key[j];
    rr['count']=count[j];
    result.push(rr)
}

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
for (var xx  of result)
{
    if (is_or_not_in_list(xx.key,objectB))
    {
        xx.count-=(parseInt(xx.count/3))
    }
}
console.log(result)