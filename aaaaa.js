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
console.log(self_up(1,10))