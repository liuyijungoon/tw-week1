function find_fibonacci_N(n) {
    var result=[0,1];
    for(var i=1;i<n;i++)
    {
        result.push(result[i-1]+result[i])
    }
    return result[n-1];
}
console.log(find_fibonacci_N(8))