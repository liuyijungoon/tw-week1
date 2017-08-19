'use strict';
function self_up(a,b)
{
    var result1=[]
    var start_point=a+a%2
    for (var i =start_point;i<=b;i=i+2)
    {
        result1.push(i)
    }
    return result1
}
function self_down(a,b)
{
    var result2=[]
    var end_point=a-a%2
    for (var j =end_point;j>=b;j=j-2)
    {
        console.log('aaaaaaaaaa')
        result2.push(j)
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
    else if((number_a==number_b)&&number_a%2==0)
    {
        result.push(number_a)
        return result
    }
    else
    {
        result=[]
        return result
    }
    //在这里写入代码
}

module.exports = get_integer_interval;
console.log(get_integer_interval(10,1));
