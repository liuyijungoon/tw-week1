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
function find_item(arr,ch) {
    for ( let xxxx of arr)
    {
        // console.log(xxxx)
        // console.log(ch);
        if (xxxx.id===ch)
        {
            return xxxx;
        }
    }
    return false;
}

function form_all_info(arr){
    var result=[]
    for (let item of arr)
    {
        let obj=find_item(loadAllItems(),item.id);
        result.push({id:(item.id),name:(obj.name),price:obj.price,count:(item.count)})
    }
    return result;
}
function program1_info_charge(arr) {
    let result=[];
    let result1=[];
    for(var w of arr){
        result.push(w);
    }
    let sum=0;
    let save=0
    for (let obj of result)
    {
        sum+=obj.price*obj.count
    }
    result.push({program:'满减'});
    if(sum>=30)
    {
        sum-=6;
        save=6
    }
    result.push({save:save})
    result.push({sum:sum})
    return result;
}
function program2_info_charge(arr) {
    let result1=[];
    for(var w of arr){
        result1.push(w);
    }
    let sum1=0;
    let save1=0;
    let loadPromotionsarray=loadPromotions();
    //console.log(loadPromotionsarray[1].items);
    for(let obj of result1 )
    {
        //console.log(obj.id);
        //console.log(obj.price);
        if((obj.id==loadPromotionsarray[1].items[0])||(obj.id==loadPromotionsarray[1].items[1]))
        {
            obj['是否半价']='是';
            sum1+=(obj.price)/2*obj.count;
            save1+=(obj.price)/2;
        }
        else
        {
            obj['是否半价']='否';
            sum1+=obj.price*obj.count;
        }
    }
    result1.push({program:'半价'});
    result1.push({save:save1})
    result1.push({sum:sum1})
    return result1;
}
function compare_program(arr) {
    let program1_info_arrry=program1_info_charge(arr);
    let program2_info_arrry=program2_info_charge(arr);
    if(program1_info_arrry[program1_info_arrry.length-1].sum<=program2_info_arrry[program2_info_arrry.length-1].sum)
    {
        return program1_info_arrry;
    }else
    {
        return program2_info_arrry;
    }
}
function printInventpry(input)
{
    var expectText='============= 订餐明细 =============\n';
    var alliterm_array=loadAllItems();
    var promotionInfo=loadPromotions();
    var statistics_quantity_array=statistics_quantity(input);//统计数量
    var form_all_info_array=form_all_info(statistics_quantity_array)
    //console.log(statistics_quantity_array);
    //console.log(form_all_info_array);
    var best_charge_array=compare_program(form_all_info_array)
    //console.log(best_charge_array);
    if ((best_charge_array[best_charge_array.length-3]['program']=='满减')&&(best_charge_array[best_charge_array.length-2].save>0))
    {
        for (var i=0;i<best_charge_array.length-3;i++)
        {
            expectText=expectText+best_charge_array[i].name+' x '+best_charge_array[i].count+' = '+best_charge_array[i].price*best_charge_array[i].count+'元\n'
        }
        expectText=expectText+'-----------------------------------\n'+'使用优惠:\n'+'满30减6元，省'+best_charge_array[best_charge_array.length-2].save+'元\n'+'-----------------------------------\n'+'总计：'+best_charge_array[best_charge_array.length-1].sum+'元\n';
        expectText=expectText+'===================================';
    }

    else if((best_charge_array[best_charge_array.length-3]['program']=='半价')&&(best_charge_array[best_charge_array.length-2].save>0))
    {
        for (var i=0;i<best_charge_array.length-3;i++)
        {
            expectText=expectText+best_charge_array[i].name+' x '+best_charge_array[i].count+' = '+best_charge_array[i].price*best_charge_array[i].count+'元\n'
        }
        expectText=expectText+'-----------------------------------\n'+'使用优惠:\n'+'指定菜品半价('
        for (var jj=0;jj<best_charge_array.length-3;jj++)
        {
            if(best_charge_array[jj]['是否半价']=='是')
            {
                expectText=expectText+best_charge_array[jj].name;
                if(jj<best_charge_array.length-4)
                {
                    expectText=expectText+'，';
                }
            }
        }
        expectText=expectText+')，省'+best_charge_array[best_charge_array.length-2].save+'元\n'+'-----------------------------------\n'+'总计：'+best_charge_array[best_charge_array.length-1].sum+'元\n';
        expectText=expectText+'===================================';
    }
    else
    {
        for (var i=0;i<best_charge_array.length-3;i++)
        {
            expectText=expectText+best_charge_array[i].name+' x '+best_charge_array[i].count+' = '+best_charge_array[i].price*best_charge_array[i].count+'元\n'
        }
        expectText=expectText+'-----------------------------------\n'+'总计：'+best_charge_array[best_charge_array.length-1].sum+'元\n';
        expectText=expectText+'===================================';
    }
    console.log(expectText);
    return 'hello,world';
}


console.log(printInventpry(["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]))