function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}
function find(collection,ch) {
    for (var y of collection)
    {
        if (y.key===ch)
        {
            return true;
        }
    }
    return false;
}
function split(item) {
    var arr=item.split('-');
    return {key:arr[0],count:parseInt(arr[1])};
}
function push1(collection,key,count) {
    for (let i=0;i<count;i++)
    {
        collection.push(key);
    }
    return collection;
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
            push1(result,obj.key,obj.count);
        }
    }
    return result;
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
            result.push({key:x,count:1})
        }
    }
    return result;
}
function find_obj_in_loadAllItems(ch) {
    var array=loadAllItems();
    for (let xx of array)
    {
        if (xx.barcode===ch)
        {
            return xx;
        }
    }
}
function form_all_info(arr,alliterm_array){
    var result=[]
    for (let item of arr)
    {
        let obj=find_obj_in_loadAllItems(item.key)
        result.push({barcode:(item.key),name:(obj.name),unit:(obj.unit),price:(obj.price),'数量':(item.count)})
    }
    return result;
}
function is_in_loadPromotion(arr,ch) {
    //console.log(arr);
    for (let xxx of arr[0].barcodes)
    {
        //console.log(xxx);
        if (ch===xxx)
        {
            return true
        }
    }
    return false
}
function calculate_promotion(arr) {
    let promotionInfo=loadPromotions();
    //console.log(promotionInfo)
    for (let item of arr)
    {
        if (is_in_loadPromotion(promotionInfo,(item.barcode)))
        {
            let free_count=parseInt(item.数量/3);
            item['free_count']=free_count;
            item['free_money']=(free_count*(item.price)).toFixed(2);
            item['real_pay']=(((item.数量)-free_count)*(item.price)).toFixed(2);
        }
        else
        {
            item['free_count']=0;
            item['free_money']=0;
            item['real_pay']=((item.数量)*(item.price)).toFixed(2);
        }
    }
    return arr;
}
function printInventpry(string) {
    var sum=0;
    var free_sum=0;
    var alliterm_array=loadAllItems();
    var promotionInfo=loadPromotions();
    var statistics_quantity_array=statistics_quantity(string);//统计数量
    var form_all_info_array=form_all_info(statistics_quantity_array,alliterm_array);//具有完整数据的购物商品明细
    var all_inventory=calculate_promotion(form_all_info_array);
    //console.log(statistics_quantity_array);
    //console.log(form_all_info_array);
    var expectText= '***<没钱赚商店>购物清单***\n';
    for (let x of all_inventory)
    {
        sum=sum+Number(x.real_pay);
        free_sum+=Number(x.free_money);
        expectText=expectText+'名称：'+x.name+'，数量：'+x.数量+x.unit+'，单价：'+x.price.toFixed(2)+'（元），小计：'+x.real_pay+'（元）\n';
    }
    expectText=expectText+'----------------------\n'+'挥泪赠送商品：\n'
    for (let x of all_inventory)
    {
        if (x.free_count>0)
        {
            expectText=expectText+'名称：'+x.name+'，数量：'+x.free_count+x.unit+'\n';
        }
    }
    expectText=expectText+'----------------------\n'+'总计：'+sum.toFixed(2)+'（元）\n'+'节省：'+free_sum.toFixed(2)+'（元）\n'+'**********************';
    console.log(expectText);
    //console.log("Debug Info");
    return 'Hello World!';
}


console.log(printInventpry([
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
]))