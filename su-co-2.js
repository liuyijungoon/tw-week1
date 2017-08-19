function average(collection)
{
    var sum=0
    for (var xx of collection)
    {
        sum=Number(xx)+sum
    }
    return sum/collection.length
}
function average_to_letter(collection) {
    var char_list=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result;
    var aver=average(collection);
    var b=Math.ceil(aver)
    console.log(b)
    result=char_list[b-1]
    return result
    //在这里写入代码
}
console.log(average_to_letter([1,2,3,4,5,6,7,8,9,10]))