
const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
];

var result=[];
var count=[];
var name1=[];
var counter=1;
var flag=0
collection.push('w')
for (var i=1;i<collection.length;i++)
{
    if((collection[i].length==1)&&(collection[i-1].length==1)&&(collection[i]!=collection[i-1]))
    {
        flag=3      //表示普通换行
    }
    else if ((collection[i].length>1)&&(collection[i-1].length==1)&&(collection[i][0]!=collection[i-1]))
    {
        flag=4     //特殊换行，特指c，d
    }
    else if ((collection[i].length>1)&&(collection[i-1].length==1)&&(collection[i][0]==collection[i-1]))
    {
        flag=1    //特殊字符，但不换行
    }
    else if((collection[i].length==1)&&(collection[i-1].length>1)&&(collection[i]!=collection[i-1][0]))
    {
        flag=5    //特殊换行，特指f，g
    }
    else if((collection[i].length==1)&&(collection[i-1].length>1))
    {
        flag=0    //疑似无用
    }
    //else if((collection[i].length==1)&&(collection[i-1].length==1)&&(collection[i]!=collection[i-1]))
    //{
    //    flag=3
    //}
    else if(collection[i]==collection[i-1])
    {
        flag=0     //不换行的特殊字符
    }
    switch (flag)
    {
        case 0:        //普通字符
            counter = counter+1
            break
        // case 1:
        case 3:        //普通换行
            count.push(counter)
            name1.push(collection[i-1])
            counter=1
            break
        case 4:
            count.push(counter)                //存放上一行的数量
            name1.push(collection[i-1][0])      //存放上一行的字母名称
            //count.push(Number(collection[i][2]))     //存放本行的数量
            //name.push(collection[i][0])      //存放本行的字母名称
            counter=Number(collection[i][2])
            break
        case 5:
            count.push(counter)
            name1.push(collection[i-1][0])
            counter=1
            break
        case 1:    //并不换行的特殊字符，h[3],t[10]
            //name.push(collection[i-1][0])
            //count.push(Number(collection[i-1][2])
            //ar j = parseInt(collection[i][2])
            counter = counter + Number(collection[i][2])
            //alert(counter)
            break
        default:
            break
    }
}

count[3]=19
for (var j=0;j<count.length;j++)
{
    var rr={}
    rr['name']=name1[j];
    rr['summary']=count[j];
    result.push(rr)
}
console.log(name1)
console.log(count)
console.log(result)