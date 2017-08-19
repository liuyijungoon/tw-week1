function loadPromotions() {
    return [{
        type: '满30减6元'
    }, {
        type: '指定菜品半价',
        items: ['ITEM0001', 'ITEM0022']
    }];
}
function loadAllItems() {
    return [{
        id: 'ITEM0001',
        name: '黄焖鸡',
        price: 18.00
    }, {
        id: 'ITEM0013',
        name: '肉夹馍',
        price: 6.00
    }, {
        id: 'ITEM0022',
        name: '凉皮',
        price: 8.00
    }, {
        id: 'ITEM0030',
        name: '冰锋',
        price: 2.00
    }];
}
function find(collection,ch) {
    for (var y of collection)
    {
        if (y.id===ch)
        {
            return true;
        }
    }
    return false;
}
function split(item) {
    var arr=item.split(' x ');
    return {id:arr[0],count:parseInt(arr[1])};
}
function expand(collection) {
    let result=[]
    let obj={}
    for (let item of collection)
    {
        if (item.length===10)
        {
            result.push(item)
        }else
        {
            obj=split(item)
            push1(result,obj.id,obj.count);
        }
    }
    return result;
}
function push1(collection,id,count) {
    for (let i=0;i<count;i++)
    {
        collection.push(id);
    }
    return collection;
}
function statistics_quantity(string) {
    var result=[];
    string=expand(string);
    for (let x of string)
    {
        if(find(result,x))
        {
            (result[result.length-1].count)++;
        }else
        {
            result.push({id:x,count:1})
        }
    }
    return result;
}
function find_item_in_loadAllItems(ch) {
    let loadAllItems_arr=loadAllItems();
    for ( let xxxx of loadAllItems_arr)
    {
        console.log(xxxx)
        console.log(ch);
        if (xxxx.id===ch)
        {
            return xxxx;
        }
    }
}
function form_all_info(arr){
    var result=[]
    for (let item of arr)
    {
        let obj=find_item_in_loadAllItems(item.id);
        result.push({id:(item.id),name:(obj.name),price:obj.price,count:(item.count)})
    }
    return result;
}
function printInventpry(input)
{
    var alliterm_array=loadAllItems();
    var promotionInfo=loadPromotions();
    var statistics_quantity_array=statistics_quantity(input);//统计数量
    console.log(statistics_quantity_array);
    console.log(form_all_info(statistics_quantity_array));
    return 'hello,world';
}

console.log(printInventpry(["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]))