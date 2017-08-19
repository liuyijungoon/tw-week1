

function self_up(a,b)
{
    var result1=[]
    for (var i =a;i<=b;i++)
    {
        result1.push(i)
    }
    return result1
}
function self_down(a,b)
{
    var result2=[]
    for (var i =a;i>=b;i--)
    {
        result2.push(i)
    }
    return result2
}
function get_integer_interval(number_a, number_b) {
    var result=[]
    if (number_a<number_b){
        result=self_up(number_a,number_b)
        return result
    }
    else if (number_a>number_b){
        result=self_down(number_a,number_b)
        return result
    }
    else
    {
        result.push(number_a)
        return result
    }
}
function get_letter_interval_2(number_a, number_b)
{
    var collection_a = ['t', 'u', 'v', 'w', 'x',
        'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
        'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
        'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
        'az', 'ba'
    ];


    var result=[]
    var collection3=get_integer_interval(number_a, number_b)
    if ((number_a<number_b)||(number_a>number_b))
    {
        for (var x of collection3)
        {
            result.push(collection_a[x-1])
        }
    }
    else
    {
        result.push(collection_a[number_a-1])
    }
    return result
}
console.log(get_letter_interval_2(34,1))
console.log(get_letter_interval_2(9,9))