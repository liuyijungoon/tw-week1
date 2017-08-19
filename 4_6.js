'use strict';
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
function get_letter_interval(number_a, number_b) {
    var collection3=[]
    var result=[]
    const collection4=['a','b','c','d','e']
    collection3=get_integer_interval(number_a, number_b)

    for (var x of collection3)
    {
        result.push(collection4[x-1])
    }
    return result
}
console.log(get_letter_interval(5,1))