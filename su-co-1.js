'use strict';

function even_to_letter(collection) {
    var result=[]
    var char_list=['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q'];
    for (var x of collection)
    {
        if (x%2==0)
        {
            result.push(char_list[x-1])
        }
    }

    return result//在这里写入代码
}

module.exports = even_to_letter;
