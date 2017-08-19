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
function self_down(c,d)
{
    var result2=[]
    for (var i =c;i>=d;i--)
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
    if (number_a>number_b){
        result=self_down(number_a,number_b)
        return result
    }
    if(number_a==number_b)
    {
        result.push(number_a)
        return result
    }
}
console.log(get_integer_interval(5,1))