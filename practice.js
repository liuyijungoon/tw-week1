const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
];
'use strict';

    var result=[];
    var count=[];
    var key=[];
    var counter=1;
    var flag=0
    collection.push('w')
    for (var i=1;i<collection.length;i++)
    {
        if ((collection[i].length>1)&&(collection[i-1].length==1))
        {
            flag=1
        }else if((collection[i].length==1)&&(collection[i-1].length>1))
        {
            flag=2
        }else if((collection[i].length==1)&&(collection[i-1].length==1)&&(collection[i]!=collection[i-1]))
        {
            flag=3
        }else if(collection[i]==collection[i-1])
        {
            flag=0
        }
         switch (flag)
         {
             case 0:
                 counter = counter+1
                 break
             case 1:
             case 3:
                 count.push(counter)
                 key.push(collection[i-1])
                 counter=1
                 break
             case 2:
                 key.push(collection[i-1][0])
                 count.push(Number(collection[i-1][2]))
                 break
         }
    }


    for (var j=0;j<count.length;j++)
    {
        var rr={}
        rr['key']=key[j];
        rr['count']=count[j];
        result.push(rr)
    }
     console.log(result)



