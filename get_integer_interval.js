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

module.exports = get_integer_interval;

