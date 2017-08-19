function prime_factor(interg) {
   // var prime_arr=[];
    var text=interg+'=';
    for(var i=2;i<interg;i++)
    {
        while(interg!=i)
        {
            if(interg%i!=0)
            {
                break;
            }
            else
            {
                //prime_arr.push(i)
                text+=i;
                interg=interg/i;
            }
        }
    }
    //prime_arr.push(i);
    text+=i;
    return text;
}

console.log(prime_factor(20))